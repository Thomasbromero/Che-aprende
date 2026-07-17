/* App: navegación, inicio y ajustes. */
document.addEventListener("DOMContentLoaded", init);

function init() {
  setupTheme();
  renderHeader();
  setupNav();
  showView("home");
}

function renderHeader() {
  const s = Store.settings();
  const title = document.getElementById("app-title");
  if (title) title.textContent = "🧉 " + (s.appName || "Che, aprendé");
  document.title = s.appName || "Che, aprendé";
}

function setupTheme() {
  applyTheme();
  const btn = document.getElementById("theme-toggle");
  if (btn) btn.addEventListener("click", toggleTheme);
  if (window.matchMedia) {
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
      if (!Store.settings().theme) applyTheme(); // en modo automático, seguí al sistema
    });
  }
}

function effectiveTheme() {
  const t = Store.settings().theme;
  if (t === "light" || t === "dark") return t;
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme() {
  const t = Store.settings().theme;
  if (t === "light" || t === "dark") document.documentElement.setAttribute("data-theme", t);
  else document.documentElement.removeAttribute("data-theme");

  const btn = document.getElementById("theme-toggle");
  if (!btn) return;
  const eff = effectiveTheme();
  btn.textContent = eff === "dark" ? "☀️" : "🌙";
  btn.setAttribute("aria-label", eff === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro");
}

function toggleTheme() {
  Store.updateSettings({ theme: effectiveTheme() === "dark" ? "light" : "dark" });
  applyTheme();
}

function setupNav() {
  document.querySelectorAll(".nav-btn").forEach((btn) => {
    btn.addEventListener("click", () => showView(btn.dataset.view));
  });
}

function showView(name) {
  document.querySelectorAll(".view").forEach((v) => v.classList.toggle("active", v.id === "view-" + name));
  document.querySelectorAll(".nav-btn").forEach((b) => b.classList.toggle("active", b.dataset.view === name));
  const host = document.querySelector("#view-" + name + " .view-body");
  if (!host) return;
  if (name === "home") renderHome(host);
  else if (name === "gramatica") Grammar.render(host);
  else if (name === "vocabulario") Vocab.render(host);
  else if (name === "produccion") Produccion.render(host);
  else if (name === "ajustes") renderAjustes(host);
  window.scrollTo(0, 0);
}

function renderHome(host) {
  clear(host);
  const s = Store.settings();
  const v = Vocab.stats();

  host.appendChild(h("h2", { class: "greet" }, s.name ? "¡Hola, " + s.name + "! 👋" : "¡Hola! 👋"));
  host.appendChild(h("p", { class: "muted" }, "Practicá un rato. Elegí por dónde arrancar."));

  if (!s.name) {
    const input = h("input", { class: "text-input", type: "text", placeholder: "¿Cómo te llamás?" });
    const save = h(
      "button",
      {
        class: "btn primary",
        onClick: () => {
          if (input.value.trim()) {
            Store.updateSettings({ name: input.value.trim() });
            showView("home");
          }
        },
      },
      "Guardar"
    );
    input.addEventListener("keydown", (e) => { if (e.key === "Enter") save.click(); });
    host.appendChild(h("div", { class: "inline namebox" }, [input, save]));
  }

  host.appendChild(
    h("div", { class: "home-grid" }, [
      homeCard("🗂️", "Vocabulario", v.due > 0 ? v.due + " para repasar" : "Al día", () => showView("vocabulario")),
      homeCard("📐", "Gramática", GRAMMAR.length + " temas", () => showView("gramatica")),
      homeCard("✍️", "Producción", PRODUCCION.length + " consignas", () => showView("produccion")),
    ])
  );
}

function homeCard(emoji, title, sub, onClick) {
  return h("button", { class: "home-card", onClick }, [
    h("div", { class: "hc-emoji" }, emoji),
    h("div", { class: "hc-title" }, title),
    h("div", { class: "hc-sub muted small" }, sub),
  ]);
}

function renderAjustes(host) {
  clear(host);
  const s = Store.settings();
  host.appendChild(h("h2", {}, "Ajustes"));

  const nameInput = h("input", { class: "text-input", type: "text", value: s.name || "", placeholder: "Tu nombre" });
  host.appendChild(field("Nombre", nameInput));

  const appInput = h("input", { class: "text-input", type: "text", value: s.appName || "", placeholder: "Nombre de la app" });
  host.appendChild(field("Nombre de la app", appInput));

  host.appendChild(
    h(
      "button",
      {
        class: "btn primary wide",
        onClick: () => {
          Store.updateSettings({ name: nameInput.value.trim(), appName: appInput.value.trim() || "Che, aprendé" });
          renderHeader();
          toast("Guardado ✓");
        },
      },
      "Guardar"
    )
  );

  host.appendChild(h("hr", {}));
  host.appendChild(h("p", { class: "muted small" }, "Borrar todo el progreso (repasos y ajustes). No se puede deshacer."));
  host.appendChild(
    h(
      "button",
      {
        class: "btn danger wide",
        onClick: () => {
          if (confirm("¿Seguro que querés borrar todo el progreso?")) {
            Store.reset();
            renderHeader();
            showView("home");
          }
        },
      },
      "Reiniciar progreso"
    )
  );
}

function field(label, input) {
  return h("label", { class: "field" }, [h("span", { class: "field-label" }, label), input]);
}

function toast(msg) {
  const t = h("div", { class: "toast" }, msg);
  document.body.appendChild(t);
  requestAnimationFrame(() => t.classList.add("show"));
  setTimeout(() => {
    t.classList.remove("show");
    setTimeout(() => t.remove(), 300);
  }, 1500);
}
