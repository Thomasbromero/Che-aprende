/* Gramática: temas con explicación breve y ejercicios autocorregidos.
   Tipos de ejercicio:
   - "choice": prompt con ___, options: [...], answer: "texto exacto de la opción correcta"
   - "fill":   prompt con ___, accept: [respuestas válidas], answer: "forma correcta a mostrar"
   Cada ejercicio puede tener "explain" (se muestra tras responder).
*/
window.GRAMMAR = [
  {
    id: "ser-estar",
    title: "Ser vs. Estar",
    explain: "SER → identidad, características esenciales, origen, profesión, hora y fecha. ESTAR → estados y situaciones que cambian, ubicación, resultado. Pista en húngaro: a magyar 'van' mindkettőt jelenti, a spanyol viszont megkülönbözteti. Ojo con el voseo: vos SOS / vos ESTÁS.",
    examples: [
      "Ella es arquitecta. (profesión → ser)",
      "El café está frío. (estado → estar)",
      "Vos sos de Hungría. (origen → ser)",
      "La plaza está a dos cuadras. (ubicación → estar)"
    ],
    exercises: [
      { type: "choice", prompt: "Buenos Aires ___ en Argentina.", options: ["es", "está"], answer: "está", explain: "Ubicación geográfica → estar." },
      { type: "choice", prompt: "Hoy ___ martes.", options: ["es", "está"], answer: "es", explain: "Día / fecha → ser." },
      { type: "choice", prompt: "El café ya ___ frío, no lo tomo.", options: ["es", "está"], answer: "está", explain: "Estado que cambió → estar." },
      { type: "choice", prompt: "Vos ___ muy inteligente.", options: ["sos", "estás"], answer: "sos", explain: "Característica → ser. En voseo: vos SOS." },
      { type: "choice", prompt: "Los chicos ___ cansados después del partido.", options: ["son", "están"], answer: "están", explain: "Estado físico → estar." },
      { type: "fill", prompt: "¿De dónde ___ vos? (ser)", accept: ["sos"], answer: "sos", explain: "Origen → ser, en voseo: vos SOS." }
    ]
  },
  {
    id: "por-para",
    title: "Por vs. Para",
    explain: "POR → causa, motivo, medio, 'a través de', duración, 'a cambio de'. PARA → destino, finalidad (para + infinitivo), plazo, destinatario. Pista en húngaro: PARA ≈ cél/cím ('-nak/-nek', '-ért' mint cél), POR ≈ ok/eszköz ('miatt', 'által', csere).",
    examples: [
      "Este regalo es para vos. (destinatario → para)",
      "Gracias por la ayuda. (motivo → por)",
      "Estudio para aprobar. (finalidad → para)",
      "Vinimos por la autopista. (a través de → por)"
    ],
    exercises: [
      { type: "choice", prompt: "Este mate es ___ vos.", options: ["por", "para"], answer: "para", explain: "Destinatario → para." },
      { type: "choice", prompt: "Caminamos ___ el parque hasta el río.", options: ["por", "para"], answer: "por", explain: "A través de un lugar → por." },
      { type: "choice", prompt: "Estudio español ___ hablar con mi familia.", options: ["por", "para"], answer: "para", explain: "Finalidad (para + infinitivo) → para." },
      { type: "choice", prompt: "Te llamo ___ teléfono más tarde.", options: ["por", "para"], answer: "por", explain: "Medio → por." },
      { type: "choice", prompt: "Necesito el informe ___ el lunes.", options: ["por", "para"], answer: "para", explain: "Plazo / fecha límite → para." },
      { type: "choice", prompt: "Gracias ___ todo lo que hiciste.", options: ["por", "para"], answer: "por", explain: "Motivo → por." }
    ]
  },
  {
    id: "preterito-imperfecto",
    title: "Pretérito vs. Imperfecto",
    explain: "El PRETÉRITO cuenta hechos puntuales y terminados (qué pasó). El IMPERFECTO describe el marco: costumbres, descripciones, o una acción en curso interrumpida por otra. Frase clave: 'Estaba cocinando cuando sonó el teléfono' → imperfecto (acción en curso) + pretérito (lo que interrumpe). Ojo: algunos verbos cambian de sentido según el tiempo: CONOCER (imperfecto = ya lo conocía; pretérito = lo conocí = lo vi por primera vez), PODER (imperfecto = tenía la capacidad; pretérito negativo = lo intenté y no lo logré), QUERER (pretérito = lo intenté, o 'no quise' = me negué). Pista en húngaro: a magyarban nincs ilyen éles megkülönböztetés — gondolj az imperfecto-ra mint 'háttér' (leírás, szokás) és a pretérito-ra mint 'esemény' (ami történt).",
    examples: [
      "Cuando era chica, vivía en Budapest. (imperfecto: descripción/hábito)",
      "Ayer vivimos una experiencia increíble en el teatro. (pretérito: hecho puntual)",
      "Estaba durmiendo cuando llegaste. (imperfecto + pretérito: acción interrumpida)",
      "Conocí a tu hermano en la fiesta. (pretérito conocer = lo vi por primera vez)",
      "No pude terminar el examen a tiempo. (pretérito poder = lo intenté y fallé)"
    ],
    exercises: [
      { type: "choice", prompt: "De chica, (yo) ___ al ballet todos los sábados. (ir)", options: ["fui", "iba"], answer: "iba", explain: "Costumbre repetida en el pasado → imperfecto." },
      { type: "choice", prompt: "Anoche (nosotros) ___ una película buenísima. (ver)", options: ["veíamos", "vimos"], answer: "vimos", explain: "Hecho puntual y terminado → pretérito." },
      { type: "choice", prompt: "___ (yo) a tu prima en el cumpleaños de Fede. (conocer)", options: ["Conocía", "Conocí"], answer: "Conocí", explain: "'Conocer' en pretérito = la vi por primera vez (evento puntual)." },
      { type: "choice", prompt: "Ya ___ a tu prima de antes, por eso no me sorprendió verla. (conocer)", options: ["conocía", "conocí"], answer: "conocía", explain: "'Conocer' en imperfecto = ya la conocía de antes (estado)." },
      { type: "fill", prompt: "Mientras vos ___ (hablar), yo preparaba el mate.", accept: ["hablabas"], answer: "hablabas", explain: "Acción en curso, marco de fondo → imperfecto." },
      { type: "choice", prompt: "Lo intenté mil veces pero no ___ abrir el frasco. (poder)", options: ["podía", "pude"], answer: "pude", explain: "'Poder' en pretérito (negativo) = lo intentó y no lo logró." }
    ]
  },
  {
    id: "subjuntivo-presente",
    title: "Subjuntivo presente",
    explain: "El SUBJUNTIVO aparece en la cláusula con 'que' cuando la oración principal expresa deseo, duda, emoción, petición o negación de un hecho (no describe hechos objetivos, sino lo deseado/dudoso/valorado). Disparadores típicos: querer que, esperar que, ojalá que, es importante que, no creo que, dudo que, me alegra que, es una lástima que. Formación regular: tomá la forma 'yo' del presente indicativo, sacale la -o, y agregá las terminaciones opuestas (-AR → e/es/e/emos/en; -ER/-IR → a/as/a/amos/an). Pista en húngaro: a magyarban a mindennapi beszédben nincs külön kötőmód, ezért ez az egyik legnehezebb rész — figyeld a 'hogy' utáni mondatokat: ha bizonytalanságot, vágyat vagy érzelmet fejeznek ki, ott jön a subjuntivo.",
    examples: [
      "Quiero que vengas a casa el domingo.",
      "Ojalá que no llueva mañana.",
      "Dudo que ella sepa la verdad.",
      "Me alegra que estés acá.",
      "Es importante que estudies para el parcial."
    ],
    exercises: [
      { type: "choice", prompt: "Espero que (vos) ___ pronto. (mejorar)", options: ["mejorás", "mejores"], answer: "mejores", explain: "'Espero que' pide subjuntivo: mejores." },
      { type: "choice", prompt: "Dudo que ellos ___ la verdad. (decir)", options: ["dicen", "digan"], answer: "digan", explain: "Duda → subjuntivo: digan." },
      { type: "fill", prompt: "Ojalá que (nosotros) ___ tiempo para viajar este verano. (tener)", accept: ["tengamos"], answer: "tengamos", explain: "'Ojalá que' + subjuntivo: tengamos." },
      { type: "choice", prompt: "Me alegra que ella ___ contenta con el trabajo nuevo. (estar)", options: ["está", "esté"], answer: "esté", explain: "Emoción ('me alegra que') → subjuntivo: esté." },
      { type: "choice", prompt: "No creo que ___ (vos) razón esta vez. (tener)", options: ["tenés", "tengas"], answer: "tengas", explain: "Negación de certeza → subjuntivo: tengas." },
      { type: "fill", prompt: "Es una lástima que no ___ (ellos) venir a la fiesta. (poder)", accept: ["puedan"], answer: "puedan", explain: "Valoración ('es una lástima que') → subjuntivo: puedan." }
    ]
  },
  {
    id: "imperativo-vos",
    title: "Imperativo con vos",
    explain: "En Argentina, el imperativo afirmativo de 'vos' se forma sacando la -R final del infinitivo y poniendo tilde en la última vocal: hablar → hablá, comer → comé, venir → vení. Es distinto del imperativo de 'tú' que enseñan la mayoría de los libros (habla, come, ven) — ¡no te confundas si estudiaste con material de España o México! El imperativo negativo usa el subjuntivo de 'vos' (igual que con 'tú'): no hables, no comas, no vengas. Irregulares comunes en afirmativo: ir → andá, ser → sé, decir → decí, poner → poné, salir → salí, tener → tené, venir → vení, hacer → hacé. Pista en húngaro: gondolj rá úgy, hogy a bizalmas felszólító mód (vos) egyszerűen az infinitivo -r végződésének elhagyása + ékezet az utolsó magánhangzón — ez rioplatense sajátosság, más spanyol nyelvterületeken nem így van.",
    examples: [
      "¡Vení acá, dale!",
      "Hablá más fuerte, no te escucho.",
      "No hables con la boca llena.",
      "Andá a comprar pan, por favor.",
      "Decime la verdad."
    ],
    exercises: [
      { type: "choice", prompt: "___ (vos) la puerta, por favor. (cerrar)", options: ["Cerrá", "Cierra"], answer: "Cerrá", explain: "Imperativo de vos: infinitivo sin -r + tilde → cerrá." },
      { type: "choice", prompt: "No le ___ (vos) nada a tu hermano todavía. (decir)", options: ["digas", "decí"], answer: "digas", explain: "Imperativo negativo de vos = subjuntivo: no digas." },
      { type: "fill", prompt: "___ (vos) a Fede que llegamos tarde. (avisarle)", accept: ["avisale"], answer: "Avisale", explain: "Imperativo de vos + pronombre enclítico: avisarle → avisale (se saca la r final)." },
      { type: "choice", prompt: "___ (vos) más despacio, por favor. (venir)", options: ["Vení", "Ven"], answer: "Vení", explain: "'Ven' es de tú; en voseo rioplatense es Vení." },
      { type: "choice", prompt: "No ___ (vos) tan tarde esta noche. (salir)", options: ["salgas", "salí"], answer: "salgas", explain: "Imperativo negativo → subjuntivo: no salgas." },
      { type: "fill", prompt: "___ (vos) la mesa antes de que lleguen. (poner)", accept: ["pone"], answer: "Poné", explain: "Imperativo de vos irregular: poné." }
    ]
  },
  {
    id: "pronombres-combinados",
    title: "Pronombres combinados (se lo, te la...)",
    explain: "Cuando en una misma oración aparecen un pronombre de objeto indirecto (me, te, le, nos, les) y uno de objeto directo (lo, la, los, las), el indirecto va primero. Pero ojo: LE y LES se transforman en SE cuando van seguidos de LO, LA, LOS o LAS (para evitar el choque 'le lo'). Ejemplo: 'Le doy el libro a ella' → 'Se lo doy' (nunca 'le lo doy'). Orden: se/me/te/nos/les + lo/la/los/las + verbo. Con el imperativo afirmativo de vos, los pronombres se pegan al final: 'Dáselo' (dá + se + lo). Pista en húngaro: a magyarban nincs ilyen névmás-összevonás, minden névmás külön szó marad — itt viszont a LE mindig SE-vé válik LO/LA előtt, ez egy fix szabály, tanuld meg kívülről.",
    examples: [
      "¿Le diste el regalo a tu mamá? —Sí, se lo di ayer.",
      "¿Me prestás la bici? —Dale, te la presto.",
      "No se lo cuentes a nadie.",
      "Pasámelo, por favor. (pasar + me + lo)",
      "Se las mandé por mail. (las cartas)"
    ],
    exercises: [
      { type: "choice", prompt: "¿Le diste las llaves a Juan? —Sí, ___ di esta mañana.", options: ["se las", "le las"], answer: "se las", explain: "LE + LAS se transforma en SE LAS (nunca 'le las')." },
      { type: "fill", prompt: "¿Me pasás la sal? —Sí, ahora ___ paso. (pasar)", accept: ["te la"], answer: "te la", explain: "Objeto indirecto (te) + objeto directo (la): te la paso." },
      { type: "choice", prompt: "No quiero que ___ digas a nadie este secreto.", options: ["se lo", "le lo"], answer: "se lo", explain: "'Le' se convierte en 'se' antes de 'lo': se lo, nunca le lo." },
      { type: "fill", prompt: "Vení, ___ explico de nuevo. (explicar)", accept: ["te lo"], answer: "te lo", explain: "Objeto indirecto (te) + objeto directo (lo): te lo explico." },
      { type: "choice", prompt: "Dale, ___ prestás la campera a ella.", options: ["se la", "le la"], answer: "se la", explain: "Le + la → se la, siempre." },
      { type: "fill", prompt: "¡Contámelo! Quiero que ___ cuentes ya. (contar)", accept: ["me lo"], answer: "me lo", explain: "Objeto indirecto (me) + objeto directo (lo): me lo cuentes." }
    ]
  }
];
