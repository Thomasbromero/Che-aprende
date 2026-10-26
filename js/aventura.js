/* Modo Aventura: el camino de niveles (data/camino.data.js).
   Cada nivel es una mini-lección de 5 a 10 ejercicios. Se avanza en orden: para abrir un nivel hay que haber
   superado el anterior. Se supera acertando al menos el 70 %; las estrellas dependen de los aciertos.
   El progreso es propio de este modo (Store.aventura); la racha diaria es la misma que en Clásico, porque
   cada respuesta pasa por Exercise.mount, que la registra.

   Si se cierra la app en medio de una lección, se retoma en el mismo ejercicio: la lección se arma con una
   semilla guardada, así los ejercicios son los mismos.

   Esta pantalla es la versión simple (una lista de niveles). El mapa con ilustraciones viene después.
   Para probarla antes de que tenga entrada en Inicio: abrir la app con "?aventura" al final de la dirección,
   y con "?aventura=todo" quedan todos los niveles abiertos (solo para probar). */
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

  // Para probar: con ?aventura=todo no hace falta superar un nivel para abrir el siguiente
  function todoAbierto() {
    return typeof location !== "undefined" && /[?&]aventura=todo\b/.test(location.search);
  }

  function desbloqueado(i) {
    return todoAbierto() || i === 0 || hecho(niveles()[i - 1].id);
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

  // ---------- Pantallas ----------
  function render(container) {
    host = container;
    sesion = null;
    camino();
  }

  function estrellasHtml(n) {
    return h("span", { class: "av-estrellas" }, [1, 2, 3].map((k) => h("span", { class: k <= n ? "on" : "off" }, "★")));
  }

  function camino() {
    clear(host);
    const lista = niveles();
    const st = stats();
    host.appendChild(h("h2", {}, I18n.t("aventura_title")));
    host.appendChild(h("p", { class: "muted av-resumen" }, I18n.t("aventura_resumen", st.hechos, st.total, st.estrellas)));

    const curso = Store.aventura().enCurso;
    const nivelCurso = curso && lista.find((n) => n.id === curso.nivel);
    if (nivelCurso && curso.i > 0 && curso.i < nivelCurso.ejercicios.length) {
      host.appendChild(
        h("button", { class: "av-continuar", onClick: () => empezar(lista.indexOf(nivelCurso), true) },
          I18n.t("aventura_continuar_card", nivelCurso.titulo, curso.i, nivelCurso.ejercicios.length))
      );
    }

    const actual = indiceActual();
    const cont = h("div", { class: "av-lista" });
    let nodoActual = null;
    lista.forEach((n, i) => {
      const rec = Store.aventuraNodo(n.id);
      const esHecho = !!(rec && rec.hecho);
      const abierto = desbloqueado(i);
      const circulo = esHecho ? estrellasHtml(rec.estrellas || 1) : h("span", {}, abierto ? String(i + 1) : "🔒");
      const b = h(
        "button",
        {
          class: "av-nivel" + (esHecho ? " hecho" : "") + (i === actual ? " actual" : ""),
          type: "button",
          title: abierto ? null : I18n.t("aventura_bloqueado"),
          onClick: abierto ? () => empezar(i, !!(curso && curso.nivel === n.id)) : null,
        },
        [
          h("span", { class: "av-circulo" }, circulo),
          h("span", { class: "av-datos" }, [
            h("span", { class: "av-titulo" }, n.titulo),
            h("span", { class: "av-sub" }, I18n.t("aventura_nivel_sub", n.ejercicios.length, n.nivel)),
          ]),
        ]
      );
      if (!abierto) b.disabled = true;
      if (i === actual) nodoActual = b;
      cont.appendChild(b);
    });
    host.appendChild(cont);
    // showView sube la pantalla al principio después de dibujar; esto la deja en el nivel actual
    if (nodoActual) setTimeout(() => nodoActual.scrollIntoView({ block: "center" }), 0);
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

  return { render, stats, aprobado, estrellasPara, expandir, armar, conSemilla, desbloqueado, APROBAR };
})();
