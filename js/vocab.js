/* Módulo Vocabulario: tarjetas con repaso espaciado. */
const Vocab = (function () {
  let host = null;
  let queue = [];
  let current = null;

  function dueCards() {
    return VOCAB.filter((c) => SRS.isDue(Store.srs(c.id)));
  }

  function stats() {
    return { total: VOCAB.length, due: dueCards().length };
  }

  function render(container) {
    host = container;
    startSession(false);
  }

  function startSession(practiceAll) {
    queue = shuffle(practiceAll ? VOCAB.slice() : dueCards());
    next();
  }

  function next() {
    current = queue.shift() || null;
    draw();
  }

  function draw() {
    clear(host);
    const s = stats();

    if (!current) {
      host.appendChild(
        h("div", { class: "panel center" }, [
          h("div", { class: "big-emoji" }, "✅"),
          h("h2", {}, "¡Al día!"),
          h(
            "p",
            { class: "muted" },
            s.total
              ? "No tenés tarjetas para repasar ahora. Volvé más tarde."
              : "No hay tarjetas cargadas todavía."
          ),
          s.total
            ? h("button", { class: "btn ghost", onClick: () => startSession(true) }, "Practicar todas igual")
            : null,
        ])
      );
      return;
    }

    host.appendChild(
      h("div", { class: "progress-row" }, [
        h("span", { class: "muted small" }, "Quedan " + (queue.length + 1)),
        h("span", { class: "muted small" }, SRS.dueInLabel(Store.srs(current.id))),
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
      h("button", { class: "btn grade again", onClick: () => grade(0) }, "Otra vez"),
      h("button", { class: "btn grade hard", onClick: () => grade(1) }, "Difícil"),
      h("button", { class: "btn grade good", onClick: () => grade(2) }, "Bien"),
      h("button", { class: "btn grade easy", onClick: () => grade(3) }, "Fácil"),
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
      "Mostrar"
    );
    host.appendChild(reveal);
  }

  function grade(g) {
    Store.setSrs(current.id, SRS.schedule(Store.srs(current.id), g));
    if (g === 0) queue.push(current); // "otra vez": reaparece al final de la sesión
    next();
  }

  return { render, stats };
})();
