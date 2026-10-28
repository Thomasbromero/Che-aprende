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
    { nombre: "Hamburgo", niveles: 6, fondo: "assets/mapa-de/zona-01.svg?v=1", decoraciones: [] },
    { nombre: "Berlín", niveles: 6, fondo: "assets/mapa-de/zona-02.svg?v=1", decoraciones: [] },
    { nombre: "Dresde", niveles: 5, fondo: "assets/mapa-de/zona-03.svg?v=1", decoraciones: [] },
    { nombre: "Colonia y el Rin", niveles: 6, fondo: "assets/mapa-de/zona-04.svg?v=1", decoraciones: [] },
    { nombre: "Selva Negra", niveles: 6, fondo: "assets/mapa-de/zona-05.svg?v=1", decoraciones: [] },
    { nombre: "Alpes suizos", niveles: 6, fondo: "assets/mapa-de/zona-06.svg?v=1", decoraciones: [] },
    { nombre: "Múnich", niveles: 5, fondo: "assets/mapa-de/zona-07.svg?v=1", decoraciones: [] },
    { nombre: "Salzburgo", niveles: 6, fondo: "assets/mapa-de/zona-08.svg?v=1", decoraciones: [] },
    { nombre: "Viena", niveles: 6, fondo: "assets/mapa-de/zona-09.svg?v=1", decoraciones: [] },
  ],
};
