/* App: navegación, inicio y ajustes. */
document.addEventListener("DOMContentLoaded", init);

let currentView = "home";

function init() {
  setupTheme();
  setupLang();
  applyStaticI18n();
  renderHeader();
  updateHeaderStreak();
  setupNav();
  showView("home");
}

function renderHeader() {
  const title = document.getElementById("app-title");
  if (title) title.textContent = "🧉 Che, aprendé";
  document.title = "Che, aprendé";
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

function setupLang() {
  updateLangButton();
  const btn = document.getElementById("lang-toggle");
  if (btn) {
    btn.addEventListener("click", () => {
      I18n.toggle();
      updateLangButton();
      applyStaticI18n();
      showView(currentView);
    });
  }
}

function updateLangButton() {
  const btn = document.getElementById("lang-toggle");
  if (!btn) return;
  const l = I18n.lang();
  btn.textContent = l === "hu" ? "🇭🇺" : "🇦🇷";
  btn.setAttribute("aria-label", l === "hu" ? "Váltás spanyolra" : "Cambiar a húngaro");
}

function updateHeaderStreak() {
  const el = document.getElementById("header-streak");
  if (!el) return;
  const st = Streak.status();
  clear(el);
  el.appendChild(h("span", { class: "streak-flame " + (st.doneToday ? "active" : "inactive") }, "🔥"));
  el.appendChild(h("span", { class: "streak-count" }, String(st.count)));
}

function applyStaticI18n() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = I18n.t(el.dataset.i18n);
  });
}

function setupNav() {
  document.querySelectorAll(".nav-btn").forEach((btn) => {
    btn.addEventListener("click", () => showView(btn.dataset.view));
  });
}

function showView(name) {
  currentView = name;
  document.querySelectorAll(".view").forEach((v) => v.classList.toggle("active", v.id === "view-" + name));
  document.querySelectorAll(".nav-btn").forEach((b) => b.classList.toggle("active", b.dataset.view === name));
  const host = document.querySelector("#view-" + name + " .view-body");
  if (!host) return;
  if (name === "home") renderHome(host);
  else if (name === "gramatica") Grammar.render(host);
  else if (name === "vocabulario") Vocab.render(host);
  else if (name === "produccion") Produccion.render(host);
  else if (name === "ajustes") renderAjustes(host);
  updateHeaderStreak();
  window.scrollTo(0, 0);
}

function renderHome(host) {
  clear(host);
  const s = Store.settings();
  const v = Vocab.stats();

  host.appendChild(h("h2", { class: "greet" }, s.name ? I18n.t("home_greet_hi_name", s.name) : I18n.t("home_greet_hi")));
  host.appendChild(h("p", { class: "muted" }, I18n.t("home_subtitle")));

  const streak = Streak.status();
  host.appendChild(
    h("div", { class: "streak-row" }, [
      h("span", { class: "streak-flame " + (streak.doneToday ? "active" : "inactive") }, "🔥"),
      h("span", { class: "streak-text" }, I18n.t("home_streak", streak.count)),
    ])
  );

  if (!s.name) {
    const input = h("input", { class: "text-input", type: "text", placeholder: I18n.t("home_name_placeholder") });
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
      I18n.t("home_save")
    );
    input.addEventListener("keydown", (e) => { if (e.key === "Enter") save.click(); });
    host.appendChild(h("div", { class: "inline namebox" }, [input, save]));
  }

  host.appendChild(
    h("div", { class: "home-grid" }, [
      homeCard("🗂️", I18n.t("home_vocab_title"), v.due > 0 ? I18n.t("home_vocab_due", v.due) : I18n.t("home_vocab_uptodate"), () => showView("vocabulario")),
      homeCard("📐", I18n.t("home_grammar_title"), I18n.t("home_grammar_topics", GRAMMAR.length), () => showView("gramatica")),
      homeCard("✍️", I18n.t("home_production_title"), I18n.t("home_production_prompts", PRODUCCION.length), () => showView("produccion")),
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
  host.appendChild(h("h2", {}, I18n.t("settings_title")));

  const nameInput = h("input", { class: "text-input", type: "text", value: s.name || "", placeholder: I18n.t("settings_name_placeholder") });
  host.appendChild(field(I18n.t("settings_name_label"), nameInput));

  host.appendChild(
    h(
      "button",
      {
        class: "btn primary wide",
        onClick: () => {
          Store.updateSettings({ name: nameInput.value.trim() });
          toast(I18n.t("settings_saved_toast"));
        },
      },
      I18n.t("settings_save")
    )
  );

  host.appendChild(h("hr", {}));
  host.appendChild(h("p", { class: "muted small" }, I18n.t("settings_reset_desc")));
  host.appendChild(
    h(
      "button",
      {
        class: "btn danger wide",
        onClick: () => {
          if (confirm(I18n.t("settings_reset_confirm"))) {
            Store.reset();
            renderHeader();
            showView("home");
          }
        },
      },
      I18n.t("settings_reset_btn")
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
