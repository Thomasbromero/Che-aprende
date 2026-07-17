/* Módulo Producción: producción controlada con autocorrección. */
const Produccion = (function () {
  let host = null;

  function render(container) {
    host = container;
    run();
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
            h("h2", {}, "Terminaste: " + correct + " / " + items.length),
            h("button", { class: "btn primary wide", onClick: () => run() }, "De nuevo"),
          ])
        );
        return;
      }

      const it = items[i];
      host.appendChild(
        h("div", { class: "progress-row" }, [
          h("span", { class: "muted small" }, i + 1 + " / " + items.length),
          h("span", { class: "muted small" }, "Producción"),
        ])
      );
      host.appendChild(h("div", { class: "card question" }, promptHtml(it.prompt)));
      if (it.hint) host.appendChild(h("div", { class: "muted small hint" }, "💡 " + it.hint));

      const feedback = h("div", { class: "feedback" });
      const input = h("input", {
        class: "text-input",
        type: "text",
        placeholder: "Tu respuesta",
        autocomplete: "off",
        autocapitalize: "none",
        spellcheck: "false",
      });
      const nextBtn = h(
        "button",
        { class: "btn primary wide hidden", onClick: () => { i++; step(); } },
        "Siguiente"
      );
      const check = h(
        "button",
        {
          class: "btn primary",
          onClick: () => {
            const accepts = (it.accept || [it.answer]).map(norm);
            const ok = accepts.includes(norm(input.value));
            if (ok) correct++;
            input.disabled = true;
            check.disabled = true;
            reveal.disabled = true;
            input.classList.add(ok ? "right" : "wrong");
            showFeedback(feedback, ok, it.answer, it.explain);
            if (ok && input.value.trim() !== it.answer)
              feedback.appendChild(h("div", { class: "fb-explain" }, "Escritura correcta: " + it.answer));
            nextBtn.classList.remove("hidden");
          },
        },
        "Corregir"
      );
      const reveal = h(
        "button",
        { class: "btn ghost", onClick: () => { input.value = it.answer; input.focus(); } },
        "Ver respuesta"
      );
      input.addEventListener("keydown", (e) => {
        if (e.key === "Enter" && !input.disabled) check.click();
      });

      host.appendChild(h("div", { class: "inline" }, [input, check]));
      host.appendChild(reveal);
      host.appendChild(feedback);
      host.appendChild(nextBtn);
    }

    step();
  }

  return { render };
})();
