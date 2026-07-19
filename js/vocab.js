/* Módulo Vocabulario: tarjetas filtradas por categoría (todas / completas /
   por completar). Al mostrar una tarjeta solo hay 2 botones: "Otra vez"
   (la manda a "por completar") y "La sé" (la manda a "completas"). */
const Vocab = (function () {
  let host = null;
  let queue = [];
  let current = null;
  let filter = "pending"; // "all" | "done" | "pending"

  function isDone(c) {
    const rec = Store.srs(c.id);
    if (!rec) return false;
    if (typeof rec.done === "boolean") return rec.done;
    return (rec.reps || 0) >= 1; // formato viejo (antes de simplificar a 2 botones)
  }

  function doneCards() {
    return VOCAB.filter((c) => isDone(c));
  }

  function pendingCards() {
    return VOCAB.filter((c) => !isDone(c));
  }

  function cardsForFilter(f) {
    if (f === "done") return doneCards();
    if (f === "pending") return pendingCards();
    return VOCAB.slice();
  }

  function stats() {
    return { total: VOCAB.length, pending: pendingCards().length };
  }

  function render(container) {
    host = container;
    startSession(filter);
  }

  function startSession(f) {
    filter = f;
    queue = shuffle(cardsForFilter(f));
    next();
  }

  function next() {
    current = queue.shift() || null;
    draw();
  }

  function filterTabs() {
    const tabs = [
      { key: "all", label: I18n.t("vocab_filter_all") },
      { key: "done", label: I18n.t("vocab_filter_done") },
      { key: "pending", label: I18n.t("vocab_filter_pending") },
    ];
    return h(
      "div",
      { class: "filter-tabs" },
      tabs.map((t) =>
        h(
          "button",
          {
            class: "filter-tab" + (filter === t.key ? " active" : ""),
            onClick: () => startSession(t.key),
          },
          t.label
        )
      )
    );
  }

  function draw() {
    clear(host);
    host.appendChild(filterTabs());

    if (!current) {
      host.appendChild(
        h("div", { class: "panel center" }, [
          h("div", { class: "big-emoji" }, filter === "pending" ? "✅" : filter === "done" ? "🌱" : "🗂️"),
          h("h2", {}, I18n.t("vocab_empty_title", filter)),
          h("p", { class: "muted" }, I18n.t("vocab_empty_desc", filter)),
        ])
      );
      return;
    }

    host.appendChild(
      h("div", { class: "progress-row" }, [
        h("span", { class: "muted small" }, I18n.t("vocab_remaining", queue.length + 1)),
      ])
    );

    const back = h("div", { class: "back hidden" }, [
      h("div", { class: "hu" }, current.hu),
      h("div", { class: "example" }, current.example),
      current.note ? h("div", { class: "note muted small" }, current.note) : null,
    ]);

    const card = h("div", { class: "card flashcard" }, [
      h("div", { class: "term" }, current.term),
      back,
    ]);
    host.appendChild(card);

    const grades = h("div", { class: "grades" }, [
      h("button", { class: "btn grade again", onClick: () => grade(false) }, I18n.t("vocab_again")),
      h("button", { class: "btn grade easy", onClick: () => grade(true) }, I18n.t("vocab_know")),
    ]);

    const reveal = h(
      "button",
      {
        class: "btn primary wide",
        onClick: () => {
          back.classList.remove("hidden");
          reveal.replaceWith(grades);
        },
      },
      I18n.t("vocab_show")
    );
    host.appendChild(reveal);
  }

  function grade(knowsIt) {
    Streak.recordActivity();
    updateHeaderStreak();
    Store.setSrs(current.id, { done: knowsIt });
    if (!knowsIt) queue.push(current); // "otra vez": reaparece al final de la sesión
    next();
  }

  return { render, stats };
})();
