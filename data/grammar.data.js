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
  },
  {
    id: "futuro-simple",
    title: "Futuro simple",
    explain: "El FUTURO SIMPLE se forma agregando las terminaciones -é, -ás, -á, -emos, -án directamente al INFINITIVO (sin sacar nada), igual para las tres conjugaciones: hablar → hablaré, comer → comerás, vivir → vivirá. Algunos verbos son irregulares en la raíz pero mantienen las mismas terminaciones: tener → tendré, poder → podré, saber → sabré, hacer → haré, decir → diré, poner → pondré, salir → saldré, venir → vendré. En el habla cotidiana rioplatense, para el futuro cercano se usa más 'ir a + infinitivo' (voy a comer) que el futuro simple; este último suena más formal o se usa para promesas y predicciones. Pista en húngaro: a jövő idő itt egyszerűen az infinitivo végéhez ragasztott végződésekkel készül (nem kell a szótövet levágni), a rendhagyóság csak a tövet érinti, a végződések mindig ugyanazok.",
    examples: [
      "Mañana hablaré con el jefe. (promesa/plan)",
      "El año que viene tendremos más tiempo libre.",
      "¿Vendrás a la fiesta el sábado?",
      "Va a llover esta tarde. (futuro cercano, más común en el habla diaria)"
    ],
    exercises: [
      { type: "choice", prompt: "Mañana (yo) ___ con vos sobre el proyecto. (hablar)", options: ["hablaré", "hablo"], answer: "hablaré", explain: "Acción planeada para el futuro → futuro simple: hablaré." },
      { type: "choice", prompt: "El año que viene (nosotros) ___ más plata. (tener)", options: ["tendremos", "teneremos"], answer: "tendremos", explain: "'Tener' es irregular en futuro: tendremos (no 'teneremos')." },
      { type: "fill", prompt: "¿A qué hora ___ (vos) mañana? (venir)", accept: ["vendras"], answer: "vendrás", explain: "'Venir' es irregular en futuro: vendrás." },
      { type: "choice", prompt: "Ellos ___ la verdad tarde o temprano. (saber)", options: ["saberán", "sabrán"], answer: "sabrán", explain: "'Saber' es irregular en futuro: sabrán (no 'saberán')." },
      { type: "choice", prompt: "___ (yo) todo lo posible para ayudarte. (hacer)", options: ["Haré", "Haceré"], answer: "Haré", explain: "'Hacer' es irregular en futuro: haré (no 'haceré')." },
      { type: "fill", prompt: "Ella ___ el examen sin problemas. (aprobar)", accept: ["aprobara"], answer: "aprobará", explain: "Verbo regular en futuro: aprobará." }
    ]
  },
  {
    id: "condicional-simple",
    title: "Condicional simple",
    explain: "El CONDICIONAL SIMPLE se forma agregando las terminaciones -ía, -ías, -ía, -íamos, -ían al INFINITIVO, usando la misma raíz irregular que el futuro cuando la hay: hablar → hablaría, tener → tendría, poder → podría, saber → sabría, hacer → haría, poner → pondría, venir → vendría, decir → diría. Se usa para hipótesis ('si tuviera plata, viajaría'), pedidos corteses ('¿podrías ayudarme?') y consejos ('yo que vos, iría'). Pista en húngaro: a feltételes mód ugyanazt a rendhagyó tövet használja, mint a jövő idő, csak más végződésekkel — ha tudod a jövő idő rendhagyó alakját, könnyen levezeted belőle a feltételes módot is.",
    examples: [
      "Si tuviera tiempo, iría al cine.",
      "¿Podrías pasarme la sal?",
      "Yo que vos, hablaría con ella.",
      "Me encantaría conocer Budapest."
    ],
    exercises: [
      { type: "choice", prompt: "Si pudiera, (yo) ___ a Hungría todos los años. (viajar)", options: ["viajaría", "viajaré"], answer: "viajaría", explain: "Hipótesis → condicional: viajaría." },
      { type: "choice", prompt: "¿___ (vos) cerrar la ventana, por favor? (poder)", options: ["Podrías", "Poderías"], answer: "Podrías", explain: "'Poder' es irregular en condicional: podrías (no 'poderías')." },
      { type: "fill", prompt: "Yo que vos, le ___ la verdad. (decir)", accept: ["diria"], answer: "diría", explain: "'Decir' es irregular en condicional: diría." },
      { type: "choice", prompt: "Con más tiempo, (nosotros) ___ el proyecto mejor. (hacer)", options: ["haríamos", "haceríamos"], answer: "haríamos", explain: "'Hacer' es irregular en condicional: haríamos (no 'haceríamos')." },
      { type: "choice", prompt: "Me ___ mucho ir a un asado este finde. (gustar)", options: ["gustaría", "gustaré"], answer: "gustaría", explain: "Deseo cortés → condicional: gustaría." },
      { type: "fill", prompt: "¿___ (vos) ayudarme con las valijas? (poder)", accept: ["podrias"], answer: "podrías", explain: "Pedido cortés → condicional: podrías." }
    ]
  },
  {
    id: "comparativos-superlativos",
    title: "Comparativos y superlativos",
    explain: "Para comparar: MÁS + adjetivo + QUE (más alto que), MENOS + adjetivo + QUE (menos caro que), TAN + adjetivo + COMO (tan lindo como, igualdad). Hay comparativos irregulares que no llevan 'más': bueno → mejor, malo → peor, grande → mayor (edad) / más grande (tamaño), pequeño → menor (edad) / más chico (tamaño). Superlativo: EL/LA + MÁS/MENOS + adjetivo (+ DE): 'el más alto de la clase'. También existe el superlativo con -ísimo/a, que intensifica sin comparar: 'riquísimo' = muy muy rico. Pista en húngaro: a magyarban a közép- és felsőfok végződéssel készül (-bb, leg-bb), a spanyolban viszont külön szavakkal (más...que, el más...) — ez szerkezetileg egészen más, ne fordítsd szó szerint.",
    examples: [
      "Este mate es más rico que el otro.",
      "Ella es menor que su hermano.",
      "Buenos Aires es tan grande como Budapest, más o menos.",
      "Es el mejor asado que comí en mi vida.",
      "Está riquísimo este postre."
    ],
    exercises: [
      { type: "choice", prompt: "Este ejercicio es ___ difícil que el anterior.", options: ["más", "tan"], answer: "más", explain: "Superioridad → más + adjetivo + que." },
      { type: "choice", prompt: "Mi hermano es ___ que yo. (bueno, comparativo irregular)", options: ["más bueno", "mejor"], answer: "mejor", explain: "'Bueno' tiene comparativo irregular: mejor (no 'más bueno')." },
      { type: "fill", prompt: "Ella es tan alta ___ vos.", accept: ["como"], answer: "como", explain: "Igualdad → tan + adjetivo + como." },
      { type: "choice", prompt: "Es el restaurante ___ caro de todo el barrio.", options: ["más", "tan"], answer: "más", explain: "Superlativo → el/la + más + adjetivo (+ de)." },
      { type: "choice", prompt: "Mi abuelo es ___ que mi papá. (grande = edad, comparativo irregular)", options: ["más grande", "mayor"], answer: "mayor", explain: "Para edad, el comparativo irregular es mayor (no 'más grande')." },
      { type: "fill", prompt: "Este flan está ___. (rico, superlativo con -ísimo)", accept: ["riquisimo"], answer: "riquísimo", explain: "Superlativo absoluto: rico → riquísimo (irregular: qu antes de í)." }
    ]
  },
  {
    id: "compuesto-vs-simple",
    title: "Pretérito compuesto vs. simple (uso rioplatense)",
    explain: "El PRETÉRITO PERFECTO COMPUESTO se forma con HABER (he, has, ha, hemos, han) + PARTICIPIO (-ado/-ido): he comido, has hablado, ha vivido. En España se usa mucho para hechos recientes ('hoy he comido asado'), pero en el español rioplatense es MUCHO MENOS COMÚN: en Argentina y Uruguay, para lo mismo se prefiere directamente el PRETÉRITO SIMPLE, incluso para cosas que acaban de pasar: 'hoy comí asado' (no 'he comido'). El compuesto se reserva más para contextos formales o escritos. Pista en húngaro: ha spanyol tanfolyamon a 'pretérito perfecto compuesto'-t tanultad mint a leggyakoribb múlt időt, itt Argentínában ne lepődj meg, hogy a hétköznapi beszédben szinte mindig az egyszerű múltat (pretérito simple) használják helyette, még a nagyon friss eseményekre is.",
    examples: [
      "Hoy comí un montón. (rioplatense, no 'he comido')",
      "¿Alguna vez estuviste en Europa? (más común que '¿has estado?')",
      "Nunca he probado el mate, contame cómo es. (uso posible, pero menos frecuente)",
      "Esta semana laburé mucho. (no 'he trabajado')"
    ],
    exercises: [
      { type: "choice", prompt: "¿Cuál suena más natural en una charla cotidiana en Argentina?", options: ["Hoy comí temprano.", "Hoy he comido temprano."], answer: "Hoy comí temprano.", explain: "En el habla rioplatense cotidiana se prefiere el pretérito simple, incluso para hechos recientes." },
      { type: "choice", prompt: "___ (yo) toda la tarde estudiando. (pasar, forma típica rioplatense)", options: ["Pasé", "He pasado"], answer: "Pasé", explain: "Pretérito simple: la forma más natural en el Río de la Plata para hechos del día." },
      { type: "fill", prompt: "Esta mañana (vos) ___ tarde, ¿no? (levantarse, pretérito simple)", accept: ["te levantaste"], answer: "te levantaste", explain: "Pretérito simple, forma habitual rioplatense (no 'te has levantado')." },
      { type: "choice", prompt: "¿Alguna vez ___ mate amargo? (probar, más natural en Argentina)", options: ["probaste", "has probado"], answer: "probaste", explain: "Para experiencias de vida, en el habla rioplatense también predomina el pretérito simple." },
      { type: "choice", prompt: "Recién ___ con tu hermana por teléfono. (hablar, hecho reciente)", options: ["hablé", "he hablado"], answer: "hablé", explain: "Hecho reciente → en Argentina, pretérito simple: hablé (no 'he hablado')." },
      { type: "fill", prompt: "Todavía no ___ el informe, lo termino mañana. (terminar, uso rioplatense)", accept: ["termine"], answer: "terminé", explain: "Aunque en España se diría 'no he terminado', en Argentina es muy común 'no terminé'." }
    ]
  }
];
