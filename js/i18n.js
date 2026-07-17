/* Traducción de la interfaz (navegación, botones, mensajes).
   El contenido de aprendizaje (palabras, ejemplos, explicaciones de gramática)
   NUNCA se traduce acá: siempre queda en español, a propósito. */
const I18N = {
  es: {
    nav_home: "Inicio",
    nav_grammar: "Gramática",
    nav_vocab: "Vocab",
    nav_production: "Producción",
    nav_settings: "Ajustes",

    home_greet_hi: "¡Hola!",
    home_greet_hi_name: (name) => `¡Hola, ${name}! 👋`,
    home_subtitle: "Practicá un rato. Elegí por dónde arrancar.",
    home_name_placeholder: "¿Cómo te llamás?",
    home_save: "Guardar",
    home_vocab_title: "Vocabulario",
    home_vocab_due: (n) => `${n} para repasar`,
    home_vocab_uptodate: "Al día",
    home_grammar_title: "Gramática",
    home_grammar_topics: (n) => `${n} temas`,
    home_production_title: "Producción",
    home_production_prompts: (n) => `${n} consignas`,
    home_streak: (n) => (n === 1 ? "1 día seguido" : `${n} días seguidos`),

    settings_title: "Ajustes",
    settings_name_label: "Nombre",
    settings_name_placeholder: "Tu nombre",
    settings_save: "Guardar",
    settings_saved_toast: "Guardado ✓",
    settings_reset_desc: "Borrar todo el progreso (repasos y ajustes). No se puede deshacer.",
    settings_reset_btn: "Reiniciar progreso",
    settings_reset_confirm: "¿Seguro que querés borrar todo el progreso?",

    vocab_remaining: (n) => `Quedan ${n}`,
    vocab_uptodate_title: "¡Al día!",
    vocab_uptodate_desc: "No tenés tarjetas para repasar ahora. Volvé más tarde.",
    vocab_empty_desc: "No hay tarjetas cargadas todavía.",
    vocab_practice_all: "Practicar todas igual",
    vocab_show: "Mostrar",
    vocab_again: "Otra vez",
    vocab_hard: "Difícil",
    vocab_good: "Bien",
    vocab_easy: "Fácil",

    srs_new: "nuevo",
    srs_due: "para repasar",
    srs_in_1_day: "en 1 día",
    srs_in_days: (n) => `en ${n} días`,

    grammar_pick_topic: "Elegí un tema para practicar.",
    grammar_exercise_count: (n) => `${n} ejercicios`,
    grammar_done_suffix: " · ✓ hecho",
    grammar_start: "Empezar ejercicios",
    grammar_finished: (correct, total) => `Terminaste: ${correct} / ${total}`,
    grammar_again: "De nuevo",
    grammar_back_to_topics: "Volver a temas",
    grammar_next: "Siguiente",
    grammar_answer_placeholder: "Escribí la respuesta",
    grammar_check: "Corregir",

    production_label: "Producción",
    production_answer_placeholder: "Tu respuesta",
    production_check: "Corregir",
    production_reveal: "Ver respuesta",
    production_next: "Siguiente",
    production_finished: (correct, total) => `Terminaste: ${correct} / ${total}`,
    production_again: "De nuevo",

    back: "← Volver",
    feedback_correct: "✓ ¡Correcto!",
    feedback_wrong: (answer) => `✗ Casi… la respuesta es: ${answer}`,
    feedback_correct_spelling: (answer) => `Escritura correcta: ${answer}`,
  },
  hu: {
    nav_home: "Kezdőlap",
    nav_grammar: "Nyelvtan",
    nav_vocab: "Szókincs",
    nav_production: "Gyakorlás",
    nav_settings: "Beállítások",

    home_greet_hi: "Szia!",
    home_greet_hi_name: (name) => `Szia, ${name}! 👋`,
    home_subtitle: "Gyakorolj egy kicsit. Válaszd ki, hol kezdjük.",
    home_name_placeholder: "Mi a neved?",
    home_save: "Mentés",
    home_vocab_title: "Szókincs",
    home_vocab_due: (n) => `${n} ismétlésre vár`,
    home_vocab_uptodate: "Naprakész",
    home_grammar_title: "Nyelvtan",
    home_grammar_topics: (n) => `${n} téma`,
    home_production_title: "Gyakorlás",
    home_production_prompts: (n) => `${n} feladat`,
    home_streak: (n) => `${n} napos sorozat`,

    settings_title: "Beállítások",
    settings_name_label: "Név",
    settings_name_placeholder: "Neved",
    settings_save: "Mentés",
    settings_saved_toast: "Elmentve ✓",
    settings_reset_desc: "Az összes haladás törlése (ismétlések és beállítások). Nem vonható vissza.",
    settings_reset_btn: "Haladás visszaállítása",
    settings_reset_confirm: "Biztosan törlöd az összes haladást?",

    vocab_remaining: (n) => `Hátra van: ${n}`,
    vocab_uptodate_title: "Naprakész!",
    vocab_uptodate_desc: "Nincs most ismétlendő kártyád. Nézz vissza később.",
    vocab_empty_desc: "Még nincsenek feltöltött kártyák.",
    vocab_practice_all: "Gyakoroljuk mindet mégis",
    vocab_show: "Mutasd",
    vocab_again: "Újra",
    vocab_hard: "Nehéz",
    vocab_good: "Jó",
    vocab_easy: "Könnyű",

    srs_new: "új",
    srs_due: "ismétlésre vár",
    srs_in_1_day: "1 nap múlva",
    srs_in_days: (n) => `${n} nap múlva`,

    grammar_pick_topic: "Válassz egy témát a gyakorláshoz.",
    grammar_exercise_count: (n) => `${n} feladat`,
    grammar_done_suffix: " · ✓ kész",
    grammar_start: "Feladatok indítása",
    grammar_finished: (correct, total) => `Befejezted: ${correct} / ${total}`,
    grammar_again: "Újra",
    grammar_back_to_topics: "Vissza a témákhoz",
    grammar_next: "Következő",
    grammar_answer_placeholder: "Írd ide a választ",
    grammar_check: "Ellenőrzés",

    production_label: "Gyakorlás",
    production_answer_placeholder: "A te válaszod",
    production_check: "Ellenőrzés",
    production_reveal: "Válasz megmutatása",
    production_next: "Következő",
    production_finished: (correct, total) => `Befejezted: ${correct} / ${total}`,
    production_again: "Újra",

    back: "← Vissza",
    feedback_correct: "✓ Helyes!",
    feedback_wrong: (answer) => `✗ Majdnem… a helyes válasz: ${answer}`,
    feedback_correct_spelling: (answer) => `Helyes írásmód: ${answer}`,
  },
};

const I18n = (function () {
  function lang() {
    return Store.settings().uiLang === "hu" ? "hu" : "es";
  }
  function t(key, ...args) {
    const val = I18N[lang()][key];
    if (typeof val === "function") return val(...args);
    return val != null ? val : key;
  }
  function toggle() {
    Store.updateSettings({ uiLang: lang() === "hu" ? "es" : "hu" });
  }
  return { lang, t, toggle };
})();
