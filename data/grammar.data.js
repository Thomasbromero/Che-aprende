/* Gramática: temas con explicación breve y ejercicios autocorregidos.
   Tipos de ejercicio:
   - "choice": prompt con ___, options: [...], answer: "texto exacto de la opción correcta"
   - "fill":   prompt con ___, accept: [respuestas válidas], answer: "forma correcta a mostrar"
   Cada ejercicio puede tener "explain" (se muestra tras responder).
   "nivel" (1 a 100) es la dificultad del contenido; la calcula "node dev/puntuar.js --escribir".
*/
window.GRAMMAR = [
  {
    id: "presentarse",
    title: "Presentarte: \"Hola, soy… Encantada\"",
    explain: "Cuando conocés a alguien nuevo, usá siempre la misma fórmula: \"Hola, soy [tu nombre]. Encantada.\" y listo. La palabra 'encantada' concuerda con VOS, que sos quien habla, y nunca con la otra persona. Por eso no cambia nunca: da igual si es un hombre, una mujer, una persona sola o un grupo de veinte. Olvidate de 'encantada de conocerte', 'de conocerlo', 'de conocerlas': todo eso cambia según con quién hablás y es un quilombo al pedo. 'Encantada' sola ya suena perfecta y educada. Pista en húngaro: ez az 'Örvendek' megfelelője. Egyetlen alak, minden helyzetre — ha nő vagy, mindig 'encantada', akárkivel is beszélsz.",
    examples: [
      "Hola, soy Kata. Encantada. (fórmula completa)",
      "—Te presento a Martín. —Encantada. (es un hombre → igual: encantada)",
      "—Ellos son mis compañeros de laburo. —Encantada. (es un grupo → igual: encantada)",
      "—Ella es mi mamá. —Encantada. (es una mujer → igual: encantada)"
    ],
    exercises: [
      { type: "choice", prompt: "Sos mujer y conocés a alguien en una fiesta: \"Hola, soy Kata, ___.\"", options: ["encantada", "encantado"], answer: "encantada", explain: "Concuerda con vos, que sos quien habla. Si sos mujer, siempre 'encantada'.", nivel: 7 },
      { type: "choice", prompt: "—Te presento a mi hermano Fede. —Hola, ___.", options: ["encantada", "encantado"], answer: "encantada", explain: "Él es varón, pero no importa: la palabra concuerda con vos, no con él. Encantada.", nivel: 5 },
      { type: "choice", prompt: "Te presentan a tres personas juntas. Decís:", options: ["Encantada", "Encantadas"], answer: "Encantada", explain: "No cambia por la cantidad de gente. Siempre 'Encantada', en singular.", nivel: 4 },
      { type: "choice", prompt: "Te presentan a una señora mayor. Lo más simple es decir:", options: ["Encantada", "Encantada de conocerla"], answer: "Encantada", explain: "Las dos se entienden, pero quedate con 'Encantada' sola: así no tenés que pensar si es él, ella, ellos o ellas.", nivel: 6 },
      { type: "choice", prompt: "Conocés a los amigos de tu marido, todos varones. Decís:", options: ["Encantada", "Encantada de conocerlos"], answer: "Encantada", explain: "Con 'Encantada' alcanza y sobra. La versión larga solo te complica.", nivel: 6 },
      { type: "fill", prompt: "Completá la fórmula: \"Hola, soy Vivi. ___.\"", accept: ["encantada"], answer: "Encantada", explain: "La fórmula fija: nombre + Encantada.", nivel: 4 },
      { type: "fill", prompt: "Te presentan a un grupo de gente nueva. Saludás con una sola palabra: ___", accept: ["encantada"], answer: "Encantada", explain: "Una sola palabra, siempre la misma: Encantada.", nivel: 8 },
      { type: "fill", prompt: "Alguien te pregunta \"¿Cómo te llamás?\". Respondé: \"Me llamo Kata. ___.\"", accept: ["encantada"], answer: "Encantada", explain: "Después de decir tu nombre, cerrás con Encantada.", nivel: 6 }
    ]
  },
  {
    id: "indicaciones",
    title: "Pedir indicaciones y pedir ayuda",
    explain: "Cuando estás perdida o necesitás ayuda en la calle, hay frases fijas que te sacan del apuro. Para llamar la atención de un desconocido, empezá con 'Disculpe' o 'Perdón'. Para preguntar cómo llegar a un lugar: '¿Cómo llego a...?' o '¿Dónde queda...?'. Si estás perdida, decilo directo: 'Estoy perdida'. Y si necesitás una mano: '¿Me podés ayudar?' (a alguien que tratás de vos). Para entender la respuesta, las palabras clave son: seguir derecho (ir en línea recta, sin doblar), doblar a la derecha/izquierda, la cuadra (la distancia entre una esquina y la siguiente). Y si no entendiste, pedí que repitan sin vergüenza: '¿Podés repetir?' o 'Más despacio, por favor'. Pista en húngaro: a 'derecho' itt nem jogot jelent, hanem 'egyenesen' (menni); a 'cuadra' egy háztömbnyi távolság, sarkoktól sarkokig.",
    examples: [
      "Disculpe, ¿cómo llego a la estación de tren?",
      "Perdón, ¿me podés ayudar? Estoy perdida.",
      "Seguí derecho dos cuadras y doblá a la derecha.",
      "¿Dónde queda la farmacia más cercana?",
      "No entendí bien, ¿podés repetir, más despacio?"
    ],
    exercises: [
      { type: "choice", prompt: "Estás en la calle y necesitás llamar la atención de alguien que no conocés para preguntarle algo. Empezás con:", options: ["Disculpe...", "Chau..."], answer: "Disculpe...", explain: "'Disculpe' (o 'Perdón') es la forma educada de llamar la atención de un desconocido.", nivel: 16 },
      { type: "fill", prompt: "Querés preguntar cómo llegar a la estación: \"¿Cómo ___ a la estación?\" (llegar)", accept: ["llego"], answer: "llego", explain: "'Llegar a' + lugar. Primera persona: llego.", nivel: 14 },
      { type: "choice", prompt: "Estás caminando y no sabés dónde estás. Decís:", options: ["Estoy perdida.", "Estoy perdiendo."], answer: "Estoy perdida.", explain: "'Perdida' es el adjetivo (describe tu estado). 'Perdiendo' sería 'estoy perdiendo algo', otra cosa distinta.", nivel: 12 },
      { type: "fill", prompt: "Necesitás una mano con las valijas. Le pedís a alguien (vos): \"¿Me podés ___?\" (ayudar)", accept: ["ayudar"], answer: "ayudar", explain: "Podés + infinitivo: ayudar.", nivel: 15 },
      { type: "choice", prompt: "Alguien te explica el camino: \"Seguí ___ dos cuadras.\" (en línea recta, sin doblar)", options: ["derecho", "derecha"], answer: "derecho", explain: "'Derecho' acá significa 'recto, en línea recta'. 'Derecha' es el lado (a la derecha, opuesto a la izquierda).", nivel: 15 },
      { type: "choice", prompt: "Doblar a la derecha es lo opuesto a doblar a la ___.", options: ["izquierda", "cuadra"], answer: "izquierda", explain: "Derecha ↔ izquierda son opuestos. 'Cuadra' es una distancia, no una dirección.", nivel: 14 },
      { type: "fill", prompt: "\"La farmacia queda a dos ___ de acá.\" (distancia entre una esquina y la siguiente)", accept: ["cuadras"], answer: "cuadras", explain: "Una 'cuadra' es la distancia de una esquina a la siguiente.", nivel: 15 },
      { type: "choice", prompt: "No entendiste bien lo que te explicaron. Pedís que repitan:", options: ["¿Podés repetir, por favor?", "¿Podés repartir, por favor?"], answer: "¿Podés repetir, por favor?", explain: "'Repetir' = decir de nuevo. 'Repartir' es distribuir algo entre varias personas, no tiene nada que ver.", nivel: 13 },
      { type: "fill", prompt: "Te hablan muy rápido y no llegás a entender. Pedís: \"Más ___, por favor.\" (lo opuesto de rápido)", accept: ["despacio"], answer: "despacio", explain: "'Despacio' = lentamente. Pedir que hablen más despacio es de lo más común mientras aprendés un idioma.", nivel: 16 }
    ]
  },
  {
    id: "voseo-presente",
    title: "El voseo en el presente: hablás, comés, vivís",
    explain: "Para hablar con vos en el presente, tomamos el infinitivo, cambiamos la -r final por una -s y ponemos la tilde en la última vocal: hablar → hablás, comer → comés, vivir → vivís. Dos verbos muy comunes son especiales: vos sos (ser) y vos vas (ir). Los demás siguen la regla: vos tenés, vos querés, vos podés, vos hacés, vos decís. Además, en los verbos con cambio de raíz, vos mantiene la raíz del infinitivo: vos pensás, vos volvés, vos pedís. Pista en húngaro: A vos alak a főnévi igenévből lesz: az -r helyére -s kerül, és az utolsó magánhangzó ékezetet kap (hablar → hablás, comer → comés, vivir → vivís). A szótő nem változik: pensás, volvés.",
    examples: [
      "¿Vos hablás español o inglés? (verbo regular en -ar)",
      "¿Qué querés comer esta noche? (verbo muy usado)",
      "Vos siempre pedís empanadas de carne. (verbo sin cambio de raíz)",
      "Che, ¿vos sos de Buenos Aires? (verbo ser con voseo)"
    ],
    exercises: [
      { type: "choice", prompt: "¿De dónde ___ (vos)?", options: ["eres", "sos"], answer: "sos", explain: "Con 'vos', la forma del verbo ser es 'sos'.", nivel: 24 },
      { type: "choice", prompt: "Vos, ¿qué ___ hacer el fin de semana?", options: ["querés", "quieres"], answer: "querés", explain: "Con 'vos' decimos 'querés', sin cambiar la raíz.", nivel: 26 },
      { type: "choice", prompt: "Si vos ___ tarde, me avisás.", options: ["llegás", "llegas"], answer: "llegás", explain: "La terminación -ar cambia a -ás con tilde.", nivel: 25 },
      { type: "choice", prompt: "¿Vos ___ ir al cine hoy?", options: ["puedes", "podés"], answer: "podés", explain: "Con 'vos' decimos 'podés', sin cambiar la raíz.", nivel: 25 },
      { type: "choice", prompt: "Vos siempre ___ la misma película para ver.", options: ["elegís", "eliges"], answer: "elegís", explain: "La terminación -ir cambia a -ís con tilde.", nivel: 26 },
      { type: "fill", prompt: "¿Cuántos años ___ (tener) vos?", accept: ["tenes", "tenés"], answer: "tenés", explain: "El verbo tener con 'vos' es 'tenés'.", nivel: 24 },
      { type: "fill", prompt: "Vos siempre ___ (decir) la verdad.", accept: ["decis", "decís"], answer: "decís", explain: "El verbo decir con 'vos' es 'decís'.", nivel: 25 },
      { type: "fill", prompt: "Vos, ¿a qué hora ___ (volver) del trabajo?", accept: ["volves", "volvés"], answer: "volvés", explain: "Con 'vos' decimos 'volvés', sin cambiar la raíz.", nivel: 26 }
    ]
  },
  {
    id: "a-en-de",
    title: "A, en y de: lugar y movimiento",
    explain: "Usamos la preposición a para indicar movimiento y destino, como ir a o llegar a un lugar. Usamos en para indicar dónde estamos, dónde vivimos o el medio de transporte: en colectivo, en auto o en tren, pero decimos a pie. Usamos de para el origen, como venir de o salir de. Además, usamos lo de para hablar de la casa o el local de alguien: voy a lo de Marta, estoy en lo de Marta. Pista en húngaro: Az \"a\" mozgást és célt fejez ki (hová?), az \"en\" helyzetet és járművet (hol?, mivel?), a \"de\" pedig eredetet (honnan?). A \"lo de\" kifejezés valakinek a házát jelenti.",
    examples: [
      "Todos los días voy al centro en colectivo. (a + el centro, en colectivo)",
      "Mis tíos viven en un departamento chico. (en para ubicación)",
      "Hoy a la noche cenamos en lo de mi abuela. (lo de = la casa de)",
      "El tren acaba de salir de la estación. (de para origen)",
      "Como el kiosco está cerca, prefiero ir a pie. (a pie = caminando)"
    ],
    exercises: [
      { type: "choice", prompt: "Mañana voy ___ la oficina en colectivo.", options: ["a", "en"], answer: "a", explain: "Con el verbo ir y un destino usamos 'a'.", nivel: 31 },
      { type: "choice", prompt: "Mi primo vive ___ el barrio de San Telmo.", options: ["en", "a"], answer: "en", explain: "Para indicar dónde vive alguien usamos 'en'.", nivel: 32 },
      { type: "choice", prompt: "¿Vamos a comer a ___ de Juan?", options: ["lo", "la"], answer: "lo", explain: "Para decir 'la casa de Juan' usamos 'lo de'.", nivel: 31 },
      { type: "choice", prompt: "Me gusta viajar ___ subte por la ciudad.", options: ["en", "a"], answer: "en", explain: "Para medios de transporte como el subte usamos 'en'.", nivel: 32 },
      { type: "choice", prompt: "Si vamos ___ pie llegamos en diez minutos.", options: ["en", "a"], answer: "a", explain: "La expresión correcta para caminar es 'a pie'.", nivel: 32 },
      { type: "fill", prompt: "Salimos ___ casa muy tarde hoy.", accept: ["de"], answer: "de", explain: "Para indicar origen o punto de salida usamos 'de'.", nivel: 31 },
      { type: "fill", prompt: "Hoy nos juntamos a estudiar en ___ de Marcos.", accept: ["lo"], answer: "lo", explain: "Usamos 'lo de' para referirnos a la casa de alguien.", nivel: 32 },
      { type: "fill", prompt: "Mañana llegamos ___ Córdoba a la noche.", accept: ["a"], answer: "a", explain: "Con el verbo llegar y un destino usamos 'a'.", nivel: 31 }
    ]
  },
  {
    id: "articulos-y-genero",
    title: "Artículos y género: trampas comunes",
    explain: "En español casi todo tiene género. La regla general es fácil: si termina en -o es masculina (el/un) y si termina en -a es femenina (la/una). Pero hay palabras tramposas que no la cumplen y conviene aprender siempre junto con su artículo. Muchas palabras que terminan en -ma son masculinas (el problema, el tema, el idioma), igual que el mapa o el planeta. Las palabras acortadas conservan el género de la palabra original: la foto (de fotografía), la moto (de motocicleta). Y la mano es femenina aunque termine en -o. Pista en húngaro: A magyarban nincs nyelvtani nem, így ezt nehéz megszokni. A legfontosabb kivételeket (például a kéz: la mano, a térkép: el mapa) érdemes egyből a névelővel együtt megtanulni.",
    examples: [
      "Pasame el mapa para ver dónde queda el hotel. (termina en -a pero es masculino)",
      "Sacame una foto con las chicas en la plaza. (femenino, de la palabra fotografía)",
      "El chabón tiene un problema grande con la guita. (termina en -ma pero es masculino)",
      "Lavate bien la mano que está sucia. (termina en -o pero es femenino)",
      "Mi primo se compró una moto tremenda. (femenino, de la palabra motocicleta)"
    ],
    exercises: [
      { type: "choice", prompt: "Che, tengo ___ problema en el laburo y no sé cómo resolverlo.", options: ["un", "una"], answer: "un", explain: "La palabra 'problema' termina en -a, pero es masculina como muchas palabras de origen griego.", nivel: 26 },
      { type: "choice", prompt: "Antes de morfar, por favor lavate bien ___ manos.", options: ["los", "las"], answer: "las", explain: "Aunque termina en -o, 'mano' es una palabra femenina.", nivel: 24 },
      { type: "fill", prompt: "¿Viste ___ foto que subió Martín al grupo? Está zarpada.", accept: ["la", "esa", "una"], answer: "la", explain: "Es femenina porque es el acortamiento de 'fotografía'.", nivel: 25 },
      { type: "choice", prompt: "Fijate en ___ mapa de la ciudad a ver si encontramos la calle.", options: ["el", "la"], answer: "el", explain: "La palabra 'mapa' termina en -a, pero es una excepción totalmente masculina.", nivel: 26 },
      { type: "fill", prompt: "Aprender español es ___ desafío tremendo para mí.", accept: ["un"], answer: "un", explain: "Como 'desafío' termina en -o, es una palabra masculina.", nivel: 24 },
      { type: "choice", prompt: "¿Me prestás el auto? Tengo que ir a buscar ___ moto al taller.", options: ["el", "la"], answer: "la", explain: "Lleva artículo femenino porque es el acortamiento de 'motocicleta'.", nivel: 26 },
      { type: "choice", prompt: "No tiren basura en la calle, hay que cuidar ___ planeta.", options: ["el", "la"], answer: "el", explain: "Como 'mapa', la palabra 'planeta' termina en -a pero es una excepción masculina.", nivel: 25 },
      { type: "fill", prompt: "El español rioplatense es ___ idioma re copado para aprender.", accept: ["un", "el"], answer: "un", explain: "La palabra 'idioma' termina en -ma, por lo tanto es masculina y lleva 'un' o 'el'.", nivel: 25 }
    ]
  },
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
      { type: "choice", prompt: "Buenos Aires ___ en Argentina.", options: ["es", "está"], answer: "está", explain: "Ubicación geográfica → estar.", nivel: 23 },
      { type: "choice", prompt: "Hoy ___ martes.", options: ["es", "está"], answer: "es", explain: "Día / fecha → ser.", nivel: 22 },
      { type: "choice", prompt: "El café ya ___ frío, no lo tomo.", options: ["es", "está"], answer: "está", explain: "Estado que cambió → estar.", nivel: 25 },
      { type: "choice", prompt: "Vos ___ muy inteligente.", options: ["sos", "estás"], answer: "sos", explain: "Característica → ser. En voseo: vos SOS.", nivel: 23 },
      { type: "choice", prompt: "Los chicos ___ cansados después del partido.", options: ["son", "están"], answer: "están", explain: "Estado físico → estar.", nivel: 24 },
      { type: "fill", prompt: "¿De dónde ___ vos? (ser)", accept: ["sos"], answer: "sos", explain: "Origen → ser, en voseo: vos SOS.", nivel: 23 }
    ]
  },
  {
    id: "hay-y-estar",
    title: "Hay vs. Estar",
    explain: "Usamos 'hay' para hablar de la existencia de algo en general, cuando no es específico. Por ejemplo, 'hay un banco' o 'no hay azúcar'. Usamos 'estar' para ubicar en el espacio cosas o personas específicas que ya conocemos. Por eso decimos 'el banco está en la esquina' o 'mis llaves están en la mesa'. Con 'hay' no usamos el artículo definido (el, la, los, las). Pista en húngaro: A magyarban mindkettő 'van', ezért könnyű összekeverni. A 'hay' a létezést fejezi ki (van egy, vannak), az 'estar' pedig konkrét, már ismert dolgok helyét mondja meg (valami valahol van).",
    examples: [
      "Hay un supermercado en la otra cuadra. (no específico)",
      "El supermercado está en la otra cuadra. (específico)",
      "¿Hay sillas libres en esta mesa? (no específico, plural)",
      "Las sillas están ocupadas. (específico, plural)",
      "En mi barrio no hay subte. (existencia)"
    ],
    exercises: [
      { type: "choice", prompt: "Disculpá, ¿___ una farmacia por acá?", options: ["hay", "está"], answer: "hay", explain: "Buscamos una farmacia cualquiera, no una específica, así que usamos 'hay'.", nivel: 21 },
      { type: "choice", prompt: "La farmacia de mi barrio ___ en la esquina.", options: ["hay", "está"], answer: "está", explain: "Hablamos de una farmacia específica (la farmacia), por lo que usamos 'está'.", nivel: 22 },
      { type: "choice", prompt: "En la heladera no ___ leche.", options: ["hay", "está"], answer: "hay", explain: "Hablamos de la existencia (o falta) del producto en general.", nivel: 21 },
      { type: "choice", prompt: "Mis zapatillas ___ debajo de la cama.", options: ["hay", "están"], answer: "están", explain: "Son mis zapatillas específicas, usamos 'están' por ser plural.", nivel: 21 },
      { type: "choice", prompt: "¿___ muchos autos en la calle hoy?", options: ["Hay", "Están"], answer: "Hay", explain: "Preguntamos por la existencia de cantidad (muchos autos) sin ser específicos.", nivel: 21 },
      { type: "fill", prompt: "El baño ___ al final del pasillo. (estar)", accept: ["está", "esta"], answer: "está", explain: "Hablamos de un baño específico (el baño) en singular.", nivel: 22 },
      { type: "fill", prompt: "En esta ciudad ___ muchos parques muy lindos. (haber)", accept: ["hay"], answer: "hay", explain: "Para hablar de existencia general usamos siempre 'hay', aunque sea plural.", nivel: 22 },
      { type: "fill", prompt: "¿Dónde ___ las llaves del departamento? (estar)", accept: ["están", "estan"], answer: "están", explain: "Las llaves son algo específico y plural, usamos 'están'.", nivel: 21 }
    ]
  },
  {
    id: "gustar-y-similares",
    title: "Gustar y verbos parecidos",
    explain: "Con estos verbos, el verbo concuerda con la cosa que gusta, no con quien la siente. Antes del verbo va un pronombre: a mí me, a vos te, a él o ella le, a nosotros nos, a ustedes les. Si la cosa es singular o es una acción (salir, bailar), usamos 'gusta', 'encanta' o 'duele'. Si son varias cosas, usamos 'gustan', 'encantan' o 'duelen'. Pista en húngaro: Ezek az igék a magyar 'tetszik' igéhez hasonlítanak: az ige ahhoz a dologhoz igazodik, ami tetszik vagy fáj (gusta / gustan, duele / duelen).",
    examples: [
      "Me gusta mucho el mate amargo. (singular)",
      "¿A vos te gustan las empanadas? (plural)",
      "A mi hermano le encanta jugar al fútbol. (acción)",
      "Me duele la cabeza por el ruido. (doler, singular)",
      "Nos duelen las piernas de tanto caminar. (doler, plural)"
    ],
    exercises: [
      { type: "choice", prompt: "A mí ___ gusta esta canción.", options: ["me", "te"], answer: "me", explain: "Usamos 'me' para hablar de la primera persona (a mí).", nivel: 27 },
      { type: "choice", prompt: "¿A vos ___ duelen los pies?", options: ["te", "le"], answer: "te", explain: "Para 'a vos' siempre usamos 'te'.", nivel: 27 },
      { type: "choice", prompt: "A Juan le ___ la pizza.", options: ["gusta", "gustan"], answer: "gusta", explain: "Como 'la pizza' es singular, el verbo va en singular.", nivel: 27 },
      { type: "choice", prompt: "Me ___ mucho los alfajores de maicena.", options: ["encanta", "encantan"], answer: "encantan", explain: "Como 'los alfajores' está en plural, usamos 'encantan'.", nivel: 27 },
      { type: "choice", prompt: "Nos ___ los ojos por mirar la pantalla.", options: ["duele", "duelen"], answer: "duelen", explain: "Como 'los ojos' son varios, el verbo va en plural.", nivel: 28 },
      { type: "fill", prompt: "A mí ___ duele mucho la espalda.", accept: ["me"], answer: "me", explain: "Con 'a mí' siempre usamos 'me'.", nivel: 27 },
      { type: "fill", prompt: "¿A vos te ___ las películas de terror? (gustar)", accept: ["gustan"], answer: "gustan", explain: "Como 'películas' es plural, el verbo 'gustar' va con 'n' al final.", nivel: 28 },
      { type: "fill", prompt: "A ella le ___ salir a bailar los sábados. (encantar)", accept: ["encanta"], answer: "encanta", explain: "Cuando sigue un verbo en infinitivo (salir), se usa la forma en singular.", nivel: 29 }
    ]
  },
  {
    id: "pedir-y-comprar",
    title: "Pedir y comprar con cortesía",
    explain: "Para pedir en un restaurante o preguntar en un negocio hay frases fijas muy útiles. Para pedir algo con cortesía: 'quisiera…' o 'para mí…'. Al mozo se le dice '¿me traés…?' (con voseo). Para saber el precio: '¿cuánto sale?' o '¿cuánto cuesta?'. Para pagar: 'la cuenta, por favor', '¿me cobrás?' y '¿aceptan tarjeta?'. Pista en húngaro: Ezek rögzített, udvarias kérdések és kérések: 'quisiera' (szeretnék), '¿me traés…?' (hoznál nekem…?), '¿cuánto sale?' (mennyibe kerül?).",
    examples: [
      "Quisiera un café con leche, por favor. (para pedir algo)",
      "Mozo, ¿me traés la cuenta? (pedido con voseo)",
      "Para mí, una milanesa con papas fritas. (para elegir tu plato)",
      "Disculpá, ¿cuánto sale este pantalón? (para preguntar el precio)",
      "¿Aceptan tarjeta o es solo en efectivo? (formas de pago)"
    ],
    exercises: [
      { type: "choice", prompt: "Hola, ___ una mesa para tres, por favor.", options: ["quisiera", "quisieras"], answer: "quisiera", explain: "Para pedir algo con cortesía hablás de vos mismo: 'quisiera' (yo). 'Quisieras' sería para otra persona.", nivel: 30 },
      { type: "choice", prompt: "Disculpá, ¿cuánto ___ estas zapatillas?", options: ["sale", "salen"], answer: "salen", explain: "Como 'las zapatillas' es plural, usamos 'salen'.", nivel: 28 },
      { type: "choice", prompt: "Mozo, ¿nos traés la ___, por favor?", options: ["cuenta", "plata"], answer: "cuenta", explain: "En el restaurante pedimos la cuenta para pagar.", nivel: 29 },
      { type: "choice", prompt: "___ mí, unos fideos con salsa.", options: ["Para", "Por"], answer: "Para", explain: "La expresión correcta para elegir tu plato es 'para mí'.", nivel: 29 },
      { type: "choice", prompt: "Todo muy rico. ¿Me ___, por favor?", options: ["cobrás", "pagás"], answer: "cobrás", explain: "Le pedís al empleado que te cobre a vos.", nivel: 29 },
      { type: "fill", prompt: "¿Me ___ otra botella de agua, por favor? (traer)", accept: ["traés", "traes"], answer: "traés", explain: "Es la forma del voseo para el verbo traer.", nivel: 30 },
      { type: "fill", prompt: "Disculpá, ¿___ tarjeta de crédito acá? (aceptar)", accept: ["aceptan"], answer: "aceptan", explain: "El verbo va en plural (ustedes / ellos) para preguntar si en el local aceptan esa forma de pago.", nivel: 29 },
      { type: "fill", prompt: "Hola, ¿cuánto ___ el kilo de pan? (salir)", accept: ["sale"], answer: "sale", explain: "Usamos el verbo salir en singular para preguntar el precio de una cosa.", nivel: 30 }
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
      { type: "choice", prompt: "Este mate es ___ vos.", options: ["por", "para"], answer: "para", explain: "Destinatario → para.", nivel: 38 },
      { type: "choice", prompt: "Caminamos ___ el parque hasta el río.", options: ["por", "para"], answer: "por", explain: "A través de un lugar → por.", nivel: 39 },
      { type: "choice", prompt: "Estudio español ___ hablar con mi familia.", options: ["por", "para"], answer: "para", explain: "Finalidad (para + infinitivo) → para.", nivel: 39 },
      { type: "choice", prompt: "Te llamo ___ teléfono más tarde.", options: ["por", "para"], answer: "por", explain: "Medio → por.", nivel: 39 },
      { type: "choice", prompt: "Necesito el informe ___ el lunes.", options: ["por", "para"], answer: "para", explain: "Plazo / fecha límite → para.", nivel: 39 },
      { type: "choice", prompt: "Gracias ___ todo lo que hiciste.", options: ["por", "para"], answer: "por", explain: "Motivo → por.", nivel: 39 }
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
      { type: "choice", prompt: "De chica, (yo) ___ al ballet todos los sábados. (ir)", options: ["fui", "iba"], answer: "iba", explain: "Costumbre repetida en el pasado → imperfecto.", nivel: 63 },
      { type: "choice", prompt: "Anoche (nosotros) ___ una película buenísima. (ver)", options: ["veíamos", "vimos"], answer: "vimos", explain: "Hecho puntual y terminado → pretérito.", nivel: 61 },
      { type: "choice", prompt: "___ (yo) a tu prima en el cumpleaños de Fede. (conocer)", options: ["Conocía", "Conocí"], answer: "Conocí", explain: "'Conocer' en pretérito = la vi por primera vez (evento puntual).", nivel: 63 },
      { type: "choice", prompt: "Ya ___ a tu prima de antes, por eso no me sorprendió verla. (conocer)", options: ["conocía", "conocí"], answer: "conocía", explain: "'Conocer' en imperfecto = ya la conocía de antes (estado).", nivel: 65 },
      { type: "fill", prompt: "Mientras vos ___ (hablar), yo preparaba el mate.", accept: ["hablabas"], answer: "hablabas", explain: "Acción en curso, marco de fondo → imperfecto.", nivel: 62 },
      { type: "choice", prompt: "Lo intenté mil veces pero no ___ abrir el frasco. (poder)", options: ["podía", "pude"], answer: "pude", explain: "'Poder' en pretérito (negativo) = lo intentó y no lo logró.", nivel: 63 }
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
      { type: "choice", prompt: "Espero que (vos) ___ pronto. (mejorar)", options: ["mejorás", "mejores"], answer: "mejores", explain: "'Espero que' pide subjuntivo: mejores.", nivel: 71 },
      { type: "choice", prompt: "Dudo que ellos ___ la verdad. (decir)", options: ["dicen", "digan"], answer: "digan", explain: "Duda → subjuntivo: digan.", nivel: 71 },
      { type: "fill", prompt: "Ojalá que (nosotros) ___ tiempo para viajar este verano. (tener)", accept: ["tengamos"], answer: "tengamos", explain: "'Ojalá que' + subjuntivo: tengamos.", nivel: 73 },
      { type: "choice", prompt: "Me alegra que ella ___ contenta con el trabajo nuevo. (estar)", options: ["está", "esté"], answer: "esté", explain: "Emoción ('me alegra que') → subjuntivo: esté.", nivel: 73 },
      { type: "choice", prompt: "No creo que ___ (vos) razón esta vez. (tener)", options: ["tenés", "tengas"], answer: "tengas", explain: "Negación de certeza → subjuntivo: tengas.", nivel: 72 },
      { type: "fill", prompt: "Es una lástima que no ___ (ellos) venir a la fiesta. (poder)", accept: ["puedan"], answer: "puedan", explain: "Valoración ('es una lástima que') → subjuntivo: puedan.", nivel: 74 }
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
      { type: "choice", prompt: "___ (vos) la puerta, por favor. (cerrar)", options: ["Cerrá", "Cierra"], answer: "Cerrá", explain: "Imperativo de vos: infinitivo sin -r + tilde → cerrá.", nivel: 49 },
      { type: "choice", prompt: "No le ___ (vos) nada a tu hermano todavía. (decir)", options: ["digas", "decí"], answer: "digas", explain: "Imperativo negativo de vos = subjuntivo: no digas.", nivel: 51 },
      { type: "fill", prompt: "___ (vos) a Fede que llegamos tarde. (avisarle)", accept: ["avisale"], answer: "Avisale", explain: "Imperativo de vos + pronombre enclítico: avisarle → avisale (se saca la r final).", nivel: 50 },
      { type: "choice", prompt: "___ (vos) más despacio, por favor. (venir)", options: ["Vení", "Ven"], answer: "Vení", explain: "'Ven' es de tú; en voseo rioplatense es Vení.", nivel: 49 },
      { type: "choice", prompt: "No ___ (vos) tan tarde esta noche. (salir)", options: ["salgas", "salí"], answer: "salgas", explain: "Imperativo negativo → subjuntivo: no salgas.", nivel: 50 },
      { type: "fill", prompt: "___ (vos) la mesa antes de que lleguen. (poner)", accept: ["pone"], answer: "Poné", explain: "Imperativo de vos irregular: poné.", nivel: 50 }
    ]
  },
  {
    id: "pronombres-lo-la-le",
    title: "Lo, la, los, las, le: a quién y a qué",
    explain: "Usamos lo, la, los y las para reemplazar cosas o personas que reciben directamente la acción, como lo que se ve, se compra o se come. Usamos le y les para reemplazar a quién recibe algo o a quién le importa la acción. Estos pronombres se ponen antes del verbo conjugado, como en 'lo veo'. También pueden ir pegados al final de un verbo en infinitivo, como en 'quiero verlo'. Pista en húngaro: A \"lo, la, los, las\" a tárgyesetet (mit? kit?), a \"le, les\" pedig a részesesetet (kinek?) helyettesíti. A ragozott ige elé vagy a főnévi igenév végéhez kapcsoljuk őket.",
    examples: [
      "Compré un alfajor y lo comí enseguida. (lo reemplaza al alfajor)",
      "A mi hermana le compré un regalo. (le reemplaza a mi hermana)",
      "Las empanadas están listas, ¿las traigo? (las reemplaza a las empanadas)",
      "No tengo el pasaje, tengo que imprimirlo. (pronombre pegado al infinitivo)",
      "A los chicos les gusta mucho el helado. (les reemplaza a los chicos)"
    ],
    exercises: [
      { type: "choice", prompt: "El mate está listo, ya ___ preparé.", options: ["lo", "la"], answer: "lo", explain: "El mate es masculino singular, usamos 'lo'.", nivel: 45 },
      { type: "choice", prompt: "¿___ dijiste la verdad a tu mamá?", options: ["Lo", "Le"], answer: "Le", explain: "Es 'a quién' le dijiste algo, usamos 'le'.", nivel: 45 },
      { type: "choice", prompt: "La computadora es nueva, ___ compré ayer.", options: ["la", "lo"], answer: "la", explain: "La computadora es femenino singular, usamos 'la'.", nivel: 45 },
      { type: "choice", prompt: "Esos zapatos son lindos, quiero comprar___.", options: ["los", "les"], answer: "los", explain: "Reemplaza a 'esos zapatos' y va pegado al infinitivo.", nivel: 45 },
      { type: "choice", prompt: "A mis abuelos ___ mando mensajes seguido.", options: ["los", "les"], answer: "les", explain: "Es 'a quién' mando mensajes, usamos 'les'.", nivel: 45 },
      { type: "fill", prompt: "El jugo está en la heladera, ___ tomo en un rato.", accept: ["lo"], answer: "lo", explain: "El jugo es masculino singular, se reemplaza con 'lo'.", nivel: 47 },
      { type: "fill", prompt: "A Martín ___ presté mi bicicleta nueva.", accept: ["le"], answer: "le", explain: "A Martín es 'a quién', usamos 'le'.", nivel: 45 },
      { type: "fill", prompt: "Tengo tus llaves, voy a llevar___ a tu casa.", accept: ["las"], answer: "las", explain: "Reemplaza a 'tus llaves' y va pegado al infinitivo.", nivel: 46 }
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
      { type: "choice", prompt: "¿Le diste las llaves a Juan? —Sí, ___ di esta mañana.", options: ["se las", "le las"], answer: "se las", explain: "LE + LAS se transforma en SE LAS (nunca 'le las').", nivel: 81 },
      { type: "fill", prompt: "¿Me pasás la sal? —Sí, ahora ___ paso. (pasar)", accept: ["te la"], answer: "te la", explain: "Objeto indirecto (te) + objeto directo (la): te la paso.", nivel: 80 },
      { type: "choice", prompt: "No quiero que ___ digas a nadie este secreto.", options: ["se lo", "le lo"], answer: "se lo", explain: "'Le' se convierte en 'se' antes de 'lo': se lo, nunca le lo.", nivel: 80 },
      { type: "fill", prompt: "Vení, ___ explico de nuevo. (explicar)", accept: ["te lo"], answer: "te lo", explain: "Objeto indirecto (te) + objeto directo (lo): te lo explico.", nivel: 79 },
      { type: "choice", prompt: "Dale, ___ prestás la campera a ella.", options: ["se la", "le la"], answer: "se la", explain: "Le + la → se la, siempre.", nivel: 79 },
      { type: "fill", prompt: "¡Contámelo! Quiero que ___ cuentes ya. (contar)", accept: ["me lo"], answer: "me lo", explain: "Objeto indirecto (me) + objeto directo (lo): me lo cuentes.", nivel: 79 }
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
      { type: "choice", prompt: "Mañana (yo) ___ con vos sobre el proyecto. (hablar)", options: ["hablaré", "hablo"], answer: "hablaré", explain: "Acción planeada para el futuro → futuro simple: hablaré.", nivel: 40 },
      { type: "choice", prompt: "El año que viene (nosotros) ___ más plata. (tener)", options: ["tendremos", "teneremos"], answer: "tendremos", explain: "'Tener' es irregular en futuro: tendremos (no 'teneremos').", nivel: 40 },
      { type: "fill", prompt: "¿A qué hora ___ (vos) mañana? (venir)", accept: ["vendras"], answer: "vendrás", explain: "'Venir' es irregular en futuro: vendrás.", nivel: 39 },
      { type: "choice", prompt: "Ellos ___ la verdad tarde o temprano. (saber)", options: ["saberán", "sabrán"], answer: "sabrán", explain: "'Saber' es irregular en futuro: sabrán (no 'saberán').", nivel: 40 },
      { type: "choice", prompt: "___ (yo) todo lo posible para ayudarte. (hacer)", options: ["Haré", "Haceré"], answer: "Haré", explain: "'Hacer' es irregular en futuro: haré (no 'haceré').", nivel: 40 },
      { type: "fill", prompt: "Ella ___ el examen sin problemas. (aprobar)", accept: ["aprobara"], answer: "aprobará", explain: "Verbo regular en futuro: aprobará.", nivel: 39 }
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
      { type: "choice", prompt: "Si pudiera, (yo) ___ a Hungría todos los años. (viajar)", options: ["viajaría", "viajaré"], answer: "viajaría", explain: "Hipótesis → condicional: viajaría.", nivel: 43 },
      { type: "choice", prompt: "¿___ (vos) cerrar la ventana, por favor? (poder)", options: ["Podrías", "Poderías"], answer: "Podrías", explain: "'Poder' es irregular en condicional: podrías (no 'poderías').", nivel: 42 },
      { type: "fill", prompt: "Yo que vos, le ___ la verdad. (decir)", accept: ["diria"], answer: "diría", explain: "'Decir' es irregular en condicional: diría.", nivel: 42 },
      { type: "choice", prompt: "Con más tiempo, (nosotros) ___ el proyecto mejor. (hacer)", options: ["haríamos", "haceríamos"], answer: "haríamos", explain: "'Hacer' es irregular en condicional: haríamos (no 'haceríamos').", nivel: 42 },
      { type: "choice", prompt: "Me ___ mucho ir a un asado este finde. (gustar)", options: ["gustaría", "gustaré"], answer: "gustaría", explain: "Deseo cortés → condicional: gustaría.", nivel: 43 },
      { type: "fill", prompt: "¿___ (vos) ayudarme con las valijas? (poder)", accept: ["podrias"], answer: "podrías", explain: "Pedido cortés → condicional: podrías.", nivel: 41 }
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
      { type: "choice", prompt: "Este ejercicio es ___ difícil que el anterior.", options: ["más", "tan"], answer: "más", explain: "Superioridad → más + adjetivo + que.", nivel: 30 },
      { type: "choice", prompt: "Mi hermano es ___ que yo. (bueno, comparativo irregular)", options: ["más bueno", "mejor"], answer: "mejor", explain: "'Bueno' tiene comparativo irregular: mejor (no 'más bueno').", nivel: 30 },
      { type: "fill", prompt: "Ella es tan alta ___ vos.", accept: ["como"], answer: "como", explain: "Igualdad → tan + adjetivo + como.", nivel: 29 },
      { type: "choice", prompt: "Es el restaurante ___ caro de todo el barrio.", options: ["más", "tan"], answer: "más", explain: "Superlativo → el/la + más + adjetivo (+ de).", nivel: 30 },
      { type: "choice", prompt: "Mi abuelo es ___ que mi papá. (grande = edad, comparativo irregular)", options: ["más grande", "mayor"], answer: "mayor", explain: "Para edad, el comparativo irregular es mayor (no 'más grande').", nivel: 32 },
      { type: "fill", prompt: "Este flan está ___. (rico, superlativo con -ísimo)", accept: ["riquisimo"], answer: "riquísimo", explain: "Superlativo absoluto: rico → riquísimo (irregular: qu antes de í).", nivel: 30 }
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
      { type: "choice", prompt: "¿Cuál suena más natural en una charla cotidiana en Argentina?", options: ["Hoy comí temprano.", "Hoy he comido temprano."], answer: "Hoy comí temprano.", explain: "En el habla rioplatense cotidiana se prefiere el pretérito simple, incluso para hechos recientes.", nivel: 56 },
      { type: "choice", prompt: "___ (yo) toda la tarde estudiando. (pasar, forma típica rioplatense)", options: ["Pasé", "He pasado"], answer: "Pasé", explain: "Pretérito simple: la forma más natural en el Río de la Plata para hechos del día.", nivel: 56 },
      { type: "fill", prompt: "Esta mañana (vos) ___ tarde, ¿no? (levantarse, pretérito simple)", accept: ["te levantaste"], answer: "te levantaste", explain: "Pretérito simple, forma habitual rioplatense (no 'te has levantado').", nivel: 55 },
      { type: "choice", prompt: "¿Alguna vez ___ mate amargo? (probar, más natural en Argentina)", options: ["probaste", "has probado"], answer: "probaste", explain: "Para experiencias de vida, en el habla rioplatense también predomina el pretérito simple.", nivel: 56 },
      { type: "choice", prompt: "Recién ___ con tu hermana por teléfono. (hablar, hecho reciente)", options: ["hablé", "he hablado"], answer: "hablé", explain: "Hecho reciente → en Argentina, pretérito simple: hablé (no 'he hablado').", nivel: 56 },
      { type: "fill", prompt: "Todavía no ___ el informe, lo termino mañana. (terminar, uso rioplatense)", accept: ["termine"], answer: "terminé", explain: "Aunque en España se diría 'no he terminado', en Argentina es muy común 'no terminé'.", nivel: 56 }
    ]
  },
  {
    id: "conjugacion-verbos",
    title: "Conjugación de verbos",
    explain: "Acá no hay una frase con contexto: te damos un verbo, una persona y un tiempo, y vos escribís la forma conjugada. Sirve para practicar de memoria las terminaciones y los verbos irregulares más comunes, mezclando presente, pretérito indefinido, imperfecto, futuro, condicional y subjuntivo. Usamos siempre voseo (vos) en vez de tú, como se habla en Argentina. Pista en húngaro: itt nincs mondatkörnyezet — csak az ige, a személy és az idő van megadva, neked kell felidézned a ragozott alakot fejből. Ez a lecke a memorizálást gyakorolja, nem a használat megértését (azt a többi lecke tanítja).",
    examples: [
      "hablar — presente, yo → hablo",
      "tener — presente, vos → tenés",
      "hacer — pretérito indefinido, yo → hice",
      "ser — imperfecto, nosotros → éramos",
      "poder — futuro, vos → podrás"
    ],
    exercises: [
      { type: "fill", prompt: "Conjugá 'hablar' — presente, yo: ___", accept: ["hablo"], answer: "hablo", explain: "Presente regular de un verbo -AR: hablo.", nivel: 36 },
      { type: "fill", prompt: "Conjugá 'tener' — presente, vos: ___", accept: ["tenes"], answer: "tenés", explain: "Presente de vos: se acentúa la última sílaba. 'Tener' además cambia la raíz en otras personas (tengo, tiene), pero en vos queda tenés.", nivel: 36 },
      { type: "fill", prompt: "Conjugá 'hacer' — pretérito indefinido, yo: ___", accept: ["hice"], answer: "hice", explain: "'Hacer' es irregular en pretérito: hice (no 'hací').", nivel: 51 },
      { type: "choice", prompt: "Conjugá 'ir' — pretérito indefinido, ustedes:", options: ["fueron", "iyeron"], answer: "fueron", explain: "'Ir' en pretérito comparte la forma con 'ser': fueron.", nivel: 51 },
      { type: "fill", prompt: "Conjugá 'ser' — imperfecto, nosotros: ___", accept: ["eramos"], answer: "éramos", explain: "'Ser' es irregular en imperfecto: era, eras, era, éramos, eran.", nivel: 46 },
      { type: "fill", prompt: "Conjugá 'vivir' — imperfecto, ella: ___", accept: ["vivia"], answer: "vivía", explain: "Imperfecto regular de un verbo -IR: vivía.", nivel: 46 },
      { type: "choice", prompt: "Conjugá 'poder' — futuro, vos:", options: ["podrás", "poderás"], answer: "podrás", explain: "'Poder' es irregular en futuro: podrás (no 'poderás').", nivel: 42 },
      { type: "fill", prompt: "Conjugá 'estudiar' — condicional, yo: ___", accept: ["estudiaria"], answer: "estudiaría", explain: "Condicional regular: infinitivo + ía.", nivel: 46 },
      { type: "fill", prompt: "Conjugá 'decir' — condicional, ustedes: ___", accept: ["dirian"], answer: "dirían", explain: "'Decir' es irregular en condicional: dirían (no 'decirían').", nivel: 46 },
      { type: "fill", prompt: "Conjugá 'escribir' — subjuntivo presente, vos: ___", accept: ["escribas"], answer: "escribas", explain: "Subjuntivo presente de un verbo -IR: escribas.", nivel: 66 }
    ]
  }
];
