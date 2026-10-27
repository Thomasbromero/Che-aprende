/* Conjugador del alemán (nivel A1). Arma las formas de un verbo de data/de/verbos.de.data.js: lo que el verbo declara
   (presente, perfecto, pretérito) y, para lo que falta, la regla de los verbos regulares.
   Personas, siempre en este orden: ich, du, er/sie/es, wir, ihr, sie/Sie.
   Tiempos: Präsens (siempre), Perfekt (si el verbo tiene `perf`) y Präteritum (solo si tiene `pret`: sein, haben, modales).
   Un verbo se escribe así:
     { id: "v-machen", inf: "machen", es: "hacer", pres: [6 formas], perf: { aux: "haben", part: "gemacht" }, pret: [6 formas] }
   (pres y pret son opcionales: si faltan se usa la regla regular; perf, si falta, ese verbo no se conjuga en Perfekt). */
const ConjugadorDE = (function () {
  const PERSONAS = [
    { id: "ich", etiqueta: "ich" },
    { id: "du", etiqueta: "du" },
    { id: "er", etiqueta: "er / sie / es" },
    { id: "wir", etiqueta: "wir" },
    { id: "ihr", etiqueta: "ihr" },
    { id: "sie", etiqueta: "sie / Sie" },
  ];
  const TIEMPOS = [
    { id: "presente", etiqueta: "Präsens", campo: "pres" },
    { id: "perfecto", etiqueta: "Perfekt", campo: "perf" },
    { id: "preterito", etiqueta: "Präteritum", campo: "pret" },
  ];
  const AUX = {
    haben: ["habe", "hast", "hat", "haben", "habt", "haben"],
    sein: ["bin", "bist", "ist", "sind", "seid", "sind"],
  };

  function indice(personaId) { return PERSONAS.findIndex((p) => p.id === personaId); }
  function tiempoDe(id) { return TIEMPOS.find((t) => t.id === id); }
  // Los tiempos que tiene este verbo (el presente lo tienen todos)
  function tiemposDe(v) {
    return TIEMPOS.filter((t) => t.id === "presente" || (t.id === "perfecto" && v.perf) || (t.id === "preterito" && v.pret));
  }

  // ---------- Regla de los verbos regulares ----------
  function raizDe(v) { return v.inf.endsWith("en") ? v.inf.slice(0, -2) : v.inf.slice(0, -1); }
  // Raíces que piden una "e" antes de -st / -t: arbeiten -> du arbeitest, finden -> er findet, öffnen -> du öffnest
  function piden_e(raiz) { return /(d|t|chn|ffn|gn|tm|dn)$/.test(raiz); }

  function porRegla(v, tiempoId, personaId) {
    const i = indice(personaId);
    const raiz = raizDe(v), e = piden_e(raiz);
    if (tiempoId === "presente") {
      const du = /(s|ß|x|z)$/.test(raiz) ? raiz + "t" : raiz + (e ? "est" : "st"); // heißen -> du heißt
      const er = raiz + (e ? "et" : "t");
      return [[raiz + "e", du, er, v.inf, er, v.inf][i]];
    }
    if (tiempoId === "perfecto") {
      const aux = (v.perf && v.perf.aux) || "haben";
      return [AUX[aux][i] + " ge" + raiz + (e ? "et" : "t")];
    }
    const te = raiz + (e ? "ete" : "te"); // pretérito de los verbos regulares: machte, arbeitete
    return [[te, te + "st", te, te + "n", te + "t", te + "n"][i]];
  }

  // Formas aceptadas para (verbo, tiempo, persona). La primera es la que se muestra como correcta.
  function formas(v, tiempoId, personaId) {
    const i = indice(personaId);
    if (tiempoId === "perfecto" && v.perf) return [AUX[v.perf.aux || "haben"][i] + " " + v.perf.part];
    const T = tiempoDe(tiempoId);
    const propia = tiempoId !== "perfecto" && v[T.campo];
    if (propia) return [].concat(propia[i]);
    return porRegla(v, tiempoId, personaId);
  }

  // ¿Esta forma se aparta de la regla? (el verbo puede ser irregular en una persona y regular en otra)
  function esIrregular(v, tiempoId, personaId) {
    return formas(v, tiempoId, personaId)[0] !== porRegla(v, tiempoId, personaId)[0];
  }

  // ---------- Dificultad de una forma (0-100) ----------
  // Igual que en español: pesa el tiempo, un poco la persona y que la forma se aparte de la regla.
  // Los verbos separables ("ich stehe auf") suman un poco; sein y haben se conocen aunque sean irregulares.
  const NIVEL_TIEMPO = { presente: 12, perfecto: 42, preterito: 50 };
  const NIVEL_PERSONA = { ich: 0, du: 4, er: 0, wir: 3, ihr: 5, sie: 3 };
  const MUY_USADOS = ["v-sein", "v-haben"];

  function prefijoComun(a, b) {
    let i = 0;
    while (i < a.length && i < b.length && a[i] === b[i]) i++;
    return i;
  }

  function nivel(v, tiempoId, personaId) {
    let n = NIVEL_TIEMPO[tiempoId] + NIVEL_PERSONA[personaId];
    const forma = formas(v, tiempoId, personaId)[0];
    if (esIrregular(v, tiempoId, personaId)) {
      n += 16;
      if (prefijoComun(norm(forma), norm(v.inf)) <= 1) n += 10;
    }
    if (tiempoId === "presente" && /\s/.test(forma)) n += 8; // separable: "stehe auf"
    if (MUY_USADOS.indexOf(v.id) >= 0) n -= 6;
    return Math.max(3, Math.min(95, Math.round(n)));
  }

  // Todas las formas (con su tiempo y persona) de un verbo
  function todas(v) {
    const out = [];
    tiemposDe(v).forEach((t) => PERSONAS.forEach((p) => out.push({ tiempo: t.id, persona: p.id, formas: formas(v, t.id, p.id) })));
    return out;
  }

  return { PERSONAS, TIEMPOS, formas, porRegla, todas, esIrregular, tiempoDe, tiemposDe, nivel, raizDe, AUX };
})();
