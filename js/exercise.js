/* Ejercicio de respuesta cerrada ("choice") o escrita ("fill"), compartido por
   Gramática, Producción y, más adelante, el modo Aventura. Dibuja la consigna, los
   controles y el aviso de corrección; quien lo llama decide qué hacer con el resultado
   (contar aciertos, mostrar "Siguiente", marcar como hecho). */
const Exercise = (function () {
  // Agrega a `host`, en este orden: la consigna, la pista (si hay), los controles,
  // el botón de "Ver respuesta" (solo si se pasa revealLabel) y el aviso de corrección.
  // ex: { type: "choice", prompt, options, answer, explain } o
  //     { type: "fill" (o sin type), prompt, accept, answer, hint, explain } o
  //     { type: "order", prompt, words, answer, hint, explain }   (armar la frase)
  //     { type: "match", prompt, pairs: [{ left, right }], answer, explain }   (unir)
  // opts: { placeholder, checkLabel, revealLabel, onAnswer(ok) }
  function mount(host, ex, opts) {
    host.appendChild(h("div", { class: "card question" }, promptHtml(ex.prompt)));
    if (ex.hint) host.appendChild(h("div", { class: "muted small hint" }, "💡 " + ex.hint));

    const feedback = h("div", { class: "feedback" });
    if (ex.type === "choice") choice(host, ex, feedback, opts);
    else if (ex.type === "order") order(host, ex, feedback, opts);
    else if (ex.type === "match") match(host, ex, feedback, opts);
    else fill(host, ex, feedback, opts);
    host.appendChild(feedback);
  }

  // Cada respuesta cuenta como actividad del día (racha), sea cual sea el modo.
  function recordActivity() {
    Streak.recordActivity();
    updateHeaderStreak();
  }

  function choice(host, ex, feedback, opts) {
    const options = h("div", { class: "options" });
    shuffle(ex.options).forEach((opt) => {
      const b = h(
        "button",
        {
          class: "btn option",
          onClick: () => {
            recordActivity();
            const ok = opt === ex.answer;
            Array.from(options.children).forEach((c) => {
              c.disabled = true;
              if (c.textContent === ex.answer) c.classList.add("right");
            });
            if (!ok) b.classList.add("wrong");
            showFeedback(feedback, ok, ex.answer, ex.explain);
            opts.onAnswer(ok);
          },
        },
        opt
      );
      options.appendChild(b);
    });
    host.appendChild(options);
  }

  function fill(host, ex, feedback, opts) {
    const input = h("input", {
      class: "text-input",
      type: "text",
      placeholder: opts.placeholder,
      autocomplete: "off",
      autocapitalize: "none",
      spellcheck: "false",
    });
    const check = h(
      "button",
      {
        class: "btn primary",
        onClick: () => {
          recordActivity();
          const accepts = (ex.accept || [ex.answer]).map(norm);
          const ok = accepts.includes(norm(input.value));
          input.disabled = true;
          check.disabled = true;
          if (reveal) reveal.disabled = true;
          input.classList.add(ok ? "right" : "wrong");
          showFeedback(feedback, ok, ex.answer, ex.explain);
          if (ok && spellingDiffers(input.value, ex.answer))
            feedback.appendChild(h("div", { class: "fb-explain" }, I18n.t("feedback_correct_spelling", ex.answer)));
          opts.onAnswer(ok);
        },
      },
      opts.checkLabel
    );
    const reveal = opts.revealLabel
      ? h("button", { class: "btn ghost", onClick: () => { input.value = ex.answer; input.focus(); } }, opts.revealLabel)
      : null;
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && !input.disabled) check.click();
    });

    host.appendChild(h("div", { class: "inline" }, [input, check]));
    if (reveal) host.appendChild(reveal);
  }

  // Armar la frase tocando las palabras: arriba quedan las elegidas (en orden), abajo las que faltan.
  // Tocar una palabra ya elegida la devuelve abajo.
  function order(host, ex, feedback, opts) {
    const answerRow = h("div", { class: "order-answer" });
    const bank = h("div", { class: "order-bank" });
    let placed = [];
    let done = false;

    const chips = ex.words.map((w) => {
      const chip = h("button", { class: "chip", type: "button", onClick: () => toggle(chip) }, w);
      return chip;
    });
    const check = h(
      "button",
      {
        class: "btn primary",
        onClick: () => {
          recordActivity();
          const ok = placed.map((c) => c.textContent).join(" ") === ex.answer;
          done = true;
          chips.forEach((c) => (c.disabled = true));
          check.disabled = true;
          erase.disabled = true;
          answerRow.classList.add(ok ? "right" : "wrong");
          showFeedback(feedback, ok, ex.answer, ex.explain);
          opts.onAnswer(ok);
        },
      },
      opts.checkLabel || I18n.t("grammar_check")
    );
    const erase = h("button", { class: "btn ghost", onClick: () => { placed = []; redraw(); } }, opts.clearLabel || I18n.t("exercise_clear"));

    function toggle(chip) {
      if (done) return;
      const i = placed.indexOf(chip);
      if (i >= 0) placed.splice(i, 1);
      else placed.push(chip);
      redraw();
    }
    function redraw() {
      clear(answerRow);
      clear(bank);
      placed.forEach((c) => answerRow.appendChild(c));
      chips.forEach((c) => { if (placed.indexOf(c) < 0) bank.appendChild(c); });
      check.disabled = placed.length !== chips.length;
      erase.disabled = placed.length === 0;
    }

    host.appendChild(answerRow);
    host.appendChild(bank);
    host.appendChild(h("div", { class: "order-actions" }, [check, erase]));
    redraw();
  }

  // Unir cada palabra de la columna izquierda con su significado de la derecha. Se puede empezar
  // por cualquier lado. Cuenta como acierto si se unió todo sin equivocarse ninguna vez.
  function match(host, ex, feedback, opts) {
    let seleccion = null; // { lado, boton }
    let errores = 0;
    let unidos = 0;

    const columna = (lado) => {
      const items = shuffle(ex.pairs.map((p, i) => ({ texto: p[lado], i })));
      return h(
        "div",
        { class: "match-col" },
        items.map((it) => {
          const b = h("button", { class: "match-item", type: "button", onClick: () => tocar(lado, b) }, it.texto);
          b.dataset.par = it.i;
          return b;
        })
      );
    };

    function tocar(lado, boton) {
      if (boton.disabled) return;
      if (!seleccion || seleccion.lado === lado) {
        if (seleccion) seleccion.boton.classList.remove("selected");
        seleccion = { lado, boton };
        boton.classList.add("selected");
        return;
      }
      const otro = seleccion.boton;
      otro.classList.remove("selected");
      seleccion = null;
      if (otro.dataset.par === boton.dataset.par) {
        [otro, boton].forEach((b) => { b.classList.add("right"); b.disabled = true; });
        unidos++;
        if (unidos === ex.pairs.length) terminar();
      } else {
        errores++;
        [otro, boton].forEach((b) => b.classList.add("wrong"));
        setTimeout(() => [otro, boton].forEach((b) => b.classList.remove("wrong")), 600);
      }
    }

    function terminar() {
      recordActivity();
      const ok = errores === 0;
      showFeedback(feedback, ok, ex.answer, ex.explain);
      opts.onAnswer(ok);
    }

    host.appendChild(h("div", { class: "match-grid" }, [columna("left"), columna("right")]));
  }

  return { mount };
})();
