/* App: onboarding, navegación, inicio y ajustes. */
document.addEventListener("DOMContentLoaded", init);

let currentView = "home";

const LANGS = [
  { code: "es", flag: "🇦🇷", name: "Español", ready: true },
  { code: "en", flag: "🇬🇧", name: "Inglés", ready: false },
  { code: "hu", flag: "🇭🇺", name: "Húngaro", ready: false },
  { code: "de", flag: "🇩🇪", name: "Alemán", ready: true },
];

// Para cada idioma que se está aprendiendo, qué módulos ya tienen contenido cargado.
// Home y Ajustes siempre están disponibles sin importar el idioma.
const READY_MODULES = {
  es: ["gramatica", "vocabulario", "produccion", "lectura", "aventura"],
  de: ["gramatica"],
};

function langName(code) {
  const l = LANGS.find((x) => x.code === code);
  return l ? l.flag + " " + l.name : code;
}

function init() {
  // Estas solo se enganchan una vez (listeners de botones); no van dentro de enterApp
  // porque enterApp se puede volver a llamar (ej: despues de reiniciar progreso).
  setupLang();
  applyStaticI18n();
  renderHeader();
  setupNav();
  enterApp();
}

function enterApp() {
  if (!Store.settings().learningLang) {
    renderOnboarding();
    return;
  }
  document.body.classList.remove("onboarding-active");
  updateHeaderStreak();
  showView("home");
}

let onboardingStep = "name"; // "name" | "lang"

function renderOnboarding() {
  document.body.classList.add("onboarding-active");
  onboardingStep = "name";
  drawOnboarding();
}

function drawOnboarding() {
  const host = document.getElementById("onboarding-screen");
  clear(host);
  host.appendChild(onboardingStep === "lang" ? onboardingLangCard() : onboardingNameCard());
}

function onboardingNameCard() {
  const input = h("input", { class: "onboarding-input", type: "text", placeholder: I18n.t("onboarding_name_placeholder") });
  const cont = h(
    "button",
    {
      class: "onboarding-continue-btn",
      onClick: () => {
        Store.updateSettings({ name: input.value.trim() });
        onboardingStep = "lang";
        drawOnboarding();
      },
    },
    I18n.t("onboarding_continue")
  );
  input.addEventListener("keydown", (e) => { if (e.key === "Enter") cont.click(); });
  return h("div", { class: "onboarding-card" }, [
    h("img", { class: "onboarding-sol", src: "assets/sol.png", alt: "" }),
    h("div", { class: "onboarding-title" }, "Che, aprendé"),
    h("p", { class: "onboarding-subtitle" }, I18n.t("onboarding_name_question")),
    input,
    cont,
  ]);
}

function onboardingLangCard() {
  return h("div", { class: "onboarding-card" }, [
    h("img", { class: "onboarding-sol", src: "assets/sol.png", alt: "" }),
    h("div", { class: "onboarding-title" }, "Che, aprendé"),
    h("p", { class: "onboarding-subtitle" }, I18n.t("onboarding_question")),
    h(
      "div",
      { class: "onboarding-options" },
      LANGS.map((l) =>
        h(
          "button",
          {
            class: "onboarding-option",
            type: "button",
            disabled: l.ready ? null : true,
            onClick: l.ready ? () => chooseLearningLang(l.code) : null,
          },
          l.name
        )
      )
    ),
  ]);
}

function chooseLearningLang(code) {
  Store.updateSettings({ learningLang: code });
  enterApp();
}

function renderUnderConstruction(host) {
  clear(host);
  const lang = Store.settings().learningLang;
  host.appendChild(
    h("div", { class: "panel center" }, [
      h("div", { class: "big-emoji" }, "🚧"),
      h("h2", {}, langName(lang)),
      h("p", { class: "muted" }, I18n.t("under_construction_desc")),
      h("p", { class: "muted small" }, I18n.t("under_construction_hint")),
    ])
  );
}

