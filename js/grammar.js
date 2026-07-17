/* Módulo Gramática: lista de temas + ejercicios autocorregidos. */
const Grammar = (function () {
  let host = null;

  function render(container) {
    host = container;
    list();
  }

  function list() {
    clear(host);
    host.appendChild(h("p", { class: "muted" }, "Elegí un tema para practicar."));
    GRAMMAR.forEach((topic) => {
      const done = Store.grammarDone(topic.id);
      host.appendChild(
        h("button", { class: "topic-card", onClick: () => openTopic(topic) }, [
          h("div", { class: "topic-title" }, topic.title),
          h(
            "div",
            { class: "topic-sub muted small" },
            topic.exercises.length + " ejercicios" + (done ? " · ✓ hecho" : "")
          ),
        ])
      );
    });
  }

  function openTopic(topic) {
    clear(host);
    host.appendChild(backBtn(() => list()));
    host.appendChild(h("h2", {}, topic.title));
    host.appendChild(h("div", { class: "lesson" }, topic.explain));
    if (topic.examples && topic.examples.length) {
      host.appendChild(
        h("ul", { class: "examples" }, topic.examples.map((e) => h("li", {}, e)))
      );
    }
    host.appendChild(
      h("button", { class: "btn primary wide", onClick: () => runExercises(topic) }, "Empezar ejercicios")
    );
  }

  function runExercises(topic) {
    const exs = topic.exercises;
    let i = 0,
      correct = 0;

    function step() {
      clear(host);

      if (i >= exs.length) {
        Store.markGrammar(topic.id);
        host.appendChild(
          h("div", { class: "panel center" }, [
            h("div", { class: "big-emoji" }, correct === exs.length ? "🎉" : "👏"),
            h("h2", {}, "Terminaste: " + correct + " / " + exs.length),
            h("button", { class: "btn primary wide", onClick: () => runExercises(topic) }, "De nuevo"),
            h("button", { class: "btn ghost wide", onClick: () => list() }, "Volver a temas"),
          ])
        );
        return;
      }

      const ex = exs[i];
      host.appendChild(
        h("div", { class: "progress-row" }, [
          h("span", { class: "muted small" }, i + 1 + " / " + exs.length),
          h("span", { class: "muted small" }, topic.title),
        ])
      );
      host.appendChild(h("div", { class: "card question" }, promptHtml(ex.prompt)));

      const feedback = h("div", { class: "feedback" });
      const nextBtn = h(
        "button",
        { class: "btn primary wide hidden", onClick: () => { i++; step(); } },
        "Siguiente"
      );

      if (ex.type === "choice") {
        const opts = h("div", { class: "options" });
        shuffle(ex.options).forEach((opt) => {
          const b = h(
            "button",
            {
              class: "btn option",
              onClick: () => {
                const ok = opt === ex.answer;
                if (ok) correct++;
                Array.from(opts.children).forEach((c) => {
                  c.disabled = true;
                  if (c.textContent === ex.answer) c.classList.add("right");
                });
                if (!ok) b.classList.add("wrong");
                showFeedback(feedback, ok, ex.answer, ex.explain);
                nextBtn.classList.remove("hidden");
              },
            },
            opt
          );
          opts.appendChild(b);
        });
        host.appendChild(opts);
      } else {
        const input = h("input", {
          class: "text-input",
          type: "text",
          placeholder: "Escribí la respuesta",
          autocomplete: "off",
          autocapitalize: "none",
          spellcheck: "false",
        });
        const check = h(
          "button",
          {
            class: "btn primary",
            onClick: () => {
              const accepts = (ex.accept || [ex.answer]).map(norm);
              const ok = accepts.includes(norm(input.value));
              if (ok) correct++;
              input.disabled = true;
              check.disabled = true;
              input.classList.add(ok ? "right" : "wrong");
              showFeedback(feedback, ok, ex.answer, ex.explain);
              if (ok && input.value.trim() !== ex.answer)
                feedback.appendChild(h("div", { class: "fb-explain" }, "Escritura correcta: " + ex.answer));
              nextBtn.classList.remove("hidden");
            },
          },
          "Corregir"
        );
        input.addEventListener("keydown", (e) => {
          if (e.key === "Enter" && !input.disabled) check.click();
        });
        host.appendChild(h("div", { class: "inline" }, [input, check]));
      }

      host.appendChild(feedback);
      host.appendChild(nextBtn);
    }

    step();
  }

  return { render };
})();
