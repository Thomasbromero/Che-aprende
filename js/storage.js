/* Persistencia simple en localStorage. Todo el progreso vive en el dispositivo. */
const Store = (function () {
  const KEY = "idiomas:v1";

  function defaults() {
    return {
      settings: { name: "", appName: "Che, aprendé", theme: null, uiLang: null }, // theme: null = seguir al sistema. uiLang: null = español, o "hu"
      srs: {},         // { [cardId]: { ease, interval, reps, due, last } }
      grammar: {},     // { [topicId]: { done: true } }
    };
  }

  let state = load();

  function load() {
    try {
      const raw = JSON.parse(localStorage.getItem(KEY));
      if (!raw || typeof raw !== "object") return defaults();
      const d = defaults();
      return {
        settings: Object.assign(d.settings, raw.settings || {}),
        srs: raw.srs || {},
        grammar: raw.grammar || {},
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
    reset() { state = defaults(); save(); },
  };
})();
