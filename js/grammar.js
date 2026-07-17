/* Módulo Gramática: lista de temas + ejercicios autocorregidos.
   Los temas (título, explicación, ejemplos, ejercicios) son contenido de aprendizaje
   y siempre quedan en español, sin importar el idioma de la interfaz. */
const Grammar = (function () {
  let host = null;

  function render(container) {
    host = container;
    list();
  }

  function list() {
    clear(host);
    host.appendChild(h("p", { class: "muted" }, I18n.t("grammar_pick_topic")));
    GRAMMAR.forEach((topic) => {
      const done = Store.grammarDone(topic.id);
      host.appendChild(
        h("button", { class: "topic-card", onClick: () => openTopic(topic) }, [
          h("div", { class: "topic-title" }, topic.title),
          h(
            "div",
            { class: "topic-sub muted small" },
            I18n.t("grammar_exercise_count", topic.exercises.length) + (done ? I18n.t("grammar_done_suffix") : "")
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
      h("button", { class: "btn primary wide", onClick: () => runExercises(topic) }, I18n.t("grammar_start"))
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
            h("h2", {}, I18n.t("grammar_finished", correct, exs.length)),
            h("button", { class: "btn primary wide", onClick: () => runExercises(topic) }, I18n.t("grammar_again")),
            h("button", { class: "btn ghost wide", onClick: () => list() }, I18n.t("grammar_back_to_topics")),
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
        I18n.t("grammar_next")
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
          placeholder: I18n.t("grammar_answer_placeholder"),
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
                feedback.appendChild(h("div", { class: "fb-explain" }, I18n.t("feedback_correct_spelling", ex.answer)));
              nextBtn.classList.remove("hidden");
            },
          },
          I18n.t("grammar_check")
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
