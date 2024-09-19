<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Espacios de trabajo
    p.mb-5(data-aos="fade-right") El espacio de trabajo de Photoshop viene subdividido en diversos paneles y herramientas, entre los principales se encuentran:
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-down")
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 1.] Espacio de trabajo
        .row
          .col-12
            .p-4.bg-c10
              figure
                img(src="@/assets/curso/tema2/img1.png", style="width: 900px", alt="Imagen que presenta el espacio de trabajo, compuesto por el marco de aplicación, la barra de aplicaciones, los paneles, el panel de herramientas y la ventana documento.").m-auto
    p.mb-4(data-aos="fade-right") A continuación, se hace una breve descripción dichos elementos:
    .row.bg-c11.mb-5
      .col-12
        .px-5
          .row.align-items-center.mb-5
            .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
              ol.lista-ol--cuadro
                li.d-flex
                  .lista-ol--cuadro__vineta
                    span A.
                  |
                  p.mb-0 #[b Ventana documento] muestra el archivo en el que se trabaja. Las Ventanas documento se pueden organizar como fichas y, en ciertos casos, también se pueden agrupar y acoplar.
                li.d-flex
                  .lista-ol--cuadro__vineta
                    span B.
                  |
                  p.mb-0 #[b El Marco de aplicación] agrupa todos los elementos del espacio de trabajo en una ventana única e integrada que permite tratar la aplicación como una sola unidad. Si mueve el marco de aplicación o alguno de sus elementos o si cambia su tamaño, todos los elementos que integra responden en consecuencia para evitar su superposición. Los paneles no desaparecen si cambia de aplicación o si hace clic sin querer fuera de esta. Cuando trabaje con dos o más aplicaciones, puede colocarlas una al lado de la otra en la pantalla o en varios monitores.
              p También encontramos el menú principal, en el cual se encuentran diversas opciones con las que puede trabajar.
              figure
                img(src="@/assets/curso/tema2/img5.png", style="width: 650px", alt="").m-auto
            .col-lg-4(data-aos="fade-left")
              figure
                img(src="@/assets/curso/tema2/img4.png", style="width: 390px", alt="").m-auto
          p.mb-5(data-aos="fade-right") En este menú se encuentran diversas opciones con las que puede trabajar, a continuación, se explican los diferentes comandos que tiene:
          .row.align-items-center.mb-5
            .col-lg-9.order-2.order-lg-1(data-aos="fade-right")
              TabsA.color-primario
                .tarjeta.color-acento-botones.p-4(titulo="Archivo")
                  .row
                    .col-lg-6.mb-4.mb-lg-0
                      .row.mb-4
                        .col-auto.bg-c6
                          .p-2
                            p.mb-0 #[b Archivo]
                      p.mb-0 Dentro de este menú se encuentran diversas acciones que están vinculadas al Archivo, tales como: #[b Guardar], #[b Guardar como], #[b Imprimir...], #[b Exportar], entre otras.
                    .col-lg-6
                      figure
                        img(src="@/assets/curso/tema2/img6.png", style="width: 400px", alt="").m-auto
                .tarjeta.color-acento-botones.p-4(titulo="Edición")
                  .row
                    .col-lg-6.mb-4.mb-lg-0
                      .row.mb-4
                        .col-auto.bg-c6
                          .p-2
                            p.mb-0 #[b Edición]
                      p.mb-0 Dentro de este menú se encuentran los comandos que son útiles para la edición, tales como: #[b Copiar], #[b Cortar], #[b Pegar y Transformar]; la mayoría se habilitarán cuando se haga una selección activa.
                    .col-lg-6
                      figure
                        img(src="@/assets/curso/tema2/img7.png", style="width: 400px", alt="").m-auto
                .tarjeta.color-acento-botones.p-4(titulo="Imagen")
                  .row
                    .col-lg-6.mb-4.mb-lg-0
                      .row.mb-4
                        .col-auto.bg-c6
                          .p-2
                            p.mb-0 #[b Imagen]
                      p.mb-0 Este es el menú donde se encuentra lo que respecta a la parte de modo de color de imagen RGB, escala de grises, ajustes de tonalidad, saturación, desaturar y brillo, también se emplean en la realización de cambios de tamaño de la imagen, el lienzo, la resolución, entre otros.
                    .col-lg-6
                      figure
                        img(src="@/assets/curso/tema2/img8.png", style="width: 400px", alt="").m-auto
                .tarjeta.color-acento-botones.p-4(titulo="Capa")
                  .row
                    .col-lg-6.mb-4.mb-lg-0
                      .row.mb-4
                        .col-auto.bg-c6
                          .p-2
                            p.mb-0 #[b Capa]
                      p.mb-0 En este menú encontrará los comandos que hacen parte del manejo de capas tales como: capas de relleno, agrupar capas, duplicar y exportar.
                    .col-lg-6
                      figure
                        img(src="@/assets/curso/tema2/img9.png", style="width: 400px", alt="").m-auto
                .tarjeta.color-acento-botones.p-4(titulo="Texto")
                  .row
                    .col-lg-6.mb-4.mb-lg-0
                      .row.mb-4
                        .col-auto.bg-c6
                          .p-2
                            p.mb-0 #[b Texto]
                      p.mb-0 En este menú se encuentran los comandos que hacen referencia a las fuentes (textos) que van a manejar en Photoshop, tales como: Añadir fuentes de #[b Typekit...] (servicio de subscripción que ofrece Adobe para su uso) y el acceso a los paneles de fuente, entre otros.
                    .col-lg-6
                      figure
                        img(src="@/assets/curso/tema2/img10.png", style="width: 400px", alt="").m-auto
            .col-lg-3.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
              figure
                img(src="@/assets/curso/tema2/img1.svg", style="width: 300px", alt="").m-auto
          .row.align-items-center.mb-5
            .col-lg-3.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src="@/assets/curso/tema2/img2.svg", style="width: 300px", alt="").m-auto
            .col-lg-9(data-aos="fade-left")
              TabsA.color-primario
                .tarjeta.color-acento-botones.p-4(titulo="Selección")
                  .row
                    .col-lg-6.mb-4.mb-lg-0
                      .row.mb-4
                        .col-auto.bg-c6
                          .p-2
                            p.mb-0 #[b Selección]
                      p.mb-0 Este menú hace referencia a las herramientas de selección como: #[b Invertir], #[b Deseleccionar], #[b Modificar], entre otras.
                    .col-lg-6
                      figure
                        img(src="@/assets/curso/tema2/img11.png", style="width: 400px", alt="").m-auto
                .tarjeta.color-acento-botones.p-4(titulo="Filtro")
                  .row
                    .col-lg-6.mb-4.mb-lg-0
                      .row.mb-4
                        .col-auto.bg-c6
                          .p-2
                            p.mb-0 #[b Filtro]
                      p.mb-0 En este menú encontrará diversos efectos que puede aplicar a sus proyectos.
                    .col-lg-6
                      figure
                        img(src="@/assets/curso/tema2/img12.png", style="width: 400px", alt="").m-auto
                .tarjeta.color-acento-botones.p-4(titulo="Vista")
                  .row
                    .col-lg-6.mb-4.mb-lg-0
                      .row.mb-4
                        .col-auto.bg-c6
                          .p-2
                            p.mb-0 #[b Vista]
                      p.mb-0 En este menú encuentra las acciones para agregar líneas guías, las cuales le sirven para delimitar su área de trabajo, también cuenta con los comandos de #[b Aumentar y Reducir].
                    .col-lg-6
                      figure
                        img(src="@/assets/curso/tema2/img13.png", style="width: 400px", alt="").m-auto
                .tarjeta.color-acento-botones.p-4(titulo="Ventana")
                  .row
                    .col-lg-6.mb-4.mb-lg-0
                      .row.mb-4
                        .col-auto.bg-c6
                          .p-2
                            p.mb-0 #[b Ventana]
                      p.mb-0 En este menú encuentra las acciones para agregar líneas guías, las cuales le sirven para delimitar su área de trabajo, también cuenta con los comandos de Aumentar y Reducir.
                    .col-lg-6
                      figure
                        img(src="@/assets/curso/tema2/img14.png", style="width: 400px", alt="").m-auto
                .tarjeta.color-acento-botones.p-4(titulo="Ayuda")
                  .row
                    .col-lg-6.mb-4.mb-lg-0
                      .row.mb-4
                        .col-auto.bg-c6
                          .p-2
                            p.mb-0 #[b Ayuda]
                      p.mb-0 En este menú encuentra el apoyo que le brinda Adobe para el uso de sus herramientas, bien sea en local o una búsqueda en línea.
                    .col-lg-6
                      figure
                        img(src="@/assets/curso/tema2/img15.png", style="width: 400px", alt="").m-auto
          ol.lista-ol--cuadro.mb-5(data-aos="fade-down")
            li.d-flex
              .lista-ol--cuadro__vineta
                span C.
              |
              p.mb-0 #[b La barra aplicación] de la parte superior contiene un conmutador de espacio de trabajo, menús (solo en Windows) y otros controles de la aplicación. En ciertos productos para Mac, puede mostrarla u ocultarla con el menú Ventana.
          .row.align-items-center.mb-5
            .col-lg-3.mb-5.mb-lg-0(data-aos="fade-right")
              figure
                img(src="@/assets/curso/tema2/img16.png", style="width: 300px", alt="").m-auto
            .col-lg-7.mb-4.mb-lg-0(data-aos="fade-up")
              ol.lista-ol--cuadro
                li.d-flex
                  .lista-ol--cuadro__vineta
                    span D.
                  |
                  p.mb-0 #[b El panel Herramientas] incluye utilidades para crear y editar imágenes, ilustraciones, elementos de página, etc. Las herramientas relacionadas están agrupadas. Este menú es el más utilizado por los usuarios de Photoshop, tanto a nivel profesional como principiante, porque es simple, dinámico, claro y de fácil manejo para el usuario; está ubicado al lado izquierdo del programa y tiene ciertas herramientas que cuentan con característica seleccionables que se encuentran en el menú contextual Opciones, algunas poseen un menú desplegable y se pueden identificar porque tienen un ícono en forma de triángulo pequeño, ubicado en la parte inferior derecha de la herramienta, dicho menú se despliega dándole clic.
            .col-lg-2(data-aos="fade-left")
              figure
                img(src="@/assets/curso/tema2/img3.svg", style="width: 200px", alt="").m-auto
          .row.justify-content-center
            .col-lg-10(data-aos="fade-right")
              .row.align-items-center
                .col-lg-6.mb-4.mb-lg-0
                  ol.lista-ol--cuadro
                    li.d-flex
                      .lista-ol--cuadro__vineta
                        span E.
                      |
                      p.mb-0 #[b Los paneles] ayudan a controlar y modificar el trabajo. Los paneles se pueden agrupar, apilar o acoplar.
                  p Aquí encontramos el panel de control, el cual se encuentra ubicado en la parte superior derecha de Adobe Photoshop, también se puede acceder al menú desde Ventana / Color, en este panel encuentra los valores frontal y de fondo actuales, además puede modificar los valores de color utilizando diferentes muestras.
                  p.mb-0 Este panel de color se encuentra subdivido en 4 paneles: #[b Color], #[b Muestras], #[b Degradados y Motivos].
                .col-lg-6
                  .row.justify-content-center
                    .col-10.col-lg-12
                      .p-4.bg-c10
                        figure
                          img(src="@/assets/curso/tema2/img17.png", style="width: 900px", alt="").m-auto
    p.mb-5(data-aos="fade-right") El panel de color se divide en color frontal, color de fondo, regulador y curva de color.
    .row.justify-content-center.mb-5
      .col-lg-10.mb-5(data-aos="fade-right")
        .p-4.bg-c10
          figure
            img(src="@/assets/curso/tema2/img18.png", style="width: 900px", alt="Imagen que presenta el panel de color,.").m-auto
      .col-lg-10.mb-5(data-aos="fade-left")
        p.mb-0 Al panel de muestras se puede acceder desde #[b Ventana / Muestras], en este se almacenan los colores que se utilizan con frecuencia y además puede añadir, eliminar muestras o bibliotecas para ser usadas en los diversos proyectos a desarrollar.
      .col-lg-10(data-aos="fade-right")
        .p-4.bg-c10
          figure
            img(src="@/assets/curso/tema2/img19.png", style="width: 460px", alt="").m-auto
    p.mb-5(data-aos="fade-right") En los paneles también encontramos el panel de capas, el cual está subdividido en tres pestañas: Capas, Canales y Trazados; el manejo de las capas es sin duda un factor importante a la hora de trabajar, puesto que facilita la forma de trabajar con diversos objetos, a continuación, se hará una breve descripción de dichos paneles:
    .row.bg-c12(data-aos="fade-down")
      .col-12
        .p-4.p-lg-5
          .tarjeta.tarjeta--azul1
            .p-5
              SlyderA(tipo="b")
                .row.align-items-center
                  .col-lg-7.mb-4.mb-lg-0
                    p.fs-5 #[b Capas]
                    p Es una herramienta esencial que optimiza el desarrollo de trabajos con esta aplicación, el manejo de capas se asemeja a los acetatos porque son transparentes y permiten visualizar lo que se encuentra debajo; además, deja mover las capas de un lugar a otro sin necesidad de hacer cambios sobre las otras capas y elementos que estas poseen.
                    p.mb-0 Las capas sirven para realizar diversas acciones como agregar a una imagen: textos, efectos, otras imágenes y elementos vectoriales, con el fin de realizar un montaje fotográfico.
                  .col-lg-5
                    figure
                      img(src="@/assets/curso/tema2/img21.png", style="width: 400px", alt="").m-auto
                .row.align-items-center
                  .col-lg-7.mb-4.mb-lg-0
                    p.fs-5 #[b Canales]
                    p.mb-0 Son imágenes en escala de grises que almacenan diversos tipos de datos, los canales de información de color se crean de forma automática al momento de insertar una imagen en el área de trabajo de Photoshop, el tipo de color determina el número de canales que se establecerán; pero si una imagen es RGB, se creará un canal para cada uno de los tres colores (rojo, verde y azul).
                  .col-lg-5
                    figure
                      img(src="@/assets/curso/tema2/img22.png", style="width: 400px", alt="").m-auto
                .row.align-items-center
                  .col-lg-7.mb-4.mb-lg-0
                    p.fs-5 #[b Trazados]
                    p En este panel se encuentra el nombre y una pequeña miniatura de cada trazado que se realice en el proyecto a desarrollar, para verlos debe seleccionar dicho panel.
                    p.mb-0 Un trazado está compuesto por uno o varios segmentos rectos o curvos, y por los puntos de ancla que marcan el final del trazado; en los segmentos curvos se encuentran dos líneas de dirección con las que se determina la trayectoria y el tamaño que se le dará al segmento curvo.
                  .col-lg-5
                    figure
                      img(src="@/assets/curso/tema2/img23.png", style="width: 400px", alt="").m-auto
    Separador
    #t_2_1
    .titulo-segundo.color-acento-contenido
      h2 2.1 Personalización del área de trabajo
    .row.align-items-center.mb-5
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        p El espacio de trabajo de Photoshop es muy sencillo al momento de ser usado, porque es simple, intuitivo y consta de diversas opciones que facilitan el uso de esta herramienta. Además, se pueden crear y manipular diversos documentos utilizando barras, menús y ventanas.
        .row.mb-3
          .col-12
            .p-3.bg-c2
              .row.align-items-center
                .col-md-auto
                  figure
                    img(src="@/assets/curso/tema2/img4.svg", style="width: 60px", alt="").m-auto
                .col
                  p.mb-0 La suite de Adobe posee un espacio de trabajo similar en todas sus aplicaciones, esto con el fin de facilitar el cambio de un programa a otro sin perder la cabeza, además, le permite seleccionar diversos espacios de trabajo preestablecidos en Photoshop o crear uno propio.
        p.mb-0 Para crear, cargar y personalizar un espacio de trabajo realice los siguientes pasos.
      .col-lg-4(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema2/img24.png", style="width: 500px", alt="").m-auto
    ol.lista-ol--cuadro.mb-5(data-aos="fade-down")
      li.d-flex
        .lista-ol--cuadro__vineta
          span A.
        |
        p.mb-0 Seleccione la pestaña #[b Ventana].
      li.d-flex
        .lista-ol--cuadro__vineta
          span A.
        |
        p.mb-0 Dé clic en #[b Espacio de trabajo].
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-left")
        .p-4.bg-c10
          figure
            img(src="@/assets/curso/tema2/img25.png", style="width: 700px", alt="").m-auto
    p.mb-5(data-aos="fade-right") Después de ubicarse en los espacios de trabajo, puede observar los que trae por defecto Photoshop, los cuales son:
    .row.bg-c12.mb-5(data-aos="fade-down")
      .col-12
        .p-4.p-lg-5
          .tarjeta.tarjeta--azul1
            .p-5
              SlyderA(tipo="b")
                .row
                  .col-12
                    p #[b Aspectos esenciales (por defecto).]
                    figure
                      img(src="@/assets/curso/tema2/img26.png", style="width: 1000px", alt="").m-auto
                .row
                  .col-12
                    p #[b Gráfico y web.]
                    figure
                      img(src="@/assets/curso/tema2/img27.png", style="width: 1000px", alt="").m-auto
                .row
                  .col-12
                    p #[b Movimiento.]
                    figure
                      img(src="@/assets/curso/tema2/img28.png", style="width: 1000px", alt="").m-auto
                .row
                  .col-12
                    p #[b Pintura.]
                    figure
                      img(src="@/assets/curso/tema2/img29.png", style="width: 1000px", alt="").m-auto
                .row
                  .col-12
                    p #[b Fotografía.]
                    figure
                      img(src="@/assets/curso/tema2/img30.png", style="width: 1000px", alt="").m-auto
    p.mb-5(data-aos="fade-right") Para crear un espacio de trabajo personalizado, tenga en cuenta los siguientes pasos:
    .row.align-items-center
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
        .p-4.bg-c13
          .row.align-items-center
            .col-md-auto
              figure
                img(src="@/assets/curso/tema2/img5.svg", style="width: 120px", alt="").m-auto
            .col
              ul.lista-ul.mb-0
                li.d-flex.mb-0
                  i.fas.fa-pencil-alt(style="color: #00AEEF")
                  |
                  p.mb-0 Dé clic en #[b Ventana].
                li.d-flex.mb-0
                  i.fas.fa-pencil-alt(style="color: #00AEEF")
                  |
                  p.mb-0 Seleccione #[b Espacio de trabajo].
                li.d-flex.mb-0
                  i.fas.fa-pencil-alt(style="color: #00AEEF")
                  |
                  p.mb-0 Elija #[b Nuevo espacio de trabajo].
                li.d-flex.mb-0
                  i.fas.fa-pencil-alt(style="color: #00AEEF")
                  |
                  p.mb-0 Área para renombrar el espacio de trabajo.
                li.d-flex.mb-0
                  i.fas.fa-pencil-alt(style="color: #00AEEF")
                  |
                  p.mb-0 Dé clic en la opción #[b Guardar].
      .col-lg-5(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema2/img31.png", style="width: 500px", alt="").m-auto
    Separador
    #t_2_2
    .titulo-segundo.color-acento-contenido
      h2 2.2 Disposición de paneles
    p.mb-5(data-aos="fade-right") Además de crear un espacio de trabajo personalizado, le permite mostrar u ocultar los paneles a voluntad. A continuación, se hace una breve descripción de cómo realizar dichas acciones:
    .row.justify-content-center
      .col-11.col-md-8.col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        .p-4.bg-c5
          .row.justify-content-center.mb-4
            .col-auto.bg-c6
              .p-2
                p.mb-0 #[b Mostrar u ocultar paneles]
          p.text-center.mb-0 Para ocultar o mostrar los paneles, presione la tecla #[b Tabular], entonces se ocultarán los paneles, incluyendo la barra de herramientas; para ocultar los paneles excepto la barra de herramientas y el panel de control, se debe pulsar Mayús + Tabular.
      .col-11.col-md-8.col-lg-4.mb-4.mb-lg-0(data-aos="fade-left")
        .p-4.bg-c5
          .row.justify-content-center.mb-4
            .col-auto.bg-c6
              .p-2
                p.mb-0 #[b Opciones de paneles]
          p.text-center Al dar clic en el siguiente ícono que se encuentra en la parte superior derecha de cada panel, se despliega el respectivo menú.
          figure
            img(src="@/assets/curso/tema2/img32.png", style="width: 200px", alt="").m-auto
      .col-11.col-md-8.col-lg-4(data-aos="fade-up")
        .p-4.bg-c5
          .row.justify-content-center.mb-4
            .col-auto.bg-c6
              .p-2
                p.mb-0 #[b Acoplamiento de ventanas]
          p.text-center.mb-0 Se pueden cargar, ya sea en los menús contextuales o aparecer como ventanas flotantes en el espacio de trabajo; los paneles se pueden acoplar o desacoplar desde su posición preestablecida, esto se hace arrastrándolos por la parte superior derecha y moviéndolos a la parte inferior o agregándolo a otro panel.
    Separador
    #t_2_3
    .titulo-segundo.color-acento-contenido
      h2 2.3 Crear un nuevo documento con Photoshop
    p.mb-5(data-aos="fade-right") Para crear un nuevo documento, puede hacerlo de las siguientes maneras:
    .row.mb-4
      .col-lg-6.mb-4.mb-lg-0(data-aos="fade-right")
        ul.lista-ul
          li.d-flex.mb-0
            i.fas.fa-pencil-alt(style="color: #00AEEF")
            |
            p.mb-0 En la pantalla de inicio del programa.
          li.d-flex.mb-0
            i.fas.fa-pencil-alt(style="color: #00AEEF")
            |
            p.mb-0 Dar clic en el botón azul #[b Archivo Nuevo].
        .row
          .col-12
            .p-4.bg-c10
              figure
                img(src="@/assets/curso/tema2/img33.png", style="width: 460px", alt="").m-auto
      .col-lg-6(data-aos="fade-left")
        ul.lista-ul
          li.d-flex.mb-0
            i.fas.fa-pencil-alt(style="color: #00AEEF")
            |
            p.mb-0 Ir a #[b Archivo].
          li.d-flex.mb-0
            i.fas.fa-pencil-alt(style="color: #00AEEF")
            |
            p.mb-0 Dar clic en #[b Nuevo] o utilizar los comandos: #[b (Ctrl + N)] o en Mac #[b (Cmd + N)].
        .row
          .col-12
            .p-4.bg-c10
              figure
                img(src="@/assets/curso/tema2/img34.png", style="width: 460px", alt="").m-auto
    .row.justify-content-center
      .col-lg-10
        p.mb-4(data-aos="fade-right") Al momento de realizar esta acción, aparecerá la ventana de personalización del documento, allí puede configurar los parámetros, como ancho, alto, tipo de color y fondo del lienzo.
        .row.mb-4(data-aos="fade-down")
          .col-12
            .p-4.bg-c10
              figure
                img(src="@/assets/curso/tema2/img35.png", style="width: 840px", alt="").m-auto
        p(data-aos="fade-right") Los ajustes de los documentos comprenden ancho y alto, y se pueden manejar en pixeles, pulgadas, centímetros, entre otras.
        p.mb-0(data-aos="fade-right") La resolución varía de acuerdo al trabajo que se esté realizando, cabe aclarar que hay imágenes que tienen su propia resolución, independiente de la que se le coloque al documento.
    Separador
    #t_2_4
    .titulo-segundo.color-acento-contenido
      h2 2.4 Abrir imágenes
    .row
      .col-lg-6.mb-4.mb-lg-0(data-aos="fade-right")
        p Para abrir una imagen tenga en cuenta los siguientes pasos:
        ul.lista-ul
          li.d-flex.mb-0
            i.fas.fa-pencil-alt(style="color: #00AEEF")
            |
            p.mb-0 Ir a #[b Archivo].
          li.d-flex.mb-0
            i.fas.fa-pencil-alt(style="color: #00AEEF")
            |
            p.mb-0 Dar clic en #[b Abrir] o utilizar comandos: #[b (Ctrl + O)] o en Mac #[b (Cmd + O)].
        p.mb-0.ms-4 Ubique el archivo en su computador.
        p.mb-0.ms-4 Seleccione la imagen que desea abrir.
        p.mb-0.ms-4 Dé clic en #[b Abrir].
      .col-lg-6(data-aos="fade-left")
        .row
          .col-12
            .p-4.bg-c10
              figure
                img(src="@/assets/curso/tema2/img36.png", style="width: 450px", alt="").m-auto
    Separador
    #t_2_5
    .titulo-segundo.color-acento-contenido
      h2 2.5 Menú contextual
    .row.align-items-center.mb-5
      .col-lg-9.order-2.order-lg-1(data-aos="fade-right")
        p Hace referencia al menú que se despliega cuando se selecciona una herramienta y se hace clic derecho sobre el lienzo; al realizar esta acción, se despliegan una serie de comandos que le permitirán acceder a ciertas funciones de manera fácil.
        p Es importante tener en cuenta que las paletas poseen menús contextuales como lo son la paleta de capa y de color.
        p.mb-0 A continuación, se muestran algunos ejemplos de menús contextuales, según la herramienta que se tenga seleccionada:
      .col-lg-3.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema2/img6.svg", style="width: 400px", alt="").m-auto
    .row
      .col-12
        .p-4.p-lg-5.bg-c14
          p.mb-5(data-aos="fade-right") Si selecciona la herramienta de Marco rectangular y se da clic derecho, emerge el menú contextual que da la opción de duplicar la capa, convertir en objeto inteligente, entre otras.
          figure.mb-5(data-aos="fade-up")
            img(src="@/assets/curso/tema2/img37.png", style="width: 640px", alt="").m-auto
          p.mb-5(data-aos="fade-left") Pero si selecciona la herramienta Pincel, saldrá el menú contextual que le permite seleccionar el tamaño, dureza y tipo de punta del pincel.
          figure.mb-5(data-aos="fade-down")
            img(src="@/assets/curso/tema2/img38.png", style="width: 640px", alt="").m-auto
          p.mb-5(data-aos="fade-right") Los paneles de capas, color y estilos, también poseen menús contextuales, los cuales se activan dando clic derecho sobre dicho panel.
          figure(data-aos="fade-up")
            img(src="@/assets/curso/tema2/img39.png", style="width: 640px", alt="").m-auto
    Separador
    #t_2_6
    .titulo-segundo.color-acento-contenido
      h2 2.6 Tamaño y peso de los archivos
    .row
      .col-12
        .p-4.bg-c15
          .row.align-items-center
            .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
              .row.mb-3
                .col-md-auto.mb-4.mb-md-0
                  figure
                    img(src="@/assets/curso/tema2/img8.svg", style="width: 100px", alt="").m-auto
                .col
                  p.mb-0 El tamaño de archivo de una imagen es el tamaño digital del archivo de imagen calculado en #[i kilobytes] (K), #[i megabytes] (MB) o #[i gigabytes] (GB). El tamaño de archivo es proporcional a las dimensiones en píxeles de la imagen. Las imágenes con más píxeles muestran mejor los detalles a un tamaño de impresión determinado, pero necesitan mayor espacio en disco para su almacenamiento.
              p.mb-0 Otro factor que afecta al tamaño de archivo es el formato del mismo. En función de los distintos métodos de compresión que se usan en los formatos de archivo GIF, JPEG, PNG y TIFF, los tamaños de los archivos pueden ser muy distintos, aun teniendo las mismas dimensiones en píxeles.
            .col-lg-4(data-aos="fade-left")
              figure
                img(src="@/assets/curso/tema2/img9.svg", style="width: 350px", alt="").m-auto

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
