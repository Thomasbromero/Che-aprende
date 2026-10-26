/* Ejercicio de respuesta cerrada ("choice") o escrita ("fill"), compartido por
   Gramática, Producción y, más adelante, el modo Aventura. Dibuja la consigna, los
   controles y el aviso de corrección; quien lo llama decide qué hacer con el resultado
   (contar aciertos, mostrar "Siguiente", marcar como hecho). */
const Exercise = (function () {
  // Agrega a `host`, en este orden: la consigna, la pista (si hay), los controles,
  // el botón de "Ver respuesta" (solo si se pasa revealLabel) y el aviso de corrección.
  // ex: { type: "choice", prompt, options, answer, explain } o
  //     { type: "fill" (o sin type), prompt, accept, answer, hint, explain }
  // opts: { placeholder, checkLabel, revealLabel, onAnswer(ok) }
  function mount(host, ex, opts) {
    host.appendChild(h("div", { class: "card question" }, promptHtml(ex.prompt)));
    if (ex.hint) host.appendChild(h("div", { class: "muted small hint" }, "💡 " + ex.hint));

    const feedback = h("div", { class: "feedback" });
    if (ex.type === "choice") choice(host, ex, feedback, opts);
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

  return { mount };
})();
