/* Mapa del modo Aventura: cómo se dibuja el camino. Acá se enchufa el arte cuando esté listo.

   El mapa se dibuja de abajo (nivel 1) hacia arriba y se escala al ancho del celular, así que todas las
   medidas están en "unidades" de un lienzo de `ancho` unidades de ancho.

   - ancho:       ancho del lienzo (400 = un celular chico; todo se escala proporcionalmente)
   - separacion:  distancia vertical entre un nivel y el siguiente
   - altoCartel:  alto del espacio que ocupa el cartel de cada zona
   - amplitud:    cuánto se corre el camino hacia los costados (zigzag)
   - zonas:       grupos de niveles seguidos. Cada una acepta:
        nombre:       el texto del cartel
        niveles:      cuántos niveles tiene (las zonas tienen que sumar los niveles del camino)
        fondo:        (opcional) imagen de fondo de la zona, ej. "assets/mapa/zona1-fondo.png". Se estira
                      al ancho completo y al alto de la zona (lienzo de 400 unidades de ancho; el alto
                      de una zona es altoCartel + niveles x separacion + 20: para 6 niveles son 832 unidades, o sea una imagen de 400 x 832).
        decoraciones: (opcional) lista de imágenes sueltas: { img, x, y, ancho, alto }. "alto" es opcional (si falta, vale lo mismo
                      que ancho); la imagen conserva sus proporciones dentro de ese rectángulo.
                      x e y son la esquina de arriba a la izquierda, en unidades del lienzo; y se cuenta desde
                      el borde de arriba de la zona hacia abajo. Ej: { img: "assets/mapa/cactus.png", x: 20, y: 100, ancho: 90 }
   - pie:         (opcional) color de relleno de abajo de la primera zona, hasta el final de la pantalla (que no se vea cortado)
   Lo que esté en null o vacío se dibuja con formas simples de relleno (colores de la paleta).
   Las imágenes van en la carpeta assets/mapa/. */
window.MAPA = {
  ancho: 400,
  separacion: 116,
  altoCartel: 116,
  amplitud: 105,
  pie: "#eadbd2", // color de abajo de todo del mapa: sigue el suelo de la primera zona hasta el final de la pantalla
  zonas: [
    { nombre: "Buenos Aires", niveles: 6, fondo: "assets/mapa/zona-01.svg?v=2", decoraciones: [] },
    { nombre: "La Pampa húmeda", niveles: 6, fondo: "assets/mapa/zona-02.svg?v=2", decoraciones: [] },
    { nombre: "Mar del Plata", niveles: 6, fondo: "assets/mapa/zona-03.svg?v=2", decoraciones: [] },
    { nombre: "Delta del Tigre", niveles: 6, fondo: "assets/mapa/zona-04.svg?v=2", decoraciones: [] },
    { nombre: "Rosario", niveles: 6, fondo: "assets/mapa/zona-05.svg?v=2", decoraciones: [] },
    { nombre: "Entre Ríos", niveles: 6, fondo: "assets/mapa/zona-06.svg?v=2", decoraciones: [] },
    { nombre: "Esteros del Iberá", niveles: 7, fondo: "assets/mapa/zona-07.svg?v=2", decoraciones: [] },
    { nombre: "Cataratas del Iguazú", niveles: 6, fondo: "assets/mapa/zona-08.svg?v=2", decoraciones: [] },
    { nombre: "Gran Chaco", niveles: 6, fondo: "assets/mapa/zona-09.svg?v=2", decoraciones: [] },
    { nombre: "Formosa", niveles: 6, fondo: "assets/mapa/zona-10.svg?v=2", decoraciones: [] },
    { nombre: "Santiago del Estero", niveles: 6, fondo: "assets/mapa/zona-11.svg?v=2", decoraciones: [] },
    { nombre: "Tucumán", niveles: 6, fondo: "assets/mapa/zona-12.svg?v=2", decoraciones: [] },
    { nombre: "Salta la linda", niveles: 6, fondo: "assets/mapa/zona-13.svg?v=2", decoraciones: [] },
    { nombre: "Quebrada de Humahuaca", niveles: 6, fondo: "assets/mapa/zona-14.svg?v=2", decoraciones: [] },
    { nombre: "Puna de Catamarca", niveles: 6, fondo: "assets/mapa/zona-15.svg?v=2", decoraciones: [] },
    { nombre: "Talampaya", niveles: 6, fondo: "assets/mapa/zona-16.svg?v=2", decoraciones: [] },
    { nombre: "Valle de la Luna", niveles: 6, fondo: "assets/mapa/zona-17.svg?v=2", decoraciones: [] },
    { nombre: "Mendoza", niveles: 6, fondo: "assets/mapa/zona-18.svg?v=2", decoraciones: [] },
    { nombre: "San Luis", niveles: 6, fondo: "assets/mapa/zona-19.svg?v=2", decoraciones: [] },
    { nombre: "Sierras de Córdoba", niveles: 6, fondo: "assets/mapa/zona-20.svg?v=2", decoraciones: [] },
    { nombre: "La Pampa", niveles: 7, fondo: "assets/mapa/zona-21.svg?v=2", decoraciones: [] },
    { nombre: "Neuquén", niveles: 6, fondo: "assets/mapa/zona-22.svg?v=2", decoraciones: [] },
    { nombre: "Bariloche", niveles: 6, fondo: "assets/mapa/zona-23.svg?v=2", decoraciones: [] },
    { nombre: "Península Valdés", niveles: 6, fondo: "assets/mapa/zona-24.svg?v=2", decoraciones: [] },
    { nombre: "Glaciares", niveles: 6, fondo: "assets/mapa/zona-25.svg?v=2", decoraciones: [] },
    { nombre: "Tierra del Fuego", niveles: 6, fondo: "assets/mapa/zona-26.svg?v=2", decoraciones: [] },
    { nombre: "Antártida Argentina", niveles: 6, fondo: "assets/mapa/zona-27.svg?v=2", decoraciones: [] },
  ],
};
