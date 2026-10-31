/* Mapa del modo Aventura en alemán: un viaje por Alemania, Austria y Suiza.
   Mismas medidas y mismo formato que data/mapa.data.js (ver ahí la explicación de cada campo).
   Las zonas se reparten con "node dev/ajustar-zonas.js --lang de --escribir" cuando el camino está cerrado;
   el arte de fondo (fondo: "assets/mapa-de/zona-NN.svg") se hace después, con el contenido ya fijo. */
window.MAPA_DE = {
  ancho: 400,
  separacion: 116,
  altoCartel: 116,
  amplitud: 105,
  pie: "#e8ded5", // color de abajo de todo del mapa: sigue el suelo de la primera zona (Hamburgo) hasta el final de la pantalla
  zonas: [
    { nombre: "Hamburgo", niveles: 6, fondo: "assets/mapa-de/zona-01.svg?v=3", decoraciones: [] },
    { nombre: "Bremen", niveles: 6, fondo: "assets/mapa-de/zona-02.svg?v=3", decoraciones: [] },
    { nombre: "Lübeck", niveles: 6, fondo: "assets/mapa-de/zona-03.svg?v=3", decoraciones: [] },
    { nombre: "Rügen", niveles: 6, fondo: "assets/mapa-de/zona-04.svg?v=3", decoraciones: [] },
    { nombre: "Berlín", niveles: 6, fondo: "assets/mapa-de/zona-05.svg?v=3", decoraciones: [] },
    { nombre: "Leipzig", niveles: 6, fondo: "assets/mapa-de/zona-06.svg?v=3", decoraciones: [] },
    { nombre: "Dresde", niveles: 6, fondo: "assets/mapa-de/zona-07.svg?v=3", decoraciones: [] },
    { nombre: "Núremberg", niveles: 6, fondo: "assets/mapa-de/zona-08.svg?v=3", decoraciones: [] },
    { nombre: "Rothenburg", niveles: 6, fondo: "assets/mapa-de/zona-09.svg?v=3", decoraciones: [] },
    { nombre: "Frankfurt", niveles: 6, fondo: "assets/mapa-de/zona-10.svg?v=3", decoraciones: [] },
    { nombre: "Mosela", niveles: 6, fondo: "assets/mapa-de/zona-11.svg?v=3", decoraciones: [] },
    { nombre: "Colonia y el Rin", niveles: 6, fondo: "assets/mapa-de/zona-12.svg?v=3", decoraciones: [] },
    { nombre: "Heidelberg", niveles: 6, fondo: "assets/mapa-de/zona-13.svg?v=3", decoraciones: [] },
    { nombre: "Selva Negra", niveles: 6, fondo: "assets/mapa-de/zona-14.svg?v=3", decoraciones: [] },
    { nombre: "Lago de Constanza", niveles: 6, fondo: "assets/mapa-de/zona-15.svg?v=3", decoraciones: [] },
    { nombre: "Zúrich", niveles: 6, fondo: "assets/mapa-de/zona-16.svg?v=3", decoraciones: [] },
    { nombre: "Berna", niveles: 6, fondo: "assets/mapa-de/zona-17.svg?v=3", decoraciones: [] },
    { nombre: "Alpes suizos", niveles: 6, fondo: "assets/mapa-de/zona-18.svg?v=3", decoraciones: [] },
    { nombre: "Neuschwanstein", niveles: 6, fondo: "assets/mapa-de/zona-19.svg?v=3", decoraciones: [] },
    { nombre: "Múnich", niveles: 6, fondo: "assets/mapa-de/zona-20.svg?v=3", decoraciones: [] },
    { nombre: "Zugspitze", niveles: 6, fondo: "assets/mapa-de/zona-21.svg?v=3", decoraciones: [] },
    { nombre: "Innsbruck", niveles: 6, fondo: "assets/mapa-de/zona-22.svg?v=3", decoraciones: [] },
    { nombre: "Salzburgo", niveles: 6, fondo: "assets/mapa-de/zona-23.svg?v=3", decoraciones: [] },
    { nombre: "Hallstatt", niveles: 6, fondo: "assets/mapa-de/zona-24.svg?v=3", decoraciones: [] },
    { nombre: "Wachau", niveles: 6, fondo: "assets/mapa-de/zona-25.svg?v=3", decoraciones: [] },
    { nombre: "Graz", niveles: 6, fondo: "assets/mapa-de/zona-26.svg?v=3", decoraciones: [] },
    { nombre: "Viena", niveles: 6, fondo: "assets/mapa-de/zona-27.svg?v=3", decoraciones: [] },
  ],
};
