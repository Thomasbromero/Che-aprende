/* Producción controlada: consignas que se pueden autocorregir.
   Campos:
   - prompt: consigna con ___ donde va la respuesta
   - accept: lista de respuestas válidas (la corrección ignora mayúsculas y acentos)
   - answer: forma correcta (bien acentuada) que se muestra
   - hint: pista opcional
   - explain: explicación que aparece al corregir
*/
window.PRODUCCION = [
  { id: "p1", prompt: "Espero que vos ___ mañana. (venir)", accept: ["vengas", "vengás"], answer: "vengas", hint: "Subjuntivo presente, 2ª persona (vos).", explain: "Después de 'espero que' va subjuntivo: vengas." },
  { id: "p2", prompt: "Ojalá que ___ buen tiempo el finde. (hacer)", accept: ["haga"], answer: "haga", hint: "Subjuntivo, 3ª persona.", explain: "'Ojalá que' pide subjuntivo: haga." },
  { id: "p3", prompt: "Ayer (yo) ___ un asado con la familia. (comer)", accept: ["comi"], answer: "comí", hint: "Pretérito perfecto simple, 1ª persona.", explain: "Acción terminada en el pasado → comí (con tilde)." },
  { id: "p4", prompt: "Cuando era chica, (yo) ___ en la plaza todos los días. (jugar)", accept: ["jugaba"], answer: "jugaba", hint: "Imperfecto (hábito en el pasado).", explain: "Costumbre repetida en el pasado → imperfecto: jugaba." },
  { id: "p5", prompt: "No creo que vos ___ razón esta vez. (tener)", accept: ["tengas", "tengás"], answer: "tengas", hint: "Subjuntivo tras 'no creo que'.", explain: "La duda / negación de creencia pide subjuntivo: tengas." },
  { id: "p6", prompt: "Si tuviera plata, (yo) ___ por todo el país. (viajar)", accept: ["viajaria"], answer: "viajaría", hint: "Condicional simple.", explain: "Hipótesis: 'si tuviera... viajaría' (condicional)." },
  { id: "p7", prompt: "Te preguntan tu nombre en una fiesta: \"Me llamo Vivi. ___.\"", accept: ["encantada"], answer: "Encantada", hint: "Una sola palabra, la de siempre.", explain: "La fórmula fija al conocer a alguien: nombre + Encantada." },
  { id: "p8", prompt: "Te presentan a un grupo de gente nueva. Los saludás con: \"___.\"", accept: ["encantada"], answer: "Encantada", hint: "No cambia aunque sean muchos.", explain: "'Encantada' no cambia por la cantidad ni por el género de los otros." },
  { id: "p9", prompt: "—Te presento a mi hermano Fede. —Hola, soy Kata, ___.", accept: ["encantada"], answer: "encantada", hint: "Concuerda con vos, no con él.", explain: "Aunque él sea varón, vos decís 'encantada': concuerda con quien habla." },
  { id: "p10", prompt: "Estás perdida y le pedís ayuda a alguien en la calle: \"¿Me podés ___?\" (ayudar)", accept: ["ayudar"], answer: "ayudar", hint: "Verbo en infinitivo, después de 'podés'.", explain: "Podés + infinitivo: ayudar." },
  { id: "p11", prompt: "Alguien te explica el camino: \"Seguí ___ dos cuadras y doblá a la derecha.\" (en línea recta)", accept: ["derecho"], answer: "derecho", hint: "No es 'derecha': es el adverbio.", explain: "'Derecho' = en línea recta, sin doblar." },
  { id: "p12", prompt: "No entendiste la explicación porque te hablaron muy rápido. Pedís: \"Más ___, por favor.\"", accept: ["despacio"], answer: "despacio", hint: "Lo opuesto de rápido.", explain: "'Despacio' se pide cuando alguien habla muy rápido para vos." }
];