// Lectura está desactivada por ahora: el módulo (js/lectura.js y los datos de provincias)
// queda intacto; para reactivarla, sacar el desvío de "lectura" en showView y renderHome.
function renderComingSoon(host) {
  clear(host);
  host.appendChild(
    h("div", { class: "panel center" }, [
      h("div", { class: "big-emoji" }, "📖"),
      h("h2", {}, I18n.t("coming_soon_title")),
      h("p", { class: "muted" }, I18n.t("coming_soon_lectura_desc")),
    ])
  );
}

function renderHeader() {
  const title = document.getElementById("app-title");
  if (title) title.textContent = "Che, aprendé";
  document.title = "Che, aprendé";
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
  btn.textContent = l === "hu" ? "HU" : "AR";
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
  document.body.dataset.view = name;
  document.querySelectorAll(".view").forEach((v) => v.classList.toggle("active", v.id === "view-" + name));
  // Las demás pantallas cuelgan de Inicio: el botón activo es Inicio, salvo en Ajustes
  const botonActivo = name === "ajustes" ? "ajustes" : "home";
  document.querySelectorAll(".nav-btn").forEach((b) => b.classList.toggle("active", b.dataset.view === botonActivo));
  const host = document.querySelector("#view-" + name + " .view-body");
  if (!host) return;

  const lang = Store.settings().learningLang;
  const ready = name === "home" || name === "ajustes" || (READY_MODULES[lang] || []).includes(name);
  if (name === "lectura") {
    renderComingSoon(host);
  } else if (!ready) {
    renderUnderConstruction(host);
  } else if (name === "home") renderHome(host);
  else if (name === "gramatica") Grammar.render(host);
  else if (name === "vocabulario") Vocab.render(host);
  else if (name === "produccion") Produccion.render(host);
  else if (name === "aventura") Aventura.render(host);
  else if (name === "ajustes") renderAjustes(host);

  updateHeaderStreak();
  window.scrollTo(0, 0);
}

// Modo de práctica de Inicio. Hasta que se elija uno, es Clásico (lo de siempre); y si el idioma que se está
// aprendiendo todavía no tiene Aventura, es Clásico aunque se haya elegido el otro.
const MODO_POR_DEFECTO = "clasico";

function aventuraDisponible() {
  return (READY_MODULES[Store.settings().learningLang] || []).includes("aventura");
}

function modoActual() {
  const m = Store.settings().modo || MODO_POR_DEFECTO;
  return m === "aventura" && aventuraDisponible() ? "aventura" : "clasico";
}

// Dos botones: Clásico | Aventura. Solo se muestra si hay algo para elegir.
function selectorDeModo(host) {
  const actual = modoActual();
  const boton = (modo, clave) =>
    h(
      "button",
      {
        class: "modo-btn" + (actual === modo ? " activo" : ""),
        type: "button",
        "aria-pressed": String(actual === modo),
        onClick: () => { if (actual !== modo) { Store.updateSettings({ modo }); renderHome(host); } },
      },
      I18n.t(clave)
    );
  return h("div", { class: "modo-selector", role: "group", "aria-label": I18n.t("home_modo_aria") }, [
    boton("clasico", "home_modo_clasico"),
    boton("aventura", "home_modo_aventura"),
  ]);
}

// La tarjeta grande del modo Aventura: en qué nivel estás, cuánto llevás y un botón para seguir el camino
function tarjetaAventura() {
  const r = Aventura.resumen();
  const completo = !r.actual && !r.enCurso;
  const pct = r.total ? Math.round((r.hechos / r.total) * 100) : 0;
  const titulo = r.enCurso ? r.enCurso.nivel.titulo : completo ? I18n.t("home_aventura_completo") : r.actual.titulo;
  const sub = r.enCurso
    ? I18n.t("home_aventura_en_curso", r.enCurso.hechos, r.enCurso.total)
    : completo
    ? I18n.t("home_aventura_estrellas", r.estrellas, r.maxEstrellas)
    : I18n.t("home_aventura_nivel", r.indiceActual + 1, r.total) + " · " + r.estrellas + " ★";
  const cta = r.enCurso ? "home_aventura_cta_continuar" : r.hechos === 0 ? "home_aventura_cta_inicio" : completo ? "home_aventura_cta_ver" : "home_aventura_cta";
  return h("button", { class: "home-card home-card-navy home-card-featured", onClick: () => showView("aventura") }, [
    h("span", { class: "home-badge" }, I18n.t("home_aventura_badge")),
    h("div", { class: "hc-title" }, titulo),
    h("div", { class: "hc-sub" }, sub),
    h("div", { class: "home-progress" }, [h("div", { class: "home-progress-fill", style: "width:" + pct + "%" })]),
    h("span", { class: "home-cta" }, [I18n.t(cta), h("span", { class: "home-cta-arrow" }, "→")]),
  ]);
}

