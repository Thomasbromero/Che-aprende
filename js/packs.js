/* Registra los idiomas (ver js/idioma.js). Va después de todos los datos y de la lógica de cada idioma. */
const dato = (nombre, vacio) => (typeof window !== "undefined" && window[nombre] ? window[nombre] : vacio);

// Español (rioplatense): Clásico y Aventura
Idioma.registrar("es", {
  codigo: "es",
  nombre: "español",
  formats: Formats,
  dificultad: Dificultad,
  conjugador: Conjugador,
  vocab: () => VOCAB,
  verbos: () => VERBOS,
  grammar: () => GRAMMAR,
  produccion: () => PRODUCCION,
  camino: () => CAMINO,
  mapa: () => dato("MAPA", null),
});

// Alemán (A1): solo Aventura. Ayuda en español.
const DificultadDE = crearDificultad(() => ({ formats: FormatsDE, conjugador: ConjugadorDE, vocab: dato("VOCAB_DE", []), verbos: dato("VERBOS_DE", []) }));
Idioma.registrar("de", {
  codigo: "de",
  nombre: "alemán",
  formats: FormatsDE,
  dificultad: DificultadDE,
  conjugador: ConjugadorDE,
  vocab: () => dato("VOCAB_DE", []),
  verbos: () => dato("VERBOS_DE", []),
  grammar: () => dato("GRAMMAR_DE", []),
  produccion: () => [],
  camino: () => dato("CAMINO_DE", { niveles: [] }),
  mapa: () => dato("MAPA_DE", null),
});
