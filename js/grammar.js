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
    const data = Store.settings().learningLang === "de" ? GRAMMAR_DE : GRAMMAR;
    host.appendChild(h("p", { class: "muted" }, I18n.t("grammar_pick_topic")));
    data.forEach((topic) => {
      const done = Store.grammarDone(topic.id);
      host.appendChild(
        h("button", { class: "topic-card" + (done ? " done" : ""), onClick: () => openTopic(topic) }, [
          h("div", { class: "topic-title" }, topic.title),
          h(
            "div",
            { class: "topic-sub" },
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

      const nextBtn = h(
        "button",
        { class: "btn primary wide hidden", onClick: () => { i++; step(); } },
        I18n.t("grammar_next")
      );
      Exercise.mount(host, ex, {
        placeholder: I18n.t("grammar_answer_placeholder"),
        checkLabel: I18n.t("grammar_check"),
        onAnswer: (ok) => {
          if (ok) correct++;
          nextBtn.classList.remove("hidden");
        },
      });
      host.appendChild(nextBtn);
    }

    step();
  }

  return { render };
})();
