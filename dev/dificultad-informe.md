# Dificultad de los ejercicios

Informe generado el 2026-10-26 con `node dev/puntuar.js --informe`. Cada ejercicio tiene un puntaje de **1 a 100**; el modo Aventura los ordena de menor a mayor para armar el camino.

## Cómo se calcula

**puntaje = 60 % lo que se enseña + 40 % lo que hay que hacer con eso.**

Así una misma palabra es fácil cuando solo hay que *reconocerla* entre opciones y difícil cuando hay que *escribirla de memoria*: aparece en dos puntos distintos del camino.

### Lo que se enseña: palabras (puntaje del 0 al 100)

Se pensó para alguien que ya sabe español estándar y quiere hablar rioplatense, así que cuesta más lo que *no* está en los libros.

| Tipo de palabra | Puntos base | Ejemplos |
|---|---|---|
| Saludo o fórmula | 6 | Encantada, Hola soy… |
| Básica y transparente | 10 | silla, mesa, cabeza, leche |
| Estándar | 22 | escoba, tobillo, impresora |
| Variante argentina de algo conocido | 40 | heladera, pileta, remera, vereda |
| Jerga / lunfardo | 60 | quilombo, guita, chamuyar |

A eso se suma: **+6 y +2 por cada palabra extra** si es una frase (dar bola, estar al pedo), **+1,5 por letra** pasadas las 8 en la palabra más larga (máx. 9), **+1,5 por tilde o ñ** (máx. 4,5), **+6 si es un verbo** (aparece conjugado en las frases) y **+7 si tiene trampa** (se confunde con otra o significa dos cosas: *piso*, *medias*, *cartera*). Hay además algunos ajustes a mano para casos que la regla no capta (por ejemplo *finde* o *che* son jerga pero muy fáciles: −25).

### Lo que se enseña: formas verbales (calculado por regla)

| Tiempo | Base |
|---|---|
| presente | 12 |
| futuro | 28 |
| imperfecto | 30 |
| condicional | 34 |
| pretérito indefinido | 44 |
| subjuntivo presente | 66 |

Persona: yo / él +0, nosotros / ustedes +3, vos +4. Si la forma se aparta de la regla: **+16**, y **+10 más** si casi no se parece al infinitivo (*fueron*, *tuve*, *dijeron*). Los verbos más usados (ser, estar, ir, tener, hacer) restan 6, porque se conocen aunque sean irregulares.

### Lo que se enseña: Gramática y Producción (escritas a mano)

Cada tema tiene un nivel base, del más simple al más complejo, con un pequeño ajuste por el largo de la consigna. En «Conjugación de verbos» pesa además el tiempo pedido (presente −15, subjuntivo +15). Las consignas de Producción se puntúan una por una.

| Tema | Ejercicios | Nivel (mín – prom – máx) |
|---|---|---|
| Presentarte: "Hola, soy… Encantada" | 8 | 4 – 6 – 8 |
| Pedir indicaciones y pedir ayuda | 9 | 12 – 14 – 16 |
| Ser vs. Estar | 6 | 22 – 23 – 25 |
| Comparativos y superlativos | 6 | 29 – 30 – 32 |
| Por vs. Para | 6 | 38 – 39 – 39 |
| Futuro simple | 6 | 39 – 40 – 40 |
| Condicional simple | 6 | 41 – 42 – 43 |
| Conjugación de verbos | 10 | 36 – 47 – 66 |
| Imperativo con vos | 6 | 49 – 50 – 51 |
| Pretérito compuesto vs. simple (uso rioplatense) | 6 | 55 – 56 – 56 |
| Pretérito vs. Imperfecto | 6 | 61 – 63 – 65 |
| Subjuntivo presente | 6 | 71 – 72 – 74 |
| Pronombres combinados (se lo, te la...) | 6 | 79 – 80 – 81 |

| Consigna de Producción | Nivel | Por qué |
|---|---|---|
| p1 | 70 | subjuntivo tras «espero que» |
| p2 | 68 | subjuntivo tras «ojalá» |
| p3 | 35 | pretérito regular |
| p4 | 40 | imperfecto de hábito |
| p5 | 72 | subjuntivo tras «no creo que» |
| p6 | 45 | condicional con «si tuviera» |
| p7 | 4 | fórmula «Encantada» |
| p8 | 4 | fórmula «Encantada» |
| p9 | 6 | fórmula «Encantada» |
| p10 | 12 | «¿Me podés ayudar?» |
| p11 | 15 | «seguir derecho» |
| p12 | 10 | «más despacio» |

