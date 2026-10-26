/* Formatos de ejercicio generados a partir del vocabulario (palabra + traducción + frase
   de ejemplo). Cada formato arma un ejercicio con el "molde" que entiende Exercise.mount
   (choice / fill / order / match), así no hay que escribir un ejercicio a mano por palabra.

   Cada palabra de VOCAB usa estos campos extra:
   - tema:  para elegir opciones incorrectas parecidas (cuerpo, ropa, hotel...).
   - hueco: (opcional) qué parte de la frase de ejemplo se tapa en "completar la frase".
            Si falta, se detecta sola; si vale false, esa palabra no tiene "completar".

   Los formatos de conjugar (conjugar_opciones / conjugar_escribir) salen de los verbos de
   data/verbos.data.js y se arman con js/conjugador.js; aceptan opts.tiempo y opts.persona.

   Los ejercicios generados llevan además { format, source } para saber de qué formato
   y de qué palabra o verbo salieron. Todo el azar sale de opts.rng (por defecto Math.random),
   para poder repetir el mismo ejercicio con una semilla. */
const Formats = (function () {
  // Cada tema pertenece a un grupo más grande: si un tema no alcanza para armar opciones,
  // se completa con palabras del mismo grupo y después con cualquiera.
  const GRUPOS = {
    cuerpo: "cuerpo", ropa: "cuerpo", accesorios: "cuerpo",
    comida: "hogar", cocina: "hogar", limpieza: "hogar", muebles: "hogar", casa: "hogar", tecnologia: "hogar",
    hotel: "ciudad", lugares: "ciudad", transporte: "ciudad", indicaciones: "ciudad",
    saludos: "jerga", personas: "jerga", elogios: "jerga", jerga_cosas: "jerga",
    jerga_verbos: "jerga", jerga_expresiones: "jerga", tiempo_libre: "jerga",
  };
  // Temas donde casi todas las palabras significan lo mismo ("excelente"): ahí las opciones
  // incorrectas no salen del mismo tema, para no armar preguntas con dos respuestas posibles.
  const SINONIMOS = { elogios: true };

  const ART_RE = /^(el|la|los|las|un|una|unos|unas)\s+/i;
  const ART_BASE = { un: "el", una: "la", unos: "los", unas: "las" };
  // Palabras que solo marcan el registro ("szlengben", "szállodai"...): no cuentan para decir
  // que dos traducciones se parecen.
  const HU_SUELTAS = ["bizalmasan", "szlengben", "hivatalos", "szállodai", "sértésként", "egyenesen"];

  // ---------- Azar ----------
  function rngDe(o) { return (o && o.rng) || Math.random; }
  function mezclar(arr, rng) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(rng() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // ---------- Qué es cada palabra ----------
  function grupoDe(c) { return GRUPOS[c.tema] || c.tema; }

  // "el" | "la" | "los" | "las" | null (verbos, expresiones, "el/la conserje"...)
  function articuloDe(c) {
    const m = c.term.match(ART_RE);
    if (!m) return null;
    const a = m[1].toLowerCase();
    return ART_BASE[a] || a;
  }

  function tipoDe(c) {
    if (articuloDe(c)) return "sust";
    if (/^(hacer|dar|estar|tener|ser|seguir)\s/.test(c.term) || /^[\p{L}]+(ar|er|ir)(\(se\))?$/u.test(c.term)) return "verbo";
    return "otro";
  }

  // Variantes de la palabra sin artículo ni adornos: "el pibe / la piba" -> [pibe, piba]
  function variantes(term) {
    const t = term.replace(/\(\+ adjetivo\)|\(de\)|\(se\)/g, "").replace(/[…¿?¡!]/g, "").trim();
    const out = [];
    t.split(/\s*\/\s*/).forEach((p) => {
      p = p.replace(ART_RE, "").trim();
      if (/^[aeo]$/.test(p) && out[0]) out.push(out[0].replace(/[aeo]$/, p)); // "boludo/a"
      else if (p) out.push(p);
    });
    return out;
  }

  function nucleo(c) { return variantes(c.term)[0] || c.term; }

  // ---------- "Se parecen en el significado" ----------
  function tokensHu(hu) {
    const palabras = hu.toLowerCase().match(/\p{L}{4,}/gu) || [];
    return palabras.filter((w) => HU_SUELTAS.indexOf(w) < 0).map((w) => w.slice(0, 4));
  }
  function parecidas(a, b) {
    const ta = tokensHu(a.hu);
    return tokensHu(b.hu).some((t) => ta.indexOf(t) >= 0);
  }

  // Elige n palabras para usar como opciones incorrectas de c.
  // Orden de preferencia: mismo tema, mismo grupo, cualquiera; y dentro de cada uno, del mismo tipo.
  // Nunca elige una que se parezca en el significado a c ni a otra ya elegida.
  function distractores(c, n, rng, filtro) {
    const elegidas = [];
    const sirve = (d) =>
      d.id !== c.id &&
      !parecidas(c, d) &&
      !elegidas.some((e) => e.id === d.id || parecidas(e, d)) &&
      (!filtro || filtro(d));
    const tipoC = tipoDe(c);
    const pools = [
      SINONIMOS[c.tema] ? [] : VOCAB.filter((d) => d.tema === c.tema),
      VOCAB.filter((d) => d.tema !== c.tema && grupoDe(d) === grupoDe(c)),
      VOCAB.filter((d) => grupoDe(d) !== grupoDe(c)),
    ];
    pools.forEach((pool) => {
      const barajado = mezclar(pool, rng);
      const ordenado = barajado.filter((d) => tipoDe(d) === tipoC).concat(barajado.filter((d) => tipoDe(d) !== tipoC));
      ordenado.forEach((d) => { if (elegidas.length < n && sirve(d)) elegidas.push(d); });
    });
    return elegidas;
  }

  // ---------- Hueco de "completar la frase" ----------
  function raiz(v) {
    const n = norm(v);
    if (/\s/.test(n)) return n;
    if (/(ar|er|ir)$/.test(n)) return n.slice(0, -2);
    if (n.length > 4 && /[aeiou]s?$/.test(n)) return n.replace(/[aeiou]s?$/, "");
    return n;
  }

  // Devuelve el texto exacto de la frase que se tapa, o null si no hay forma segura.
  function hueco(c) {
    if (c.hueco === false) return null;
    if (typeof c.hueco === "string") return c.hueco;
    const palabras = c.example.match(/[\p{L}\p{N}'-]+/gu) || [];
    const vars = variantes(c.term).filter((v) => !/\s/.test(v));
    for (const v of vars) {
      const exacta = palabras.find((w) => norm(w) === norm(v));
      if (exacta) return exacta;
    }
    for (const v of vars) {
      const r = raiz(v);
      const w = palabras.find((p) => {
        const np = norm(p);
        return np.startsWith(r) && np.length >= r.length && np.length <= norm(v).length + 4;
      });
      if (w) return w;
    }
    return null;
  }

  // Posición de `texto` en `frase` como palabra(s) completa(s) (no dentro de otra palabra).
  function posicion(frase, texto) {
    const letra = /\p{L}/u;
    let desde = 0;
    for (;;) {
      const i = frase.indexOf(texto, desde);
      if (i < 0) return -1;
      const antes = i > 0 ? frase[i - 1] : "";
      const despues = frase[i + texto.length] || "";
      if (!letra.test(antes) && !letra.test(despues)) return i;
      desde = i + 1;
    }
  }

  // { prompt: frase con ___, respuesta } o null
  function fraseConHueco(c) {
    const h = hueco(c);
    if (!h) return null;
    const i = posicion(c.example, h);
    if (i < 0) return null;
    return { prompt: c.example.slice(0, i) + "___" + c.example.slice(i + h.length), respuesta: h };
  }

  function explicacion(c) {
    return "«" + c.term + "» = " + c.hu + ". " + c.example;
  }

  // ---------- Los formatos ----------
  const DEFS = {
    // ¿Qué significa «la cuadra»?  ->  eligir la traducción
    significado: {
      nombre: "Significado",
      esfuerzo: 1,
      aplica: () => true,
      generar(c, o) {
        const rng = rngDe(o);
        const otras = distractores(c, 3, rng);
        return {
          type: "choice",
          prompt: "¿Qué significa «" + c.term + "»?",
          options: mezclar([c.hu].concat(otras.map((d) => d.hu)), rng),
          answer: c.hu,
          explain: explicacion(c),
        };
      },
    },

    // ¿Cómo se dice «háztömb» en español?  ->  elegir la palabra
    termino: {
      nombre: "Palabra",
      esfuerzo: 2,
      aplica: () => true,
      generar(c, o) {
        const rng = rngDe(o);
        const otras = distractores(c, 3, rng);
        return {
          type: "choice",
          prompt: "¿Cómo se dice «" + c.hu + "» en español?",
          options: mezclar([c.term].concat(otras.map((d) => d.term)), rng),
          answer: c.term,
          explain: explicacion(c),
        };
      },
    },

    // Frase con un hueco y opciones. Solo para sustantivos con artículo cuyo hueco es la palabra
    // tal cual (sin plural ni conjugación), para que las opciones concuerden con el artículo de la frase.
    // Lleva la traducción como pista: sin ella, dos palabras distintas podrían encajar.
    completar_opciones: {
      nombre: "Completar con opciones",
      esfuerzo: 2,
      aplica(c) {
        const f = fraseConHueco(c);
        // Una sola palabra: si la correcta tuviera varias y las demás no, se delataría sola.
        return !!(f && articuloDe(c) && f.respuesta === nucleo(c) && /^\p{L}+$/u.test(f.respuesta) && f.respuesta === f.respuesta.toLowerCase());
      },
      generar(c, o) {
        const rng = rngDe(o);
        const f = fraseConHueco(c);
        const art = articuloDe(c);
        const otras = distractores(c, 3, rng, (d) => articuloDe(d) === art && /^[\p{L}]+$/u.test(nucleo(d)) && nucleo(d) === nucleo(d).toLowerCase());
        return {
          type: "choice",
          prompt: f.prompt,
          hint: c.hu,
          options: mezclar([f.respuesta].concat(otras.map((d) => nucleo(d))), rng),
          answer: f.respuesta,
          explain: explicacion(c),
        };
      },
    },

    // La misma frase, pero hay que escribir la palabra (con su plural o conjugación si hace falta).
    completar_escribir: {
      nombre: "Completar escribiendo",
      esfuerzo: 3,
      aplica: (c) => !!fraseConHueco(c),
      generar(c) {
        const f = fraseConHueco(c);
        const flexionada = norm(f.respuesta) !== norm(nucleo(c));
        const accept = [f.respuesta];
        if (/-/.test(f.respuesta)) accept.push(f.respuesta.replace(/-/g, ""), f.respuesta.replace(/-/g, " "));
        // "perdido/a", "copado/a"...: sirve la forma de varón o de mujer
        if (/\p{L}\/a$/u.test(c.term)) {
          if (/o$/.test(f.respuesta)) accept.push(f.respuesta.slice(0, -1) + "a");
          else if (/a$/.test(f.respuesta)) accept.push(f.respuesta.slice(0, -1) + "o");
        }
        return {
          type: "fill",
          prompt: f.prompt,
          hint: flexionada ? c.hu + " (forma de «" + c.term + "»)" : c.hu,
          accept,
          answer: f.respuesta,
          explain: explicacion(c),
        };
      },
    },

    // Armar la frase de ejemplo tocando las palabras en orden.
    ordenar: {
      nombre: "Ordenar la frase",
      esfuerzo: 3,
      aplica(c) {
        const n = c.example.trim().split(/\s+/).length;
        return n >= 4 && n <= 12;
      },
      generar(c, o) {
        const rng = rngDe(o);
        const orden = c.example.trim().split(/\s+/);
        let words = mezclar(orden, rng);
        for (let i = 0; i < 5 && words.join(" ") === orden.join(" "); i++) words = mezclar(orden, rng);
        return {
          type: "order",
          prompt: "Ordená las palabras para armar la frase.",
          hint: c.term + " = " + c.hu,
          words,
          answer: orden.join(" "),
          explain: explicacion(c),
        };
      },
    },

    // Unir 4 palabras con su traducción (la palabra elegida + 3 parecidas).
    emparejar: {
      nombre: "Emparejar",
      esfuerzo: 2,
      aplica: () => true,
      generar(c, o) {
        const rng = rngDe(o);
        const grupo = [c].concat(distractores(c, 3, rng));
        return {
          type: "match",
          prompt: "Unir cada palabra con su significado.",
          pairs: grupo.map((d) => ({ left: d.term, right: d.hu })),
          answer: grupo.map((d) => d.term + " = " + d.hu).join(" · "),
          explain: "Ejemplo: " + c.example,
        };
      },
    },
  };

  // ---------- Conjugar (salen de data/verbos.data.js, no del vocabulario) ----------
  function sorteo(lista, rng) { return lista[Math.floor(rng() * lista.length)]; }

  // Elige tiempo y persona (los que pida opts.tiempo / opts.persona, y si no, al azar).
  function tiempoYPersona(o, rng) {
    return {
      t: (o && o.tiempo) || sorteo(Conjugador.TIEMPOS, rng).id,
      p: (o && o.persona) || sorteo(Conjugador.PERSONAS, rng).id,
    };
  }

  // Otra forma del mismo verbo que solo se distingue por la tilde (hablo/habló, hable/hablé).
  function confundible(v, t, p) {
    const propias = Conjugador.formas(v, t, p);
    for (const x of Conjugador.todas(v)) {
      if (x.tiempo === t && x.persona === p) continue;
      for (const f of x.formas) {
        const distinta = propias.every((pf) => pf.toLowerCase() !== f.toLowerCase());
        if (distinta && propias.some((pf) => norm(pf) === norm(f))) return { forma: f, tiempo: x.tiempo, persona: x.persona };
      }
    }
    return null;
  }

  function etiquetaTiempo(id) { return Conjugador.tiempoDe(id).etiqueta; }
  function etiquetaPersona(id) { return Conjugador.PERSONAS.find((x) => x.id === id).etiqueta; }

  function explicacionVerbo(v, t, p, formas, conf) {
    const T = etiquetaTiempo(t);
    let s;
    if (Conjugador.esIrregular(v, t, p)) s = "«" + v.inf + "» es irregular en " + T + ": " + formas[0] + ".";
    else {
      s = T.charAt(0).toUpperCase() + T.slice(1) + " regular de un verbo -" + Conjugador.grupo(v).toUpperCase() + ": " + formas[0] + ".";
      if (t === "presente" && p === "vos") s += " Con vos, la última sílaba lleva tilde.";
    }
    if (formas.length > 1) s += " También se usa «" + formas[1] + "».";
    if (conf) s += " Ojo con la tilde: «" + formas[0] + "» no es lo mismo que «" + conf.forma + "» (" + etiquetaTiempo(conf.tiempo) + ", " + etiquetaPersona(conf.persona) + ").";
    return s;
  }

  function consignaVerbo(v, t, p) {
    return "Conjugá «" + v.inf + "» — " + etiquetaTiempo(t) + ", " + etiquetaPersona(p) + ":";
  }

  DEFS.conjugar_opciones = {
    fuente: "verbo",
    nombre: "Conjugar con opciones",
    esfuerzo: 3,
    aplica: (v) => !!v.inf,
    generar(v, o) {
      const rng = rngDe(o);
      const { t, p } = tiempoYPersona(o, rng);
      const formas = Conjugador.formas(v, t, p);
      const propias = formas.map((f) => f.toLowerCase());
      // Opciones incorrectas: otras formas del mismo verbo (otro tiempo u otra persona)
      const pool = [];
      Conjugador.todas(v).forEach((x) => {
        const f = x.formas[0];
        if (!(x.tiempo === t && x.persona === p) && propias.indexOf(f.toLowerCase()) < 0 && pool.indexOf(f) < 0) pool.push(f);
      });
      const otras = mezclar(pool, rng).slice(0, 3);
      return {
        type: "choice",
        prompt: consignaVerbo(v, t, p),
        hint: v.hu,
        options: mezclar([formas[0]].concat(otras), rng),
        answer: formas[0],
        explain: explicacionVerbo(v, t, p, formas, null),
        tiempo: t,
        persona: p,
      };
    },
  };

  DEFS.conjugar_escribir = {
    fuente: "verbo",
    nombre: "Conjugar escribiendo",
    esfuerzo: 4,
    aplica: (v) => !!v.inf,
    generar(v, o) {
      const rng = rngDe(o);
      const { t, p } = tiempoYPersona(o, rng);
      const formas = Conjugador.formas(v, t, p);
      const conf = confundible(v, t, p);
      const ex = {
        type: "fill",
        prompt: consignaVerbo(v, t, p) + " ___",
        hint: v.hu,
        accept: formas,
        answer: formas[0],
        explain: explicacionVerbo(v, t, p, formas, conf),
        tiempo: t,
        persona: p,
      };
      // Si sin la tilde se obtiene otra forma válida del verbo, la tilde cuenta como parte de la respuesta
      if (conf) ex.estricto = true;
      return ex;
    },
  };

  function fuenteDe(c) { return c && c.inf ? "verbo" : "vocab"; }

  function buscar(item) {
    if (typeof item !== "string") return item;
    return VOCAB.find((v) => v.id === item) || (typeof VERBOS !== "undefined" ? VERBOS.find((v) => v.id === item) : undefined);
  }

  // Arma un ejercicio del formato `id` para la palabra o verbo `item` (objeto o id), o null si no aplica.
  function generar(id, item, opts) {
    const def = DEFS[id];
    const c = buscar(item);
    if (!def || !c || (def.fuente || "vocab") !== fuenteDe(c) || !def.aplica(c)) return null;
    const ex = def.generar(c, opts || {});
    ex.format = id;
    ex.source = c.id;
    return ex;
  }

  // Formatos que se pueden armar con esta palabra o verbo.
  function formatosPara(item) {
    const c = buscar(item);
    return Object.keys(DEFS).filter((id) => (DEFS[id].fuente || "vocab") === fuenteDe(c) && DEFS[id].aplica(c));
  }

  function lista() {
    return Object.keys(DEFS).map((id) => ({ id, nombre: DEFS[id].nombre, esfuerzo: DEFS[id].esfuerzo, fuente: DEFS[id].fuente || "vocab" }));
  }

  return { generar, formatosPara, lista, hueco, fraseConHueco, distractores, parecidas, tipoDe, articuloDe, nucleo, confundible };
})();
