/* Módulo Producción: producción controlada con autocorrección.
   Las consignas (prompt, hint, answer, explain) son contenido de aprendizaje
   y siempre quedan en español, sin importar el idioma de la interfaz. */
const Produccion = (function () {
  let host = null;

  function render(container) {
    host = container;
    run();
  }

  function stats() {
    const completed = PRODUCCION.filter((it) => Store.produccionDone(it.id)).length;
    return { total: PRODUCCION.length, completed };
  }

  function run() {
    const items = PRODUCCION;
    let i = 0,
      correct = 0;

    function step() {
      clear(host);

      if (i >= items.length) {
        host.appendChild(
          h("div", { class: "panel center" }, [
            h("div", { class: "big-emoji" }, correct === items.length ? "🎉" : "👏"),
            h("h2", {}, I18n.t("production_finished", correct, items.length)),
            h("button", { class: "btn primary wide", onClick: () => run() }, I18n.t("production_again")),
          ])
        );
        return;
      }

      const it = items[i];
      host.appendChild(
        h("div", { class: "progress-row" }, [
          h("span", { class: "muted small" }, i + 1 + " / " + items.length),
          h("span", { class: "muted small" }, I18n.t("production_label")),
        ])
      );

      const nextBtn = h(
        "button",
        { class: "btn primary wide hidden", onClick: () => { i++; step(); } },
        I18n.t("production_next")
      );
      Exercise.mount(host, it, {
        placeholder: I18n.t("production_answer_placeholder"),
        checkLabel: I18n.t("production_check"),
        revealLabel: I18n.t("production_reveal"),
        onAnswer: (ok) => {
          Store.markProduccion(it.id);
          if (ok) correct++;
          nextBtn.classList.remove("hidden");
        },
      });
      host.appendChild(nextBtn);
    }

    step();
  }

  return { render, stats };
})();