### Lo que hay que hacer: esfuerzo del formato (0 a 100)

| Formato | Esfuerzo | Por qué |
|---|---|---|
| Significado | 10 | reconocer la traducción entre 4 opciones |
| Emparejar | 20 | reconocer, pero con 4 pares a la vez |
| Palabra (traducción → palabra) | 25 | reconocer la palabra en español entre 4 |
| Completar con opciones | 35 | entender la frase y elegir (con la traducción de pista) |
| Conjugar con opciones | 40 | elegir la forma entre otras formas del mismo verbo |
| Ordenar la frase | 42 a 66 | armar una frase; cuesta más cuanto más palabras tenga |
| Completar escribiendo | 65 (75 si hay que flexionar) | escribir la palabra de memoria |
| Conjugar escribiendo | 78 (86 si la tilde cuenta) | escribir la forma exacta de memoria |
| Gramática de opciones | 22 a 32 | elegir entre 2 a 4 opciones |
| Gramática / Producción escribiendo | 62 | escribir la respuesta |

## Cómo quedó el reparto

Hay **2978 ejercicios posibles** (1319 de vocabulario, 1560 de conjugación, 87 de gramática y 12 de producción). Puntaje mínimo 8, máximo 88, promedio 42.

```
  1-10  ██ 44
 11-20  ███████████████ 281
 21-30  ████████████████████████ 463
 31-40  ████████████████████████████████████████ 766
 41-50  ██████████████████████████████ 568
 51-60  ████████████████████████ 467
 61-70  █████████ 172
 71-80  █████████ 165
 81-90  ███ 52
 91-100  0
```

| Formato | Cantidad | Promedio | Mín – máx |
|---|---|---|---|
| vocab · significado | 229 | 22 | 8 – 51 |
| vocab · emparejar | 229 | 26 | 12 – 55 |
| vocab · termino | 229 | 28 | 14 – 57 |
| vocab · completar_opciones | 174 | 30 | 20 – 55 |
| gramatica · choice | 55 | 33 | 11 – 57 |
| vocab · ordenar | 229 | 39 | 20 – 67 |
| verbo · conjugar_opciones | 780 | 43 | 20 – 73 |
| vocab · completar_escribir | 229 | 44 | 31 – 77 |
| produccion · fill | 12 | 44 | 27 – 68 |
| gramatica · fill | 32 | 50 | 27 – 73 |
| verbo · conjugar_escribir | 780 | 58 | 35 – 88 |

## La misma palabra en distintos formatos

| Palabra | nivel | Significado | Palabra | Completar con opciones | Completar escribiendo | Ordenar la frase | Emparejar |
|---|---|---|---|---|---|---|---|
| la silla | 10 | 10 | 16 | 20 | 32 | 29 | 14 |
| la cuadra | 40 | 28 | 34 | — | 54 | 47 | 32 |
| la heladera | 40 | 28 | 34 | 38 | 50 | 43 | 32 |
| un quilombo | 60 | 40 | 46 | 50 | 62 | 61 | 44 |
| laburar | 58 | 39 | 45 | — | 65 | 58 | 43 |
| estar al pedo | 78 | 51 | 57 | — | 77 | 66 | 55 |

## Verbos: ejemplos (puntaje al escribir la forma)

| Verbo | Tiempo y persona | Forma | Nivel de la forma | Puntaje al elegir | Puntaje al escribir |
|---|---|---|---|---|---|
| hablar | presente, yo | hablo | 12 | 23 | 42 |
| hablar | presente, vos | hablás | 16 | 26 | 41 |
| comer | pretérito indefinido, el | comió | 44 | 42 | 58 |
| ser | presente, yo | soy | 32 | 35 | 50 |
| ir | pretérito indefinido, ustedes | fueron | 67 | 56 | 71 |
| tener | futuro, vos | tendrás | 42 | 41 | 56 |
| hacer | pretérito indefinido, yo | hice | 64 | 54 | 70 |
| hablar | subjuntivo presente, vos | hables | 70 | 58 | 73 |
| tener | subjuntivo presente, vos | tengas | 80 | 64 | 79 |
| pedir | pretérito indefinido, el | pidió | 70 | 58 | 73 |

