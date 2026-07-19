/* Módulo Lectura: lista de provincias argentinas. Al abrir una, se pasa a
   pantalla completa (se esconde el header y el menú de abajo) con un botón
   "Atrás" fijo en la base. Por ahora solo Buenos Aires tiene diseño propio;
   el resto muestra "Próximamente" — el texto y diseño de cada una se suman
   más adelante. */
const Lectura = (function () {
  let host = null;

  function render(container) {
    host = container;
    list();
  }

  function list() {
    clear(host);
    host.appendChild(h("p", { class: "muted" }, I18n.t("lectura_pick_provincia")));
    PROVINCIAS.forEach((p) => {
      host.appendChild(
        h("button", { class: "topic-card", onClick: () => openProvincia(p) }, [
          h("div", { class: "topic-title" }, "📍 " + p.name),
        ])
      );
    });
  }

  function closeProvincia() {
    document.body.classList.remove("provincia-active");
  }

  function openProvincia(p) {
    document.body.classList.add("provincia-active");
    const screen = document.getElementById("provincia-screen");
    clear(screen);

    const isBA = p.id === "buenos-aires";
    screen.appendChild(h("div", { class: "provincia-content" }, isBA ? buenosAiresContent() : genericContent(p)));
    screen.appendChild(
      h(
        "button",
        { class: "provincia-back-btn " + (isBA ? "ba" : "generic"), onClick: closeProvincia },
        I18n.t("provincia_back")
      )
    );
  }

  function genericContent(p) {
    return h("div", { class: "panel center" }, [
      h("div", { class: "big-emoji" }, "🚧"),
      h("h2", {}, p.name),
      h("p", { class: "muted" }, I18n.t("lectura_coming_soon_desc")),
    ]);
  }

  function buenosAiresContent() {
    return [
      h("img", { class: "ba-header-img", src: "assets/provincias/buenos-aires/header.png", alt: "Buenos Aires" }),
      h("div", { class: "ba-panel" }, [
        h("img", { class: "ba-corner-left", src: "assets/provincias/buenos-aires/esquina-izq.png", alt: "" }),
        h("img", { class: "ba-corner-right", src: "assets/provincias/buenos-aires/esquina-der.png", alt: "" }),
        h("img", { class: "ba-sol", src: "assets/provincias/buenos-aires/sol.png", alt: "" }),
        h("h2", { class: "ba-title" }, "La Reina del Plata"),
        h(
          "p",
          { class: "ba-text" },
          "Buenos Aires es la capital de Argentina y el corazón político, cultural y económico del país. Con casi tres millones de habitantes en la ciudad, y más de trece millones si contamos todo el área metropolitana, es una de las ciudades más grandes de Sudamérica. La fundaron dos veces: la primera en 1536, que terminó en fracaso, y la segunda, la definitiva, en 1580."
        ),
        h(
          "p",
          { class: "ba-text" },
          "En pleno centro se levanta el Obelisco, el monumento más reconocido de la ciudad, ubicado sobre la Avenida 9 de Julio — una de las avenidas más anchas del mundo, con hasta veinte carriles. Cruzarla de punta a punta puede llevarte varios semáforos, ¡así que no tengas apuro!"
        ),
        h(
          "p",
          { class: "ba-text" },
          "Buenos Aires está dividida en barrios bien distintos entre sí. San Telmo conserva el empedrado y las casas coloniales, y los domingos se llena de anticuarios en su feria callejera. La Boca, con sus casas pintadas de colores y el estadio de Boca Juniors, respira fútbol y pasión por todos lados. Palermo, en cambio, es más moderno: bares, restaurantes y parques enormes conviven con oficinas y edificios nuevos. Y Recoleta sorprende con su cementerio, donde está enterrada Eva Perón, más parecido a un museo al aire libre que a un cementerio común."
        ),
        h(
          "p",
          { class: "ba-text" },
          "La ciudad es la cuna del tango, ese baile y esa música que nacieron en los conventillos porteños a fines del siglo diecinueve, mezclando influencias de inmigrantes europeos, criollos y afrodescendientes. Hoy en día podés ver una milonga (así se llaman los bailes de tango) en varios barrios, o simplemente escuchar a alguien tocando el bandoneón en la calle."
        ),
        h(
          "p",
          { class: "ba-text" },
          "La vida social gira mucho alrededor de la mesa. El asado de los domingos, el café de las tres de la tarde con medialunas, y el mate compartido entre amigos son costumbres que cualquier porteño defiende con orgullo. Y si alguna vez te invitan a comer \"a la parrilla\", preparate: en Argentina, la carne es un tema serio."
        ),
        h(
          "p",
          { class: "ba-text" },
          "Ser porteño (como se le dice a quien nació en Buenos Aires) es también una forma de ser: apurado para caminar, pero con tiempo de sobra para charlar en la vereda. Una ciudad que nunca termina de mostrarse del todo, y que siempre guarda alguna esquina nueva para descubrir."
        ),
        h("img", { class: "ba-escarapela", src: "assets/provincias/buenos-aires/escarapela.png", alt: "" }),
      ]),
    ];
  }

  return { render };
})();
