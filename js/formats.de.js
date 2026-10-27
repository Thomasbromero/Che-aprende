/* Formatos de ejercicio del alemán: la configuración de crearFormats (js/formats.js) para este idioma.
   Las palabras salen de data/de/vocab.de.data.js (campo `es` = traducción al español; `plural`; `ejemploEs`)
   y los verbos de data/de/verbos.de.data.js. Además de los formatos de siempre hay dos propios del alemán:
   - articulo: elegir der / die / das para un sustantivo
   - plural:   escribir el plural de un sustantivo
   Al escribir, las vocales con diéresis y la ß cuentan: «schön» no es «schon». Se acepta la forma de
   teclado (ae, oe, ue, ss) como alternativa, para quien no tiene las teclas. */
const FormatsDE = crearFormats({
  idioma: "alemán",
  vocab: () => VOCAB_DE,
  verbos: () => (typeof VERBOS_DE !== "undefined" ? VERBOS_DE : []),
  conjugador: ConjugadorDE,
  glosa: (c) => c.es,
  grupos: { saludos: "saludos", familia: "gente", comida: "mundo", casa_ciudad: "mundo", tiempo_numeros: "tiempo" },
  sinonimos: {},
  artRe: /^(der|die|das)\s+/i,
  artBase: {},
  soloArticulo: /^(der|die|das)$/i,
  glosasSueltas: [],
  generoAO: false,
  estrictoSiempre: true,
  esVerbo: () => false,
  // Una palabra de menos de cuatro letras se busca solo igual (con «Ei» no se tapa «eine»)
  raiz: (v) => (norm(v).length < 4 ? "\u0001" : norm(v)),
  formaDeHueco: () => true,
  ejemplo: (c) => c.example + (c.ejemploEs ? " (" + c.ejemploEs + ")" : ""),
  pistaOrdenar: (c) => c.ejemploEs || c.term + " = " + c.es,
  explicacion(c) {
    let s = "«" + c.term + "» = " + c.es + ".";
    if (c.plural && c.plural !== c.term) s += " Plural: " + c.plural + ".";
    s += " " + c.example + (c.ejemploEs ? " (" + c.ejemploEs + ")" : "");
    if (c.note) s += " " + c.note;
    return s;
  },
  alternativas(accept) {
    const out = accept.slice();
    accept.forEach((a) => {
      const alt = a.replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue").replace(/Ä/g, "Ae").replace(/Ö/g, "Oe").replace(/Ü/g, "Ue").replace(/ß/g, "ss");
      if (alt !== a && out.indexOf(alt) < 0) out.push(alt);
    });
    return out;
  },

  formatosExtra({ glosa, articuloDe, nucleo, explicacion, conAlternativas }) {
    const ART = /^(der|die|das)\s+/i;
    function pluralDe(c) { return c.plural ? c.plural.replace(ART, "").trim() : ""; }
    return {
      // ¿Qué artículo lleva «Hund»?  ->  der / die / das
      articulo: {
        nombre: "Elegir el artículo",
        esfuerzo: 18,
        aplica: (c) => !!articuloDe(c),
        generar(c) {
          return {
            type: "choice",
            prompt: "¿Qué artículo lleva «" + nucleo(c) + "»?",
            hint: glosa(c),
            options: ["der", "die", "das"],
            answer: articuloDe(c),
            explain: explicacion(c),
          };
        },
      },
      // Escribí el plural de «der Apfel»  ->  Äpfel
      plural: {
        nombre: "Escribir el plural",
        esfuerzo: 66,
        aplica: (c) => !!articuloDe(c) && !!pluralDe(c) && pluralDe(c) !== nucleo(c),
        generar(c) {
          const p = pluralDe(c);
          return {
            type: "fill",
            prompt: "Plural de «" + c.term + "»: die ___",
            hint: glosa(c),
            accept: conAlternativas([p]),
            answer: p,
            explain: explicacion(c),
            estricto: true,
            flexionada: true,
          };
        },
      },
    };
  },

  verbosTxt(Conjugador, confundible) {
    function etiquetaTiempo(id) { return Conjugador.tiempoDe(id).etiqueta; }
    function etiquetaPersona(id) { return Conjugador.PERSONAS.find((x) => x.id === id).etiqueta; }
    return {
      consigna: (v, t, p) => "Conjugá «" + v.inf + "» — " + etiquetaTiempo(t) + ", " + etiquetaPersona(p) + ":",
      explicacion(v, t, p, formas, conf) {
        let s;
        if (t === "perfecto") {
          s = "Perfekt: «" + v.perf.aux + "» conjugado + Partizip II («" + v.perf.part + "») = " + formas[0] + ".";
        } else if (Conjugador.esIrregular(v, t, p)) {
          s = "«" + v.inf + "» es irregular en " + etiquetaTiempo(t) + ": " + formas[0] + ".";
        } else {
          s = etiquetaTiempo(t) + " regular: " + formas[0] + ".";
        }
        if (conf) s += " Ojo con la diéresis: «" + formas[0] + "» no es lo mismo que «" + conf.forma + "» (" + etiquetaTiempo(conf.tiempo) + ", " + etiquetaPersona(conf.persona) + ").";
        return s;
      },
    };
  },
});
