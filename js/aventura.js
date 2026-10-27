/* Modo Aventura: el camino de niveles (data/camino.data.js).
   Cada nivel es una mini-lección de 5 a 10 ejercicios. Se avanza en orden: para abrir un nivel hay que haber
   superado el anterior. Se supera acertando al menos el 70 %; las estrellas dependen de los aciertos.
   El progreso es propio de este modo (Store.aventura); la racha diaria es la misma que en Clásico, porque
   cada respuesta pasa por Exercise.mount, que la registra.

   Si se cierra la app en medio de una lección, se retoma en el mismo ejercicio: la lección se arma con una
   semilla guardada, así los ejercicios son los mismos.

   El camino se dibuja como un mapa que se recorre hacia arriba (js/mapa.js calcula dónde cae cada nivel y
   data/mapa.data.js describe las zonas y deja lugar para el arte). Tocar un nivel abre una hoja con su detalle.
   Se entra desde la tarjeta de Aventura en Inicio (modo Aventura). */
const Aventura = (function () {
  const APROBAR = 0.7;
  let host = null;
  let sesion = null; // lección en curso: { indice, nivel, semilla, ejercicios, hechos, aciertos }

  // ---------- Reglas (no tocan la pantalla) ----------
  function aprobado(aciertos, total) {
    return total > 0 && aciertos / total >= APROBAR;
  }

  // 0 = no pasó; 1, 2 o 3 estrellas según el porcentaje de aciertos
  function estrellasPara(aciertos, total) {
    if (!aprobado(aciertos, total)) return 0;
    const p = aciertos / total;
    return p >= 0.95 ? 3 : p >= 0.8 ? 2 : 1;
  }

  // Generador de azar con semilla (mulberry32): la misma semilla da la misma lección
  function conSemilla(a) {
    return function () {
      a |= 0; a = (a + 0x6d2b79f5) | 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  // Convierte una receta del camino en un ejercicio listo para Exercise.mount
  function expandir(sp, rng) {
    if (sp.f === "gramatica") {
      const t = GRAMMAR.find((x) => x.id === sp.s);
      return t && t.exercises[sp.i] ? Object.assign({}, t.exercises[sp.i], { format: "gramatica", source: sp.s + "#" + sp.i }) : null;
    }
    if (sp.f === "produccion") {
      const p = PRODUCCION.find((x) => x.id === sp.s);
      return p ? Object.assign({}, p, { format: "produccion", source: sp.s }) : null;
    }
    return Formats.generar(sp.f, sp.s, { rng, tiempo: sp.t, persona: sp.p });
  }

  function armar(nivel, semilla) {
    const rng = conSemilla(semilla);
    return nivel.ejercicios.map((sp) => expandir(sp, rng));
  }

  function niveles() { return CAMINO.niveles; }

  function hecho(id) {
    const r = Store.aventuraNodo(id);
    return !!(r && r.hecho);
  }

  function desbloqueado(i) {
    return i === 0 || hecho(niveles()[i - 1].id);
  }

  // Primer nivel sin superar (-1 si ya están todos)
  function indiceActual() {
    return niveles().findIndex((n) => !hecho(n.id));
  }

  function stats() {
    const lista = niveles();
    let hechos = 0, estrellas = 0;
    lista.forEach((n) => {
      const r = Store.aventuraNodo(n.id);
      if (r && r.hecho) { hechos++; estrellas += r.estrellas || 0; }
    });
    return { total: lista.length, hechos, estrellas, maxEstrellas: lista.length * 3 };
  }

  // Para la tarjeta de Aventura en Inicio: el nivel en el que está y si hay una lección empezada
  function resumen() {
    const lista = niveles();
    const i = indiceActual();
    const curso = Store.aventura().enCurso;
    const nivelCurso = curso && curso.i > 0 ? lista.find((n) => n.id === curso.nivel) : null;
    return Object.assign(stats(), {
      indiceActual: i,
      actual: i >= 0 ? lista[i] : null,
      enCurso: nivelCurso && curso.i < nivelCurso.ejercicios.length ? { nivel: nivelCurso, hechos: curso.i, total: nivelCurso.ejercicios.length } : null,
    });
  }

  // ---------- Pantallas ----------
  function render(container) {
    host = container;
    sesion = null;
    // El mapa es muy largo: sin esto el navegador, al recargar, devuelve la pantalla al lugar donde estaba
    // la vez anterior y pisa el scroll que deja la pantalla en el nivel actual.
    if (typeof history !== "undefined" && "scrollRestoration" in history) history.scrollRestoration = "manual";
    camino();
  }

  function estrellasHtml(n) {
    return h("span", { class: "av-estrellas" }, [1, 2, 3].map((k) => h("span", { class: k <= n ? "on" : "off" }, "★")));
  }

  // ---------- El mapa ----------
  const SVG_NS = "http://www.w3.org/2000/svg";
  function svg(tag, attrs, hijos) {
    const n = document.createElementNS(SVG_NS, tag);
    for (const k in attrs) if (attrs[k] != null) n.setAttribute(k, attrs[k]);
    (hijos || []).forEach((c) => n.appendChild(c));
    return n;
  }
  function imagenSvg(url, x, y, ancho, alto, ajuste) {
    const n = svg("image", { x, y, width: ancho, height: alto, preserveAspectRatio: ajuste });
    n.setAttribute("href", url);
    n.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", url);
    return n;
  }

  // Formas simples de relleno para una zona sin arte (colores de la paleta). Alternan de a tres tipos.
  function relleno(z, k, g) {
    const lado = k % 2 === 0 ? 1 : -1;
    const cx = g.ancho / 2 + lado * 150;
    const arriba = z.top, abajo = z.bottom;
    const forma = (tag, attrs, clase) => svg(tag, Object.assign({ class: clase }, attrs));
    if (k % 3 === 0) {
      return [forma("circle", { cx, cy: arriba + 90, r: 34 }, "av-d-cian"), forma("ellipse", { cx, cy: abajo - 20, rx: 95, ry: 60 }, "av-d-navy")];
    }
    if (k % 3 === 1) {
      const base = abajo - 10;
      return [
        forma("polygon", { points: [cx - 70, base, cx - 10, base - 120, cx + 50, base].join(" ") }, "av-d-navy"),
        forma("polygon", { points: [cx - 10, base, cx + 45, base - 85, cx + 100, base].join(" ") }, "av-d-rosa"),
        forma("circle", { cx: cx - lado * 10, cy: arriba + 80, r: 26 }, "av-d-cian"),
      ];
    }
    const y = (arriba + abajo) / 2;
    return [
      forma("circle", { cx: cx - 30, cy: y, r: 28 }, "av-d-rosa"),
      forma("circle", { cx, cy: y - 12, r: 36 }, "av-d-rosa"),
      forma("circle", { cx: cx + 36, cy: y, r: 26 }, "av-d-rosa"),
      forma("circle", { cx: cx - lado * 20, cy: arriba + 70, r: 22 }, "av-d-cian"),
    ];
  }

  // Fondo y decoraciones de una zona: el arte de data/mapa.data.js si lo hay, y si no, formas simples
  function capaZona(z, k, g) {
    // Con arte de fondo no hace falta la franja de color de la zona (el arte ya pinta todo y se funde con el de las zonas vecinas)
    const nodos = z.fondo ? [] : [svg("rect", { x: 0, y: z.top, width: g.ancho, height: z.bottom - z.top, class: "av-banda " + (k % 2 ? "b" : "a") })];
    if (z.fondo) nodos.push(imagenSvg(z.fondo, 0, z.top, g.ancho, z.bottom - z.top, "xMidYMid slice"));
    if (z.decoraciones && z.decoraciones.length) {
      z.decoraciones.forEach((d) => nodos.push(imagenSvg(d.img, d.x, z.top + d.y, d.ancho, d.alto || d.ancho, "xMidYMid meet")));
    } else if (!z.fondo) {
      relleno(z, k, g).forEach((n) => nodos.push(n));
    }
    return nodos;
  }

  function alturaCabecera() {
    const c = typeof document !== "undefined" && document.querySelector(".app-header");
    return c ? c.offsetHeight : 62;
  }

  function camino() {
    clear(host);
    const lista = niveles();
    const st = stats();
    const g = Mapa.calcular(lista.length, typeof MAPA !== "undefined" ? MAPA : null);
    const actual = indiceActual();
    const botones = [];
    let seleccionado = -1;

    // ----- Lienzo: franjas de zona, formas, y el trazo del camino -----
    const lienzo = h("div", { class: "av-mapa", style: "padding-top:" + ((g.alto / g.ancho) * 100).toFixed(3) + "%" });
    const capa = svg("svg", { class: "av-capa", viewBox: "0 0 " + g.ancho + " " + g.alto, preserveAspectRatio: "none", "aria-hidden": "true" });
    // Abajo de la primera zona el suelo sigue hasta el final del mapa (y, con el relleno de .av-suelo, hasta el final de la pantalla)
    if (typeof MAPA !== "undefined" && MAPA && MAPA.pie && g.zonas.length) capa.appendChild(svg("rect", { x: 0, y: g.zonas[0].bottom - 1, width: g.ancho, height: g.alto - g.zonas[0].bottom + 2, fill: MAPA.pie }));
    g.zonas.forEach((z, k) => capaZona(z, k, g).forEach((n) => capa.appendChild(n)));
    capa.appendChild(svg("path", { d: Mapa.trazo(g.puntos), class: "av-trazo base" }));
    const llegado = actual < 0 ? lista.length - 1 : actual;
    if (llegado >= 1) capa.appendChild(svg("path", { d: Mapa.trazo(g.puntos, llegado), class: "av-trazo hecho" }));
    lienzo.appendChild(capa);

    // ----- Carteles de zona -----
    g.zonas.forEach((z) => {
      lienzo.appendChild(
        h("div", { class: "av-cartel", style: "top:" + ((z.cartelY / g.alto) * 100).toFixed(3) + "%" }, [
          h("span", { class: "av-cartel-nombre" }, z.nombre),
          h("span", { class: "av-cartel-sub" }, I18n.t("aventura_zona_niveles", z.primero + 1, z.ultimo + 1)),
        ])
      );
    });

    // ----- Hoja de abajo: el detalle del nivel tocado -----
    const hoja = h("div", { class: "av-hoja", role: "dialog", "aria-hidden": "true" });
    function cerrarHoja() {
      hoja.classList.remove("abierta");
      hoja.setAttribute("aria-hidden", "true");
      botones.forEach((b) => b.classList.remove("sel"));
      seleccionado = -1;
    }
    function abrirHoja(i) {
      const n = lista[i];
      const rec = Store.aventuraNodo(n.id);
      const abierto = desbloqueado(i);
      const c = Store.aventura().enCurso;
      const reanudable = !!(c && c.nivel === n.id && c.i > 0 && c.i < n.ejercicios.length);
      seleccionado = i;
      botones.forEach((b, k) => b.classList.toggle("sel", k === i));
      clear(hoja);
      hoja.appendChild(
        h("div", { class: "av-hoja-cab" }, [
          h("div", {}, [
            h("div", { class: "av-hoja-titulo" }, i + 1 + ". " + n.titulo),
            h("div", { class: "av-sub" }, I18n.t("aventura_nivel_sub", n.ejercicios.length, n.nivel)),
          ]),
          h("button", { class: "av-hoja-x", type: "button", "aria-label": I18n.t("aventura_cerrar"), onClick: cerrarHoja }, "✕"),
        ])
      );
      if (rec && rec.hecho) hoja.appendChild(estrellasHtml(rec.estrellas || 1));
      if (!abierto) hoja.appendChild(h("p", { class: "av-hoja-aviso" }, I18n.t("aventura_bloqueado")));
      else if (reanudable) {
        hoja.appendChild(h("button", { class: "btn primary wide", onClick: () => empezar(i, true) }, I18n.t("aventura_continuar_btn", c.i, n.ejercicios.length)));
        hoja.appendChild(h("button", { class: "btn ghost wide", onClick: () => empezar(i, false) }, I18n.t("aventura_desde_principio")));
      } else {
        hoja.appendChild(h("button", { class: "btn primary wide", onClick: () => empezar(i, false) }, I18n.t(rec && rec.hecho ? "aventura_repetir" : "aventura_empezar")));
      }
      hoja.classList.add("abierta");
      hoja.setAttribute("aria-hidden", "false");
    }

    // ----- Niveles -----
    lista.forEach((n, i) => {
      const p = g.puntos[i];
      const rec = Store.aventuraNodo(n.id);
      const esHecho = !!(rec && rec.hecho);
      const abierto = desbloqueado(i);
      const estado = esHecho ? " hecho" : abierto ? "" : " bloqueado";
      const circulo = esHecho ? estrellasHtml(rec.estrellas || 1) : h("span", {}, abierto ? String(i + 1) : "🔒");
      const b = h(
        "button",
        {
          class: "av-nodo" + estado + (i === actual ? " actual" : ""),
          type: "button",
          "aria-label": i + 1 + ". " + n.titulo,
          style: "left:" + ((p.x / g.ancho) * 100).toFixed(3) + "%;top:" + ((p.y / g.alto) * 100).toFixed(3) + "%",
          onClick: () => (seleccionado === i ? cerrarHoja() : abrirHoja(i)),
        },
        [h("span", { class: "av-punto" }, circulo), h("span", { class: "av-pie" }, n.titulo)]
      );
      botones.push(b);
      lienzo.appendChild(b);
    });
    lienzo.addEventListener("click", (e) => { if (!e.target.closest(".av-nodo")) cerrarHoja(); });

    // ----- Barra fija de arriba -----
    const irAMiNivel = (suave) => {
      const destino = botones[llegado];
      if (destino) destino.scrollIntoView({ block: "center", behavior: suave ? "smooth" : "auto" });
    };
    host.appendChild(
      h("div", { class: "av-info", style: "top:" + alturaCabecera() + "px" }, [
        h("span", { class: "av-info-titulo" }, I18n.t("aventura_title")),
        h("span", { class: "muted small av-info-datos" }, I18n.t("aventura_resumen", st.hechos, st.total, st.estrellas)),
        h("button", { class: "btn ghost av-yo", type: "button", onClick: () => irAMiNivel(true) }, I18n.t("aventura_mi_nivel")),
      ])
    );
    host.appendChild(h("div", { class: "av-mapa-ext" }, lienzo));
    if (typeof MAPA !== "undefined" && MAPA && MAPA.pie) host.appendChild(h("div", { class: "av-suelo", style: "background-color:" + MAPA.pie }));
    host.appendChild(hoja);
    // showView sube la pantalla al principio después de dibujar; esto la deja en el nivel actual
    setTimeout(() => irAMiNivel(false), 0);
  }

  function guardarCurso() {
    Store.setAventuraEnCurso({ nivel: sesion.nivel.id, semilla: sesion.semilla, i: sesion.hechos, aciertos: sesion.aciertos });
  }

  function empezar(indice, reanudar) {
    const nivel = niveles()[indice];
    const curso = Store.aventura().enCurso;
    let semilla, hechos = 0, aciertos = 0;
    if (reanudar && curso && curso.nivel === nivel.id && curso.i < nivel.ejercicios.length) {
      semilla = curso.semilla; hechos = curso.i; aciertos = curso.aciertos;
    } else {
      semilla = Math.floor(Math.random() * 2147483647);
    }
    sesion = { indice, nivel, semilla, ejercicios: armar(nivel, semilla), hechos, aciertos };
    guardarCurso();
    pregunta();
  }

  function cabecera() {
    const total = sesion.ejercicios.length;
    return h("div", { class: "av-cabecera" }, [
      h("button", { class: "back-link av-salir", onClick: () => camino() }, I18n.t("aventura_salir")),
      h("div", { class: "av-barra" }, [h("div", { class: "av-barra-relleno", style: "width:" + Math.round((sesion.hechos / total) * 100) + "%" })]),
      h("span", { class: "muted small" }, Math.min(sesion.hechos + 1, total) + " / " + total),
    ]);
  }

  function pregunta() {
    clear(host);
    if (sesion.hechos >= sesion.ejercicios.length) { resultado(); return; }
    host.appendChild(cabecera());
    const ex = sesion.ejercicios[sesion.hechos];
    // Se oculta con style y no con la clase "hidden": ".btn.wide" le gana en especificidad y lo mostraría igual
    const seguir = h("button", { class: "btn primary wide", style: "display:none", onClick: () => pregunta() }, I18n.t("aventura_continue"));
    Exercise.mount(host, ex, {
      placeholder: I18n.t("grammar_answer_placeholder"),
      checkLabel: I18n.t("grammar_check"),
      onAnswer: (ok) => {
        if (ok) sesion.aciertos++;
        sesion.hechos++;
        guardarCurso(); // si se cierra la app ahora, vuelve en el ejercicio que sigue
        seguir.style.display = "";
      },
    });
    host.appendChild(seguir);
  }

  function resultado() {
    const total = sesion.ejercicios.length;
    const aciertos = sesion.aciertos;
    const paso = aprobado(aciertos, total);
    const est = estrellasPara(aciertos, total);
    const antes = Store.aventuraNodo(sesion.nivel.id) || { hecho: false, estrellas: 0, mejor: 0, intentos: 0 };
    Store.setAventuraNodo(sesion.nivel.id, {
      hecho: antes.hecho || paso,
      estrellas: Math.max(antes.estrellas || 0, est),
      mejor: Math.max(antes.mejor || 0, aciertos / total),
      intentos: (antes.intentos || 0) + 1,
    });
    Store.setAventuraEnCurso(null);

    const siguiente = niveles()[sesion.indice + 1];
    const recienAbierto = paso && !antes.hecho && siguiente;
    const fin = paso && !antes.hecho && !siguiente;
    const indice = sesion.indice;
    host.appendChild(
      h("div", { class: "panel center" }, [
        h("div", { class: "big-emoji" }, est === 3 ? "🎉" : paso ? "👏" : "💪"),
        h("h2", {}, I18n.t(paso ? "aventura_aprobado" : "aventura_casi")),
        paso ? estrellasHtml(est) : null,
        h("p", { class: "muted" }, I18n.t("aventura_aciertos", aciertos, total)),
        paso ? null : h("p", { class: "muted small" }, I18n.t("aventura_necesitas", Math.round(APROBAR * 100))),
        recienAbierto ? h("p", { class: "muted small" }, I18n.t("aventura_desbloqueaste", siguiente.titulo)) : null,
        fin ? h("p", { class: "muted small" }, I18n.t("aventura_fin_camino")) : null,
        h("button", { class: "btn primary wide", onClick: () => camino() }, I18n.t("aventura_seguir")),
        h("button", { class: "btn ghost wide", onClick: () => empezar(indice, false) }, I18n.t("aventura_repetir")),
      ])
    );
  }

  return { render, stats, resumen, aprobado, estrellasPara, expandir, armar, conSemilla, desbloqueado, APROBAR };
})();
