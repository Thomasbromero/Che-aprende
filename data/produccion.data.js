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
  { id: "p6", prompt: "Si tuviera plata, (yo) ___ por todo el país. (viajar)", accept: ["viajaria"], answer: "viajaría", hint: "Condicional simple.", explain: "Hipótesis: 'si tuviera... viajaría' (condicional)." }
];
