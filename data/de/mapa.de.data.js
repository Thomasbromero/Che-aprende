/* Mapa del modo Aventura en alemán: un viaje por Alemania, Austria y Suiza.
   Mismas medidas y mismo formato que data/mapa.data.js (ver ahí la explicación de cada campo).
   Las zonas se reparten con "node dev/ajustar-zonas.js --lang de --escribir" cuando el camino está cerrado;
   el arte de fondo (fondo: "assets/mapa-de/zona-NN.svg") se hace después, con el contenido ya fijo. */
window.MAPA_DE = {
  ancho: 400,
  separacion: 116,
  altoCartel: 116,
  amplitud: 105,
  zonas: [
    { nombre: "Hamburgo", niveles: 6, fondo: null, decoraciones: [] },
    { nombre: "Berlín", niveles: 6, fondo: null, decoraciones: [] },
    { nombre: "Dresde", niveles: 5, fondo: null, decoraciones: [] },
    { nombre: "Colonia y el Rin", niveles: 6, fondo: null, decoraciones: [] },
    { nombre: "Selva Negra", niveles: 6, fondo: null, decoraciones: [] },
    { nombre: "Alpes suizos", niveles: 6, fondo: null, decoraciones: [] },
    { nombre: "Múnich", niveles: 5, fondo: null, decoraciones: [] },
    { nombre: "Salzburgo", niveles: 6, fondo: null, decoraciones: [] },
    { nombre: "Viena", niveles: 6, fondo: null, decoraciones: [] },
  ],
};
