/* Persistencia simple en localStorage. Todo el progreso vive en el dispositivo. */
const Store = (function () {
  const KEY = "idiomas:v1";

  function defaults() {
    return {
      // uiLang: null = español, o "hu". streak: null = { count, lastActiveDate }
      // learningLang: null = todavia no eligio (muestra el onboarding), o "es" / "en" / "hu" / "de"
      // modo: el modo elegido en Inicio, "clasico" o "aventura" (null = todavia no eligio: Clasico)
      settings: { name: "", uiLang: null, streak: null, learningLang: null, modo: null },
      srs: {},         // { [cardId]: { ease, interval, reps, due, last } }
      grammar: {},     // { [topicId]: { done: true } }
      produccion: {},  // { [itemId]: { done: true } }
      // Vocabulario: pestaña elegida y, por pestaña, la cola de ids que quedan (la primera es la tarjeta actual)
      vocabSession: { filter: null, queues: {} }, // filter: "all" | "done" | "pending"
      // Modo Aventura (progreso propio, aparte del modo Clásico; la racha sí es la misma).
      // nodos: { [idDeNivel]: { hecho, estrellas, mejor (0 a 1), intentos } }
      // enCurso: la lección empezada y sin terminar { nivel, semilla, i, aciertos } o null
      aventura: { nodos: {}, enCurso: null },
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
        vocabSession: Object.assign(d.vocabSession, raw.vocabSession || {}),
        aventura: {
          nodos: (raw.aventura && raw.aventura.nodos) || {},
          enCurso: (raw.aventura && raw.aventura.enCurso) || null,
        },
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
    vocabSession() { return state.vocabSession; },
    saveVocabSession(filter, queueIds) {
      state.vocabSession.filter = filter;
      state.vocabSession.queues[filter] = queueIds;
      save();
    },
    aventura() { return state.aventura; },
    aventuraNodo(id) { return state.aventura.nodos[id]; },
    setAventuraNodo(id, datos) { state.aventura.nodos[id] = datos; save(); },
    setAventuraEnCurso(datos) { state.aventura.enCurso = datos; save(); },
    reset() { state = defaults(); save(); },
  };
})();
