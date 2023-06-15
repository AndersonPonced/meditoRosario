const contentDiv = document.getElementById('content');
    const menuButton = document.getElementById('menuButton');
    const menuContent = document.getElementById('menuContent');

    const mysteries = [
        {
            title: "MISTERIOS GOZOSOS",
            miste: "Primer Misterio Gozoso: La Encarnación del Hijo de Dios",
            content: "<strong class='rjo'>☩</strong> «Al sexto mes el ángel Gabriel fue enviado por Dios a una ciudad de Galilea, llamada Nazaret, a una virgen desposada con un hombre llamado José, de la estirpe de David; el nombre de la virgen era María» (Lc 1,26-27).",
            miste2: "Segundo Misterio Gozoso: La Visitación de Nuestra Señora a su prima Santa Isabel",
            content2: " <strong class='rjo'>☩</strong> En aquellos días María se puso en camino y fue aprisa a la región montañosa, a una ciudad de Judá; entró en casa de Zacarías y saludó a Isabel.   Y sucedió que, en cuanto Isabel oyó el saludo de María, saltó de gozo el niño en su seno, e Isabel quedó llena de Espíritu Santo; y exclamando a voz en grito, dijo: Bendita tú entre las mujeres y bendito el fruto de tu seno» (Lc 1, 39-42)    ",
            miste3: "Tercer Misterio Gozoso: El Nacimiento del Hijo de Dios en el portal de Belén",
            content3: "<strong class='rjo'>☩</strong> «Sucedió que por aquellos días salió un edicto de César Augusto ordenando que se empadronase todo el mundo. Este primer empadronamiento tuvo lugar siendo Cirino gobernador de Siria. Iban todos a empadronarse, cada uno a su ciudad. Subió también José desde Galilea, de la ciudad de Nazaret, a Judea, a la ciudad de David, que se llama Belén, por ser él de la casa y familia de David, para empadronarse con María, su esposa, que estaba encinta. Y sucedió que, mientras ellos estaban allí, se le cumplieron los días del alumbramiento, y dio a luz a su hijo primogénito, le envolvió en pañales y le acostó en un pesebre, porque no tenían sitio en el alojamiento» (Lc 2,1-7)..",
            miste4: "Cuarto Misterio Gozoso: La presentación de Jesús en el Templo",
            content4: "<strong class='rjo'>☩</strong> «Cuando se cumplieron los ocho días para circuncidarle, se le dio el nombre de Jesús, como lo había llamado el ángel antes de ser concebido en el seno. Cuando se cumplieron los días de la purificación de ellos, según la Ley de Moisés, llevaron a Jesús a Jerusalén para presentarle al Señor, como está escrito en la Ley del Señor: Todo varón primogénito será consagrado al Señor y para ofrecer en sacrificio un par de tórtolas o dos pichones, conforme a lo que se dice en la Ley del Señor» (Lc 2, 21-24)..",
            miste5: "Quinto Misterio Gozoso: El Niño Jesús perdido y hallado en el Templo",
            content5: "<strong class='rjo'>☩</strong> «Sus padres iban todos los años a Jerusalén a la fiesta de la Pascua. Cuando tuvo doce años, subieron ellos como de costumbre a la fiesta y, al volverse, pasados los días, el niño Jesús se quedó en Jerusalén, sin saberlo sus padres...             Y sucedió que al cabo de tres días, le encontraron en el Templo sentado en medio de los maestros, escuchándoles y preguntándoles; todos los que le oían, estaban estupefactos por su inteligencia y sus respuestas» (Lc 2, 41-47).",
            miste6: "Letanías de la Virgen",
            content6: "<strong class='rjo'>☩</strong><strong class='ma'> Dios te Salve, Reina y Madre de misericordia</strong>, vida, dulzura y esperanza nuestra, Dios te salve.  A ti llamamos los desterrados hijos de Eva; a ti suspiramos, gimiendo y llorando, en este valle de lágrimas. Ea, pues, Señora, abogada nuestra, vuelve a nosotros esos tus ojos misericordiosos, y, después de este destierro, muéstranos a Jesús, fruto bendito de tu vientre. ¡Oh clementísima, oh piadosa, oh dulce Virgen María!).",
            video:'<iframe width="560" height="315" src="https://www.youtube.com/embed/eg3OVFkV34M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
        },
        {
            title: "MISTERIOS LUMINOSOS",
            miste: "Primer Misterio Luminoso: El Bautismo en el Jordán",
            content: "<strong class='rjo'>☩</strong> «Bautizado Jesús, salió luego del agua; y en esto se abrieron los cielos y vio al Espíritu de Dios que bajaba en forma de paloma y venía sobre él. Y una voz que salía de los cielos decía: Este es mi Hijo amado, en quien me complazco. (Mt 3,16-17)",
            miste2: "Segundo Misterio Luminoso: Las bodas de Caná",
            content2: "<strong class='rjo'>☩</strong> «Tres días después se celebraba una boda en Caná de Galilea y estaba allí la madre de Jesús. Fue invitado también a la boda Jesús con sus discípulos. Y, como faltara vino, porque se había acabado el vino de la boda, le dice a Jesús su madre: No tienen vino. Jesús le responde: ¿Qué tengo yo contigo, mujer? Todavía no ha llegado mi hora. Dice su madre a los sirvientes: Haced lo que él os diga». (Jn 2, 1-5).",
            miste3: "Tercer Misterio Luminoso: El anuncio del Reino de Dios",
            content3: "<strong class='rjo'>☩</strong> El tiempo se ha cumplido y el Reino de Dios está cerca; convertíos y creed en el Evangelio (Mc 1, 15).",
            miste4: "Cuarto Misterio Luminoso: La Transfiguración",
            content4: "<strong class='rjo'>☩</strong> «Seis días después, Jesús tomó consigo a Pedro, a Santiago y a su hermano Juan, y los llevó aparte, a un monte alto. Y se transfiguró delante de ellos: su rostro se puso brillante como el sol y sus vestidos se volvieron blancos como la luz» (Mt 17, 1-2).",
            miste5: "Quinto Misterio Luminoso: La institución de la Eucaristía",
            content5: "<strong class='rjo'>☩</strong> «Mientras estaban comiendo, tomó Jesús pan y lo bendijo, lo partió y, dándoselo a sus discípulos, dijo: Tomad, comed, éste es mi cuerpo (Mt 26, 26). .",
            miste6: "Letanías de la Virgen",
            content6: "<strong class='rjo'>☩</strong><strong class='ma'> Dios te Salve, Reina y Madre de misericordia</strong>, vida, dulzura y esperanza nuestra, Dios te salve.  A ti llamamos los desterrados hijos de Eva; a ti suspiramos, gimiendo y llorando, en este valle de lágrimas. Ea, pues, Señora, abogada nuestra, vuelve a nosotros esos tus ojos misericordiosos, y, después de este destierro, muéstranos a Jesús, fruto bendito de tu vientre. ¡Oh clementísima, oh piadosa, oh dulce Virgen María!).",
            video:'<iframe width="560" height="315" src="https://www.youtube.com/embed/Yw1yY3GGAoY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
        },
        {
            title: "MISTERIOS DOLOROSOS",
            miste: "Primer Misterio Doloroso: La oración en el Huerto",
            content: "<strong class='rjo'>☩</strong> «Entonces Jesús fue con ellos a un huerto, llamado Getsemaní, y dijo a sus discípulos: Sentaos aquí mientras voy a orar. Y tomando consigo a Pedro y a los dos hijos de Zebedeo, comenzó a sentir tristeza y angustia. Entonces les dijo: Mi alma está triste hasta el punto de morir; quedaos aquí y velad conmigo. Y adelantándose un poco, cayó rostro en tierra, y suplicaba así: Padre mío, si es posible, que pase de mí esta copa, pero no sea como yo quiero, sino como quieras tú» (Mt 26, 36-39).",
            miste2: "Segundo Misterio Doloroso: La flagelación de Jesús atado a la columna",
            content2: "<strong class='rjo'>☩</strong> «Pilato puso en libertad a Barrabás; y a Jesús, después de haberlo hecho azotar, lo entregó para que fuera crucificado» (Mt 27, 26).",
            miste3: "Tercer Misterio Doloroso: La coronación de espinas",
            content3: "<strong class='rjo'>☩</strong> «Entonces los soldados del procurador llevaron consigo a Jesús al pretorio y reunieron alrededor de él a toda la cohorte. Lo desnudaron y le echaron encima un manto de púrpura y, trenzando una corona de espinas, se la pusieron sobre la cabeza, y en su mano derecha una caña, y doblando la rodilla delante de él, le hacían burla diciendo: Salve, Rey de los judíos». (Mt 27, 27-29)",
            miste4: "Cuarto Misterio Doloroso: Jesús con la Cruz a cuestas camino del Calvario",
            content4: "<strong class='rjo'>☩</strong> «Y obligaron a uno que pasaba, a Simón de Cirene, que volvía del campo, el padre de Alejandro y de Rufo, a que llevara su cruz. Lo condujeron al lugar del Gólgota, que quiere decir de la Calavera» (Mc 15, 21-22).",
            miste5: "Quinto Misterio Doloroso: La crucifixión y muerte de Jesús",
            content5: "<strong class='rjo'>☩</strong> «Llegados al lugar llamado La Calavera, le crucificaron allí a él y a los dos malhechores, uno a la derecha y otro a la izquierda. Jesús decía: Padre, perdónales, porque no saben lo que hacen... Era ya eso de mediodía cuando, al eclipsarse el sol, hubo oscuridad sobre toda la tierra hasta la media tarde. El velo del Santuario se rasgó por medio y Jesús, dando un fuerte grito dijo: Padre, en tus manos pongo mi espíritu y, dicho esto, expiró» (Lc  23, 33-46).",
            miste6: "Letanías de la Virgen",
            content6: "<strong class='rjo'>☩</strong><strong class='ma'> Dios te Salve, Reina y Madre de misericordia</strong>, vida, dulzura y esperanza nuestra, Dios te salve.  A ti llamamos los desterrados hijos de Eva; a ti suspiramos, gimiendo y llorando, en este valle de lágrimas. Ea, pues, Señora, abogada nuestra, vuelve a nosotros esos tus ojos misericordiosos, y, después de este destierro, muéstranos a Jesús, fruto bendito de tu vientre. ¡Oh clementísima, oh piadosa, oh dulce Virgen María!).",
            video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/h35SyyBoRX0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
        },
        {
            title: "MISTERIOS GLORIOSOS",
            miste: "Primer Misterio Glorioso: La resurrección del Hijo de Dios",
            content: "<strong class='rjo'>☩</strong> «El primer día de la semana, muy de mañana, fueron al sepulcro llevando los aromas que habían preparado. Pero encontraron que la piedra había sido retirada del sepulcro, y entraron, pero no hallaron el cuerpo del Señor Jesús. No sabían qué pensar de esto, cuando se presentaron ante ellas dos hombres con vestidos resplandecientes. Ellas, despavoridas, miraban al suelo, y ellos les dijeron: ¿Por qué buscáis entre los muertos al que está vivo? No está aquí, ha resucitado» (Lc 24, 1-6).   ",
            miste2: "Segundo Misterio Glorioso: La Ascensión del Señor al cielo",
            content2: "<strong class='rjo'>☩</strong> «El Señor Jesús, después de hablarles, ascendió al cielo y se sentó a la derecha de Dios» (Mc 16, 19). ",
            miste3: "Tercer Misterio Glorioso: La venida del Espíritu Santo",
            content3: "<strong class='rjo'>☩</strong> «Al llegar el día de Pentecostés, estaban todos reunidos en un mismo lugar. De repente vino del cielo un ruido como el de una ráfaga de viento impetuoso, que llenó toda la casa en la que se encontraban. Se les aparecieron unas lenguas como de fuego que se repartieron y se posaron sobre cada uno de ellos; quedaron todos llenos del Espíritu Santo y se pusieron a hablar en otras lenguas, según el Espíritu les concedía expresarse» (Hch 2, 1-4). ",
            miste4: "Cuarto Misterio Glorioso: La Asunción de María al cielo",
            content4: "<strong class='rjo'>☩</strong> «Todas las generaciones me llamarán bienaventurada porque el Señor ha hecho obras grandes en mí» (Lc 1, 48-49). ",
            miste5: "Quinto Misterio Glorioso: La coronación de María como Reina y Señora de todo lo creado",
            content5: "<strong class='rjo'>☩</strong> «Una gran señal apareció en el cielo: una mujer, vestida de sol, con la luna bajo sus pies, y una corona de doce estrellas sobre su cabeza» (Ap 12, 1).",
            miste6: "Letanías de la Virgen",
            content6: "<strong class='rjo'>☩</strong><strong class='ma'> Dios te Salve, Reina y Madre de misericordia</strong>, vida, dulzura y esperanza nuestra, Dios te salve.  A ti llamamos los desterrados hijos de Eva; a ti suspiramos, gimiendo y llorando, en este valle de lágrimas. Ea, pues, Señora, abogada nuestra, vuelve a nosotros esos tus ojos misericordiosos, y, después de este destierro, muéstranos a Jesús, fruto bendito de tu vientre. ¡Oh clementísima, oh piadosa, oh dulce Virgen María!). ",
            video:'<iframe width="560" height="315" src="https://www.youtube.com/embed/F4MhIw1jaBw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
        }
    ];

    function showContent(mysteryIndex) {
        const mystery = mysteries[mysteryIndex];
        const content = `
        <div class='show'>
            <h1>${mystery.title}</h1>
            <h2 class='misterios'>${mystery.miste}</h2>
            <p class='contenido'>${mystery.content}</p>
            <h2 class='misteriosin'>${mystery.miste2}</h2>
            <p class='contenido'>${mystery.content2}</p>
            <h2 class='misteriosin'>${mystery.miste3}</h2>
            <p class='contenido'>${mystery.content3}</p>
            <h2 class='misteriosin'>${mystery.miste4}</h2>
            <p class='contenido'>${mystery.content4}</p>
            <h2 class='misteriosin'>${mystery.miste5}</h2>
            <p class='contenido'>${mystery.content5}</p>
            <h2 class='misterios'>${mystery.miste6}</h2>
            <p class='contenido'>${mystery.content6}</p>
            <div class='vid'>${mystery.video}</div>
            </div>
        `;
        contentDiv.innerHTML = content;
        menuButton.style.display = 'block';
    }

    function showMenu() {
        contentDiv.innerHTML = '';
        menuButton.style.display = 'none';
    }

    function toggleMenu() {
    var nav = document.querySelector('nav');
    nav.classList.toggle('active');
}


function toggleImage() {
    var imageContainer = document.getElementById("imageContainer");
    imageContainer.classList.toggle("hidden");
}