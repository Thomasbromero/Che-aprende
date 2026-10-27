/* Dificultad de un ejercicio, de 1 a 100. Con este número el modo Aventura ordena los ejercicios
   de más fácil a más difícil para armar el camino.

   puntaje = 60% lo que se enseña (nivel del contenido) + 40% lo que hay que hacer (esfuerzo del formato)

   - Nivel del contenido (0-100):
       palabra del vocabulario -> campo `nivel` de cada palabra en data/vocab.data.js
       forma verbal            -> Conjugador.nivel(verbo, tiempo, persona)
       ejercicio escrito a mano (Gramática / Producción) -> campo `nivel` del ejercicio
   - Esfuerzo del formato (0-100): Formats.esfuerzo(ex). Reconocer entre opciones cuesta poco,
     escribir de memoria mucho. Para los ejercicios a mano: Gramática de opciones 22 a 32
     (según cuántas opciones haya), Gramática o Producción escribiendo 62.

   Los ejercicios a mano se anotan con format "gramatica" o "produccion" para poder puntuarlos igual.
   La rúbrica completa, con el motivo de cada número, está en dev/dificultad-informe.md. */
// Un Dificultad por idioma: crearDificultad(() => ({ formats, conjugador, vocab, verbos })) con las piezas de ese idioma.
function crearDificultad(piezas) {
  const PESO_CONTENIDO = 0.6;
  const PESO_FORMATO = 0.4;

  function nivelDelContenido(ex) {
    if (ex.format === "gramatica" || ex.format === "produccion") return ex.nivel;
    const P = piezas();
    if (P.formats.fuenteDeFormato(ex.format) === "verbo") return P.conjugador.nivel(P.verbos.find((v) => v.id === ex.source), ex.tiempo, ex.persona);
    return P.vocab.find((c) => c.id === ex.source).nivel;
  }

  function esfuerzoDelFormato(ex) {
    if (ex.format === "gramatica") return ex.type === "choice" ? 22 + 5 * Math.min(2, ex.options.length - 2) : 62;
    if (ex.format === "produccion") return 62;
    return piezas().formats.esfuerzo(ex);
  }

  function puntaje(ex) {
    const n = Math.round(PESO_CONTENIDO * nivelDelContenido(ex) + PESO_FORMATO * esfuerzoDelFormato(ex));
    return Math.max(1, Math.min(100, n));
  }

  return { puntaje, nivelDelContenido, esfuerzoDelFormato };
}

// Español
const Dificultad = crearDificultad(() => ({ formats: Formats, conjugador: Conjugador, vocab: VOCAB, verbos: VERBOS }));
