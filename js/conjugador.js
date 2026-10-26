/* Conjugador (español rioplatense, con voseo). Arma las formas de un verbo de data/verbos.data.js:
   las irregularidades que el verbo declara y, para todo lo demás, la regla regular.
   Personas: yo, vos, él/ella, nosotros, ustedes/ellos (no hay "tú" ni "vosotros"). */
const Conjugador = (function () {
  const PERSONAS = [
    { id: "yo", etiqueta: "yo" },
    { id: "vos", etiqueta: "vos" },
    { id: "el", etiqueta: "él / ella" },
    { id: "nosotros", etiqueta: "nosotros" },
    { id: "ustedes", etiqueta: "ustedes / ellos" },
  ];
  const TIEMPOS = [
    { id: "presente", etiqueta: "presente", campo: "pres" },
    { id: "preterito", etiqueta: "pretérito indefinido", campo: "pret" },
    { id: "imperfecto", etiqueta: "imperfecto", campo: "imp" },
    { id: "futuro", etiqueta: "futuro", campo: "fut" },
    { id: "condicional", etiqueta: "condicional", campo: "fut" },
    { id: "subjuntivo", etiqueta: "subjuntivo presente", campo: "subj" },
  ];

  // Terminaciones regulares, en el orden [yo, vos, él, nosotros, ustedes]
  const FIN = {
    presente: { ar: ["o", "ás", "a", "amos", "an"], er: ["o", "és", "e", "emos", "en"], ir: ["o", "ís", "e", "imos", "en"] },
    preterito: { ar: ["é", "aste", "ó", "amos", "aron"], er: ["í", "iste", "ió", "imos", "ieron"], ir: ["í", "iste", "ió", "imos", "ieron"] },
    imperfecto: { ar: ["aba", "abas", "aba", "ábamos", "aban"], er: ["ía", "ías", "ía", "íamos", "ían"], ir: ["ía", "ías", "ía", "íamos", "ían"] },
    futuro: ["é", "ás", "á", "emos", "án"],
    condicional: ["ía", "ías", "ía", "íamos", "ían"],
    subjuntivo: { ar: ["e", "es", "e", "emos", "en"], er: ["a", "as", "a", "amos", "an"], ir: ["a", "as", "a", "amos", "an"] },
  };
  // Segunda forma de "vos" en el subjuntivo (voseo): hablés, comás, vivás
  const VOS_SUBJ = { ar: "és", er: "ás", ir: "ás" };

  function grupo(v) { return v.inf.slice(-2); }
  function raizDe(v) { return v.inf.slice(0, -2); }
  function indice(personaId) { return PERSONAS.findIndex((p) => p.id === personaId); }
  function tiempoDe(id) { return TIEMPOS.find((t) => t.id === id); }

  // Formas que da la regla regular, sin mirar lo que el verbo declara como irregular.
  function porRegla(v, tiempoId, personaId) {
    const i = indice(personaId);
    const g = grupo(v);
    if (tiempoId === "futuro" || tiempoId === "condicional") return [v.inf + FIN[tiempoId][i]];
    const raiz = raizDe(v);
    const fin = FIN[tiempoId][g][i];
    if (tiempoId === "subjuntivo" && personaId === "vos") return [raiz + fin, raiz + VOS_SUBJ[g]];
    return [raiz + fin];
  }

  // Formas aceptadas para (verbo, tiempo, persona). La primera es la que se muestra como correcta.
  function formas(v, tiempoId, personaId) {
    const i = indice(personaId);
    const t = tiempoDe(tiempoId);
    if (tiempoId === "futuro" || tiempoId === "condicional") {
      return [(v.fut || v.inf) + FIN[tiempoId][i]];
    }
    const propia = v[t.campo];
    if (propia) return [].concat(propia[i]);
    return porRegla(v, tiempoId, personaId);
  }

  // ¿Esta forma se aparta de la regla? (el verbo puede ser irregular en un tiempo y regular en alguna persona)
  function esIrregular(v, tiempoId, personaId) {
    return formas(v, tiempoId, personaId)[0] !== porRegla(v, tiempoId, personaId)[0];
  }

  // ---------- Dificultad de una forma (0-100) ----------
  // Cuánto cuesta aprender esa forma, sin contar si se elige o se escribe (eso lo pone el formato).
  // Pesa el tiempo (el subjuntivo cuesta mucho más que el presente), un poco la persona, y que la
  // forma se aparte de la regla; más todavía si casi no se parece al infinitivo (fueron, tuve, dijeron).
  // Los verbos que más se usan (ser, estar, ir, tener, hacer) se conocen aunque sean irregulares.
  const NIVEL_TIEMPO = { presente: 12, imperfecto: 30, futuro: 28, condicional: 34, preterito: 44, subjuntivo: 66 };
  const NIVEL_PERSONA = { yo: 0, vos: 4, el: 0, nosotros: 3, ustedes: 3 };
  const MUY_USADOS = ["v-ser", "v-estar", "v-ir", "v-tener", "v-hacer"];

  function sinTildes(s) { return s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, ""); }
  function prefijoComun(a, b) {
    let i = 0;
    while (i < a.length && i < b.length && a[i] === b[i]) i++;
    return i;
  }

  function nivel(v, tiempoId, personaId) {
    let n = NIVEL_TIEMPO[tiempoId] + NIVEL_PERSONA[personaId];
    if (esIrregular(v, tiempoId, personaId)) {
      n += 16;
      if (prefijoComun(sinTildes(formas(v, tiempoId, personaId)[0]), sinTildes(v.inf)) <= 1) n += 10;
    }
    if (MUY_USADOS.indexOf(v.id) >= 0) n -= 6;
    return Math.max(3, Math.min(95, Math.round(n)));
  }

  // Todas las formas (con su tiempo y persona) de un verbo
  function todas(v) {
    const out = [];
    TIEMPOS.forEach((t) => PERSONAS.forEach((p) => out.push({ tiempo: t.id, persona: p.id, formas: formas(v, t.id, p.id) })));
    return out;
  }

  return { PERSONAS, TIEMPOS, formas, porRegla, todas, esIrregular, grupo, tiempoDe, nivel };
})();