## Las 229 palabras, de la más fácil a la más difícil

Si algún número no te convence, se puede cambiar a mano en `data/vocab.data.js` (campo `nivel`) o en `dev/puntuar.js` y volver a correr la herramienta.

| Nivel | Palabra | Tema | Por qué |
|---|---|---|---|
| 6 | Hola, soy… | saludos | saludo/fórmula 6, -6 ajuste, +6 2 palabras |
| 8 | Encantada | saludos | saludo/fórmula 6, +1.5 palabra larga |
| 8 | te presento a… | saludos | saludo/fórmula 6, -6 ajuste, +8 3 palabras |
| 10 | cerca (de) | indicaciones | básica 10 |
| 10 | disculpe / perdón | indicaciones | básica 10 |
| 10 | el arroz | comida | básica 10 |
| 10 | el brazo | cuerpo | básica 10 |
| 10 | el cuchillo | cocina | básica 10 |
| 10 | el dedo | cuerpo | básica 10 |
| 10 | el desayuno | comida | básica 10 |
| 10 | el diente | cuerpo | básica 10 |
| 10 | el huevo | comida | básica 10 |
| 10 | el ojo | cuerpo | básica 10 |
| 10 | el pan | comida | básica 10 |
| 10 | el pelo | cuerpo | básica 10 |
| 10 | el pollo | comida | básica 10 |
| 10 | el queso | comida | básica 10 |
| 10 | el reloj | accesorios | básica 10 |
| 10 | el tenedor | cocina | básica 10 |
| 10 | el vaso | cocina | básica 10 |
| 10 | el vestido | ropa | básica 10 |
| 10 | la boca | cuerpo | básica 10 |
| 10 | la cabeza | cuerpo | básica 10 |
| 10 | la calle | lugares | básica 10 |
| 10 | la cama | muebles | básica 10 |
| 10 | la camisa | ropa | básica 10 |
| 10 | la cara | cuerpo | básica 10 |
| 10 | la cuchara | cocina | básica 10 |
| 10 | la esquina | lugares | básica 10 |
| 10 | la leche | comida | básica 10 |
| 10 | la llave | hotel | básica 10 |
| 10 | la mano | cuerpo | básica 10 |
| 10 | la mesa | muebles | básica 10 |
| 10 | la nariz | cuerpo | básica 10 |
| 10 | la oreja | cuerpo | básica 10 |
| 10 | la pared | casa | básica 10 |
| 10 | la plaza | lugares | básica 10 |
| 10 | la puerta | casa | básica 10 |
| 10 | la sal | comida | básica 10 |
| 10 | la silla | muebles | básica 10 |
| 10 | la ventana | casa | básica 10 |
| 10 | lejos (de) | indicaciones | básica 10 |
| 10 | los zapatos | ropa | básica 10 |
| 10 | perdido/a | indicaciones | básica 10 |
| 11 | ¿Cómo te llamás? | saludos | saludo/fórmula 6, -6 ajuste, +8 3 palabras, +3 tilde/ñ |
| 12 | el baño | casa | básica 10, +1.5 tilde/ñ |
| 12 | el corazón | cuerpo | básica 10, +1.5 tilde/ñ |
| 12 | el pantalón | ropa | básica 10, +1.5 tilde/ñ |
| 14 | el check-in | hotel | estándar 22, -8 ajuste |
| 14 | el check-out | hotel | estándar 22, -8 ajuste |
| 14 | el jean | ropa | estándar 22, -8 ajuste |
| 14 | el minibar | hotel | estándar 22, -8 ajuste |
| 14 | el monitor | tecnologia | estándar 22, -8 ajuste |
| 14 | el mouse | tecnologia | estándar 22, -8 ajuste |
| 14 | el pijama | ropa | estándar 22, -8 ajuste |
| 14 | el short | ropa | estándar 22, -8 ajuste |
| 16 | el pasaporte | hotel | estándar 22, -8 ajuste, +1.5 palabra larga |
| 16 | el sofá | muebles | estándar 22, -8 ajuste, +1.5 tilde/ñ |
| 16 | la lámpara | muebles | estándar 22, -8 ajuste, +1.5 tilde/ñ |
| 16 | las sandalias | ropa | estándar 22, -8 ajuste, +1.5 palabra larga |
| 17 | el microondas | cocina | estándar 22, -8 ajuste, +3 palabra larga |
| 17 | el pie | cuerpo | básica 10, +7 trampa |
| 17 | el piso | casa | básica 10, +7 trampa |
| 17 | el plato | cocina | básica 10, +7 trampa |
| 17 | la cocina | casa | básica 10, +7 trampa |
| 17 | la manzana | comida | básica 10, +7 trampa |
| 17 | la pierna | cuerpo | básica 10, +7 trampa |
| 18 | la reserva | hotel | estándar 22, -4 ajuste |
| 20 | ¿me podés ayudar? | indicaciones | básica 10, +8 3 palabras, +1.5 tilde/ñ |
| 20 | el semáforo | lugares | estándar 22, -4 ajuste, +1.5 tilde/ñ |
| 21 | la recepción | hotel | estándar 22, -4 ajuste, +1.5 palabra larga, +1.5 tilde/ñ |
| 22 | el anillo | accesorios | estándar 22 |
| 22 | el armario | muebles | estándar 22 |
| 22 | el ascensor | hotel | estándar 22 |
| 22 | el bolso | accesorios | estándar 22 |
| 22 | el botones | hotel | estándar 22 |
| 22 | el cargador | tecnologia | estándar 22 |
| 22 | el collar | accesorios | estándar 22 |
| 22 | el cuello | cuerpo | estándar 22 |
| 22 | el enchufe | tecnologia | estándar 22 |
| 22 | el equipaje | hotel | estándar 22 |
| 22 | el espejo | muebles | estándar 22 |
| 22 | el estante | muebles | estándar 22 |
| 22 | el feriado | tiempo_libre | estándar 22 |
| 22 | el gorro | accesorios | estándar 22 |
| 22 | el horno | cocina | estándar 22 |
| 22 | el kiosco | lugares | estándar 22 |
| 22 | el paraguas | accesorios | estándar 22 |
| 22 | el pasillo | casa | estándar 22 |
| 22 | el sombrero | accesorios | estándar 22 |
| 22 | el techo | casa | estándar 22 |
| 22 | el teclado | tecnologia | estándar 22 |
| 22 | el termo | cocina | estándar 22 |
| 22 | el tipo | personas | estándar 22 |
| 22 | el traje | ropa | estándar 22 |
| 22 | el trapo | limpieza | estándar 22 |
| 22 | el/la conserje | hotel | estándar 22 |
| 22 | la alfombra | muebles | estándar 22 |
| 22 | la bufanda | accesorios | estándar 22 |
| 22 | la corbata | accesorios | estándar 22 |
| 22 | la ducha | limpieza | estándar 22 |
| 22 | la escoba | limpieza | estándar 22 |
| 22 | la farmacia | lugares | estándar 22 |
| 22 | la gorra | accesorios | estándar 22 |
| 22 | la mochila | accesorios | estándar 22 |
| 22 | la olla | cocina | estándar 22 |
| 22 | la pantalla | tecnologia | estándar 22 |
| 22 | la piscina | hotel | estándar 22 |
| 22 | la propina | hotel | estándar 22 |
| 22 | la pulsera | accesorios | estándar 22 |
| 22 | la taza | cocina | estándar 22 |
| 22 | la toalla | limpieza | estándar 22 |
| 22 | la vista | hotel | estándar 22 |
| 22 | las botas | ropa | estándar 22 |
| 22 | los fideos | comida | estándar 22 |
| 22 | los guantes | accesorios | estándar 22 |
| 22 | tremendo/a | elogios | estándar 22 |
| 24 | el azúcar | comida | estándar 22, +1.5 tilde/ñ |
| 24 | el cajón | muebles | estándar 22, +1.5 tilde/ñ |
| 24 | el cinturón | accesorios | estándar 22, +1.5 tilde/ñ |
| 24 | el huésped | hotel | estándar 22, +1.5 tilde/ñ |
| 24 | el jabón | limpieza | estándar 22, +1.5 tilde/ñ |
| 24 | el pulóver | ropa | estándar 22, +1.5 tilde/ñ |
| 24 | la billetera | accesorios | estándar 22, +1.5 palabra larga |
| 24 | la impresora | tecnologia | estándar 22, +1.5 palabra larga |
| 24 | la sartén | cocina | estándar 22, +1.5 tilde/ñ |
| 24 | la uña | cuerpo | estándar 22, +1.5 tilde/ñ |
| 25 | el codo | cuerpo | estándar 22, +3 ajuste |
| 25 | el escritorio | muebles | estándar 22, +3 palabra larga |
| 25 | el hombro | cuerpo | estándar 22, +3 ajuste |
| 25 | el pecho | cuerpo | estándar 22, +3 ajuste |
| 25 | el tobillo | cuerpo | estándar 22, +3 ajuste |
| 25 | la cintura | cuerpo | estándar 22, +3 ajuste |
| 25 | la espalda | cuerpo | estándar 22, +3 ajuste |
| 25 | la frente | cuerpo | estándar 22, +3 ajuste |
| 25 | la garganta | cuerpo | estándar 22, +3 ajuste |
| 25 | la panadería | lugares | estándar 22, +1.5 palabra larga, +1.5 tilde/ñ |
| 25 | la rodilla | cuerpo | estándar 22, +3 ajuste |
| 25 | la servilleta | cocina | estándar 22, +3 palabra larga |
| 27 | la habitación | hotel | estándar 22, +3 palabra larga, +1.5 tilde/ñ |
| 27 | los auriculares | tecnologia | estándar 22, +4.5 palabra larga |
| 28 | doblar | indicaciones | estándar 22, +6 verbo |
| 28 | el control remoto | tecnologia | estándar 22, +6 2 palabras |
| 28 | la ropa interior | ropa | estándar 22, +6 2 palabras |
| 29 | la lengua | cuerpo | estándar 22, +7 trampa |
| 29 | seguir derecho | indicaciones | estándar 22, -12 ajuste, +6 2 palabras, +6 verbo, +7 trampa |
| 30 | ¿dónde queda…? | indicaciones | estándar 22, +6 2 palabras, +1.5 tilde/ñ |
| 30 | el cepillo de dientes | limpieza | estándar 22, +8 3 palabras |
| 31 | el estacionamiento | hotel | estándar 22, +9 palabra larga |
| 31 | el pañuelo | accesorios | estándar 22, +1.5 tilde/ñ, +7 trampa |
| 31 | el papel higiénico | limpieza | estándar 22, +6 2 palabras, +1.5 palabra larga, +1.5 tilde/ñ |
| 35 | che | jerga_expresiones | jerga 60, -25 ajuste |
| 35 | el finde | tiempo_libre | jerga 60, -25 ajuste |
| 35 | tranqui | jerga_expresiones | jerga 60, -25 ajuste |
| 40 | el asado | comida | variante argentina 40 |
| 40 | el celular | tecnologia | variante argentina 40 |
| 40 | el living | casa | variante argentina 40 |
| 40 | el mate | comida | variante argentina 40 |
| 40 | el subte | transporte | variante argentina 40 |
| 40 | la calza | ropa | variante argentina 40 |
| 40 | la campera | ropa | variante argentina 40 |
| 40 | la canilla | cocina | variante argentina 40 |
| 40 | la cuadra | indicaciones | variante argentina 40 |
| 40 | la frutilla | comida | variante argentina 40 |
| 40 | la heladera | cocina | variante argentina 40 |
| 40 | la malla | ropa | variante argentina 40 |
| 40 | la palta | comida | variante argentina 40 |
| 40 | la panza | cuerpo | variante argentina 40 |
| 40 | la pileta | hotel | variante argentina 40 |
| 40 | la pollera | ropa | variante argentina 40 |
| 40 | la remera | ropa | variante argentina 40 |
| 40 | la valija | hotel | variante argentina 40 |
| 40 | la vereda | lugares | variante argentina 40 |
| 40 | las ojotas | ropa | variante argentina 40 |
| 40 | los anteojos | accesorios | variante argentina 40 |
| 40 | los aros | accesorios | variante argentina 40 |
| 42 | el colectivo | transporte | variante argentina 40, +1.5 palabra larga |
| 42 | la riñonera | accesorios | variante argentina 40, +1.5 tilde/ñ |
| 43 | el lavarropas | limpieza | variante argentina 40, +3 palabra larga |
| 43 | las zapatillas | ropa | variante argentina 40, +3 palabra larga |
| 45 | el remis | transporte | variante argentina 40, +5 ajuste |
| 45 | la bombilla | cocina | variante argentina 40, +5 ajuste |
| 45 | la computadora | tecnologia | variante argentina 40, +4.5 palabra larga |
| 45 | los viejos | personas | variante argentina 40, +5 ajuste |
| 45 | re (+ adjetivo) | jerga_expresiones | jerga 60, -15 ajuste |
| 45 | una birra | comida | variante argentina 40, +5 ajuste |
| 46 | el departamento | casa | variante argentina 40, +6 palabra larga |
| 47 | el buzo | ropa | variante argentina 40, +7 trampa |
| 47 | el changuito | lugares | variante argentina 40, +5 ajuste, +1.5 palabra larga |
| 47 | el saco | ropa | variante argentina 40, +7 trampa |
| 47 | la cartera | accesorios | variante argentina 40, +7 trampa |
| 47 | las medias | ropa | variante argentina 40, +7 trampa |
| 48 | el tacho de basura | limpieza | variante argentina 40, +8 3 palabras |
| 48 | los lentes de sol | accesorios | variante argentina 40, +8 3 palabras |
| 50 | el boliche | tiempo_libre | jerga 60, -10 ajuste |
| 50 | el laburo | jerga_cosas | jerga 60, -10 ajuste |
| 50 | las facturas | comida | variante argentina 40, +10 ajuste |
| 55 | el bondi | transporte | jerga 60, -5 ajuste |
| 55 | la previa | tiempo_libre | jerga 60, -5 ajuste |
| 55 | posta | jerga_expresiones | jerga 60, -5 ajuste |
| 57 | el pibe / la piba | personas | jerga 60, -3 ajuste |
| 58 | copado/a | elogios | jerga 60, -2 ajuste |
| 58 | la guita | jerga_cosas | jerga 60, -2 ajuste |
| 58 | laburar | jerga_verbos | jerga 60, -8 ajuste, +6 verbo |
| 60 | gil/a | personas | jerga 60 |
| 60 | la mina | personas | jerga 60 |
| 60 | un pucho | jerga_cosas | jerga 60 |
| 60 | un quilombo | jerga_cosas | jerga 60 |
| 62 | groso/a | elogios | jerga 60, +2 ajuste |
| 62 | hacer sobremesa | tiempo_libre | variante argentina 40, +8 ajuste, +6 2 palabras, +1.5 palabra larga, +6 verbo |
| 62 | morfar | jerga_verbos | jerga 60, -4 ajuste, +6 verbo |
| 62 | un embole | jerga_cosas | jerga 60, +2 ajuste |
| 62 | una changa | jerga_cosas | jerga 60, +2 ajuste |
| 64 | el chabón / la chabona | personas | jerga 60, +2 ajuste, +1.5 tilde/ñ |
| 66 | atorrante | personas | jerga 60, +4 ajuste, +1.5 palabra larga |
| 66 | boludo/a | personas | jerga 60, +6 ajuste |
| 66 | tener facha | elogios | jerga 60, -6 ajuste, +6 2 palabras, +6 verbo |
| 66 | un bardo | jerga_cosas | jerga 60, +6 ajuste |
| 66 | un mango | jerga_cosas | jerga 60, +6 ajuste |
| 66 | zarpado/a | elogios | jerga 60, +6 ajuste |
| 68 | bancar | jerga_verbos | jerga 60, +2 ajuste, +6 verbo |
| 68 | rajar(se) | jerga_verbos | jerga 60, +2 ajuste, +6 verbo |
| 68 | un curro | jerga_cosas | jerga 60, +8 ajuste |
| 68 | una bocha de | jerga_cosas | jerga 60, +2 ajuste, +6 2 palabras |
| 70 | ser un capo | elogios | jerga 60, -4 ajuste, +8 3 palabras, +6 verbo |
| 74 | bardear | jerga_verbos | jerga 60, +8 ajuste, +6 verbo |
| 74 | chamuyar | jerga_verbos | jerga 60, +8 ajuste, +6 verbo |
| 76 | dar bola | jerga_verbos | jerga 60, +4 ajuste, +6 2 palabras, +6 verbo |
| 78 | estar al pedo | jerga_verbos | jerga 60, +4 ajuste, +8 3 palabras, +6 verbo |
