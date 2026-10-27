/* El idioma que se está aprendiendo y todo lo que cambia con él en el modo Aventura.
   Cada idioma es un "pack": sus palabras, sus verbos, su conjugador, sus formatos de ejercicio, su dificultad,
   su gramática, su camino y su mapa. js/packs.js registra los packs (después de cargar todos los datos) y
   Idioma.actual() devuelve el del idioma elegido en Ajustes (learningLang), o el español si no hay otro.

   Un pack tiene: { codigo, nombre, formats, dificultad, conjugador, vocab(), verbos(), grammar(), produccion(),
   camino(), mapa() }. Las funciones se llaman cada vez (no se guardan los datos) para que el pack se pueda
   registrar aunque los datos de ese idioma todavía no se hayan cargado. */
const Idioma = (function () {
  const packs = {};
  let forzado = null; // las pruebas desde node eligen el idioma a mano

  function registrar(codigo, pack) { packs[codigo] = pack; }

  function codigo() {
    if (forzado) return forzado;
    const s = typeof Store !== "undefined" && Store.settings ? Store.settings() : null;
    return (s && s.learningLang) || "es";
  }

  function actual() { return packs[codigo()] || packs.es; }

  // ¿El idioma tiene camino de Aventura con niveles?
  function tieneAventura(cod) {
    const p = packs[cod || codigo()];
    return !!(p && p.camino() && p.camino().niveles && p.camino().niveles.length);
  }

  function forzar(cod) { forzado = cod || null; }

  return { registrar, actual, codigo, tieneAventura, forzar, packs };
})();
