/* Persistencia simple en localStorage. Todo el progreso vive en el dispositivo. */
const Store = (function () {
  const KEY = "idiomas:v1";

  function defaults() {
    return {
      // uiLang: null = español, o "hu". streak: null = { count, lastActiveDate }
      // learningLang: null = todavia no eligio (muestra el onboarding), o "es" / "en" / "hu" / "de"
      settings: { name: "", uiLang: null, streak: null, learningLang: null },
      srs: {},         // { [cardId]: { ease, interval, reps, due, last } }
      grammar: {},     // { [topicId]: { done: true } }
      produccion: {},  // { [itemId]: { done: true } }
    };
  }

  let state = load();

  function load() {
    try {
      const raw = JSON.parse(localStorage.getItem(KEY));
      if (!raw || typeof raw !== "object") return defaults();
      const d = defaults();
      // Usuario que ya venia usando la app antes de que existiera este campo:
      // lo tratamos como si ya hubiera elegido español, para no mostrarle el onboarding.
      const isLegacyUser = !!raw.settings && !("learningLang" in raw.settings);
      if (isLegacyUser) d.settings.learningLang = "es";
      return {
        settings: Object.assign(d.settings, raw.settings || {}),
        srs: raw.srs || {},
        grammar: raw.grammar || {},
        produccion: raw.produccion || {},
      };
    } catch (e) {
      return defaults();
    }
  }

  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {}
  }

  return {
    state() { return state; },
    settings() { return state.settings; },
    updateSettings(patch) { Object.assign(state.settings, patch); save(); },
    srs(id) { return state.srs[id]; },
    setSrs(id, data) { state.srs[id] = data; save(); },
    allSrs() { return state.srs; },
    markGrammar(id) { state.grammar[id] = { done: true }; save(); },
    grammarDone(id) { return !!(state.grammar[id] && state.grammar[id].done); },
    markProduccion(id) { state.produccion[id] = { done: true }; save(); },
    produccionDone(id) { return !!(state.produccion[id] && state.produccion[id].done); },
    reset() { state = defaults(); save(); },
  };
})();