function renderHome(host) {
  clear(host);
  const s = Store.settings();
  const v = Vocab.stats();
  const p = Produccion.stats();
  const pPct = p.total ? Math.round((p.completed / p.total) * 100) : 0;
  const grammarTopics = s.learningLang === "de" ? GRAMMAR_DE : GRAMMAR;

  // El saludo y, al lado, el selector de modo: en la misma fila para que Inicio no sume altura
  host.appendChild(
    h("div", { class: "home-head" }, [
      h("h2", { class: "greet" }, s.name ? I18n.t("home_greet_hi_name", s.name) : I18n.t("home_greet_hi")),
      aventuraDisponible() ? selectorDeModo(host) : null,
    ])
  );
  host.appendChild(h("p", { class: "muted home-subtitle" }, I18n.t("home_subtitle")));

  // La racha es la misma en los dos modos
  const streak = Streak.status();
  host.appendChild(
    h("div", { class: "streak-row" }, [
      h("span", { class: "streak-flame " + (streak.doneToday ? "active" : "inactive") }, "🔥"),
      h("span", { class: "streak-text" }, I18n.t("home_streak", streak.count)),
    ])
  );

  if (modoActual() === "aventura") {
    host.appendChild(h("div", { class: "home-grid" }, [tarjetaAventura()]));
    return;
  }

  host.appendChild(
    h("div", { class: "home-grid" }, [
      h("button", { class: "home-card home-card-navy home-card-featured", onClick: () => showView("vocabulario") }, [
        h("span", { class: "home-badge" }, I18n.t("home_continue_badge")),
        h("div", { class: "hc-title" }, I18n.t("home_vocab_title")),
        h("div", { class: "hc-sub" }, v.pending > 0 ? I18n.t("home_vocab_pending", v.pending) : I18n.t("home_vocab_uptodate")),
        h("span", { class: "home-cta" }, [I18n.t("home_go_lesson"), h("span", { class: "home-cta-arrow" }, "→")]),
      ]),
      h("button", { class: "home-card home-card-cyan home-card-featured", onClick: () => showView("produccion") }, [
        h("div", { class: "hc-title hc-title-navy" }, I18n.t("home_production_title")),
        h("div", { class: "hc-sub hc-sub-white" }, I18n.t("home_production_completed", p.completed)),
        h("div", { class: "home-progress" }, [h("div", { class: "home-progress-fill", style: "width:" + pPct + "%" })]),
        h("span", { class: "home-cta home-cta-navy" }, [I18n.t("home_go_produccion"), h("span", { class: "home-cta-arrow" }, "→")]),
      ]),
      h("div", { class: "home-row" }, [
        h("button", { class: "home-card home-card-navy home-card-small", onClick: () => showView("lectura") }, [
          h("div", { class: "hc-title" }, I18n.t("home_lectura_title")),
          h("div", { class: "hc-sub" }, I18n.t("coming_soon_title")),
        ]),
        h("button", { class: "home-card home-card-pink home-card-small", onClick: () => showView("gramatica") }, [
          h("div", { class: "hc-title hc-title-navy" }, I18n.t("home_grammar_title")),
          h("div", { class: "hc-sub hc-sub-white" }, I18n.t("home_grammar_topics", grammarTopics.length)),
        ]),
      ]),
    ])
  );
}

function renderAjustes(host) {
  clear(host);
  const s = Store.settings();
  host.appendChild(h("h2", {}, I18n.t("settings_title")));
  host.appendChild(h("p", { class: "muted small" }, I18n.t("settings_learning_lang_label", langName(s.learningLang))));

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
            enterApp();
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
