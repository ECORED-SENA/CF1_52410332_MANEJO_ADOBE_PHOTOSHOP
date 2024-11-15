<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Conceptos básicos
    .row
      .col-lg-9.mb-4.mb-lg-0(data-aos="fade-right")
        .p-4.bg-c4.h-100
          .row.align-items-center
            .col-md-auto.mb-4.mb-md-0
              figure
                img(src="@/assets/curso/tema1/img1.svg", style="width: 70px", alt="").m-auto
            .col
              p.mb-0 #[b Photoshop] es una aplicación que facilita el retoque y el perfeccionamiento de las fotos, ya sea a nivel profesional o #[i amateur], brindando una amplia cantidad de herramientas que le facilitan al usuario la creación y composición de fotografías.
      .col-lg-3(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema1/img1.png", style="width: 350px", alt="").m-auto
    Separador
    #t_1_1
    .titulo-segundo.color-acento-contenido
      h2 1.1 ¿Para qué sirve?
    .row.align-items-center.mb-5
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        p Photoshop es un #[i software] utilizado por diseñadores, fotógrafos e ilustradores, el cual sirve para la creación y adecuación de imágenes e ilustraciones; esta herramienta es ampliamente utilizada en el sector publicitario y fotográfico, porque permite el perfeccionamiento y adaptación de imágenes según las necesidades creativas que requiera la pieza gráfica. Además, se destaca por contar con una interfaz de usuario intuitiva que se ha convertido en un estándar en la industria de las artes gráficas.
        p.mb-4 A continuación, se describen los diversos usos y beneficios que posee la aplicación de Photoshop en diversas profesiones:
        .row.justify-content-center
          .col-md-8.col-lg-6.mb-4.mb-lg-0
            .p-4.bg-c5.shadow
              figure.mb-4
                img(src="@/assets/curso/tema1/img2.svg", style="width: 100px", alt="").m-auto
              p.text-center #[b Diseñadores]
              p.text-center.mb-0 Photoshop le permite realizar ilustraciones de calidad por medio de las herramientas de edición, texto, video, 3D, objetos inteligentes y automatización de tareas, permitiéndole crear efectivas y llamativas piezas gráficas.
          .col-md-8.col-lg-6
            .p-4.bg-c5.shadow
              figure.mb-4
                img(src="@/assets/curso/tema1/img3.svg", style="width: 100px", alt="").m-auto
              p.text-center #[b Ilustradores]
              p.text-center.mb-0 Photoshop le permite emplear el #[i mouse] como si fuera un pincel sobre un lienzo real, debido a que posee gran variedad de pinceles que simulan el uso real del artista, generando diversas texturas y formas que le permiten trabajar como lo harían con herramientas tradicionales.
      .col-lg-4(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema1/img2.png", style="width: 350px", alt="").m-auto
    p.mb-5(data-aos="fade-right") Photoshop nos presenta constantemente diferentes novedades, como son:
    TabsA.color-primario.mb-5(data-aos="fade-down")
      .tarjeta.color-acento-botones.p-4(titulo="Mesas de trabajo")
        .row
          .col-lg-7.mb-4.mb-lg-0
            .row.mb-4
              .col-auto.bg-c6
                .p-2
                  p.mb-0 #[b Mesas de trabajo]
            p.mb-0 Son muy útiles al momento de crear diseños gráficos, porque le permiten visualizar en tiempo real el resultado del proyecto, se puede trabajar en paralelo en varias mesas de trabajo en un mismo lienzo, sin necesidad de abrir dos ventanas independientes, como sucedía en las versiones anteriores de Photoshop.
          .col-lg-5
            figure
              img(src="@/assets/curso/tema1/img4.png", style="width: 350px", alt="").m-auto
      .tarjeta.color-acento-botones.p-4(titulo="Adobe Stock")
        .row
          .col-lg-7.mb-4.mb-lg-0
            .row.mb-4
              .col-auto.bg-c6
                .p-2
                  p.mb-0 #[b Adobe Stock]
            p.mb-0 Es una nueva galería que contiene imágenes, ilustraciones y gráficos, exentos de derechos de autor y de alta calidad, que podrán ser utilizados en sus bocetos con una marca de agua que automáticamente al ser comparada, se actualizará en sus diseños.
          .col-lg-5
            figure
              img(src="@/assets/curso/tema1/img3.png", style="width: 350px", alt="").m-auto
      .tarjeta.color-acento-botones.p-4(titulo="Exportación de mesas de trabajo")
        .row
          .col-lg-7.mb-4.mb-lg-0
            .row.mb-4
              .col-auto.bg-c6
                .p-2
                  p.mb-0 #[b Exportación de mesas de trabajo]
            p.mb-0 Photoshop le permite exportar un grupo de capas, mesas de trabajo o una capa como imagen (JPEG, GIF, PNG, PNG8 o SVG), simplemente seleccionando el conjunto de capas o mesas de trabajo y dándole clic derecho.
          .col-lg-5
            figure
              img(src="@/assets/curso/tema1/img5.png", style="width: 350px", alt="").m-auto
      .tarjeta.color-acento-botones.p-4(titulo="Panel de pictogramas")
        .row
          .col-lg-7.mb-4.mb-lg-0
            .row.mb-4
              .col-auto.bg-c6
                .p-2
                  p.mb-0 #[b Panel de pictogramas]
            p.mb-0 Para ampliar la variedad de herramientas de texto, Photoshop cuenta con un nuevo panel de pictogramas en el cual se encuentran diversos símbolos.
          .col-lg-5
            figure
              img(src="@/assets/curso/tema1/img6.png", style="width: 350px", alt="").m-auto
    p.mb-5(data-aos="fade-right") Y entre las últimas novedades, encontramos:
    .row.mb-4(data-aos="fade-right")
      .col-auto.bg-c6
        .p-2
          p.mb-0 #[b A. Mejoras de selección]
    .row.align-items-center.mb-5
      .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
        p La herramienta de selección de objetos ha sido aún más perfeccionada, mejorando la detección y selección de elementos como el cielo, el agua, el suelo natural, las plantas y la arquitectura. Simplemente pase el #[i mouse] sobre el objeto y haga clic para realizar la selección.
        p Puede refinar aún más esta selección, en el espacio de trabajo Seleccionar y aplicar máscara, donde podrá realizar ajustes adicionales.
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema1/img6.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-1 #[b.txt-c1 Realizar selecciones en las composiciones]
                  p.text-small Para obtener más información sobre las diferentes herramientas de selección y cómo utilizarlas, consulte el siguiente enlace. 
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://helpx.adobe.com/co/photoshop/using/making-quick-selections.html#selection-improvements" target="_blank")
                    span Ver enlace 
                    i.fas.fa-link
      .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema1/img5.svg", style="width: 350px", alt="").m-auto
    .row.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema1/img7.png", style="width: 370px", alt="").m-auto
      .col-lg-8(data-aos="fade-left")
        .row.mb-4
          .col-auto.bg-c6
            .p-2
              p.mb-0 #[b B. Eliminar y rellenar con un clic]
        p A partir de la versión de Photoshop 24.0, puede eliminar objetos de sus imágenes fácilmente con la función Eliminar y rellenar selección de un solo clic. Photoshop fusionará el fondo de manera que parecerá que el objeto nunca estuvo ahí.
        p Use la herramienta de selección de objetos para realizar su selección y luego utilice el siguiente método abreviado de teclado para eliminarla:
        .row.justify-content-center.mb-3
          .col-auto
            .p-4.bg-c7
              p.text-center.mb-0 #[b macOS]: Mayús + Supr - #[b Windows]: Mayús + Retroceso
        p Sin embargo, si está utilizando la herramienta Lazo o cualquier otra herramienta de Photoshop, haga clic con el botón derecho del #[i mouse] para acceder al menú contextual y seleccione Eliminar y rellenar selección, para eliminar objetos no deseados de la imagen.
        p.mb-0 Puede eliminar fácilmente objetos o personas de las imágenes o retocarlas, incluso si tienen fondos complejos.
    .row
      .col-12
        .p-4.bg-c5
          .row.align-items-center
            .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src="@/assets/curso/tema1/img8.png", style="width: 350px", alt="").m-auto
            .col-lg-8(data-aos="fade-left")
              .row.align-items-center
                .col-md.mb-4.mb-md-0
                  p #[b Novedades de Adobe Photoshop]
                  p.mb-0 Adobe Photoshop está en constante evolución, mejorando y añadiendo nuevas herramientas para ofrecer una experiencia de edición de imágenes más completa y eficiente. Para mantenerse actualizado con las últimas innovaciones y mejoras, le recomendamos consultar regularmente el siguiente enlace, el cual lo llevará a las novedades de Adobe Photoshop. Aquí encontrará información sobre las actualizaciones más recientes y las nuevas funcionalidades que pueden optimizar su trabajo creativo.
                .col-md-auto
                  a.boton.color-acento-botones(href="https://helpx.adobe.com/co/photoshop/using/whats-new.html" target="_blank")
                    span Ver enlace 
                    i.fas.fa-link
    Separador
    #t_1_2
    .titulo-segundo.color-acento-contenido
      h2 1.2 Manejo del color
    .row.align-items-center.mb-5
      .col-md-auto.mb-4.mb-md-0(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema1/img7.svg", style="width: 100px", alt="").m-auto
      .col(data-aos="fade-left")
        p Al seleccionar un modo de color en Photoshop, automáticamente se asignan las herramientas y las extensiones de archivo compatibles, lo que también influye en el tamaño final del proyecto.
        p.mb-0 Photoshop cuenta con diferentes tipos de colores, los cuales puede utilizar en los proyectos que desarrolle, tales como:
    .row.align-items-center.mb-5
      .col-lg-3.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema1/img9.png", style="width: 300px", alt="").m-auto
      .col-lg-9(data-aos="fade-left")
        TabsA.color-primario
          .tarjeta.color-acento-botones.p-4(titulo="RGB (rojo, verde, azul)")
            .row
              .col-12
                .row.mb-4
                  .col-auto.bg-c6
                    .p-2
                      p.mb-0 #[b RGB (rojo, verde, azul)]
                p Es el modo de color que Photoshop carga por defecto y es utilizado en las pantallas, por lo tanto, si va a crear algo para web, este es el modo de color que debe utilizar.
                .row
                  .col-12
                    .p-4.bg-c8
                      figure
                        img(src="@/assets/curso/tema1/img10.png", style="width: 340px", alt="").m-auto
          .tarjeta.color-acento-botones.p-4(titulo="CMYK")
            .row
              .col-12
                .row.mb-4
                  .col-auto.bg-c6
                    .p-2
                      p.mb-0 #[b CMYK]
                p Este modo de color es el más utilizado para impresión y se basa en la mezcla de colores como: cian, magenta, amarillo y negro.
                .row
                  .col-12
                    .p-4.bg-c8
                      figure
                        img(src="@/assets/curso/tema1/img11.png", style="width: 340px", alt="").m-auto
          .tarjeta.color-acento-botones.p-4(titulo="Color Lab")
            .row
              .col-12
                .row.mb-4
                  .col-auto.bg-c6
                    .p-2
                      p.mb-0 #[b Color Lab]
                p Se basa en la percepción humana del color, es un espacio de luminosidad que varía entre 0 y 100; los valores numéricos que se pueden apreciar con este modo de color describen la percepción de una persona con una capacidad de visión normal.
                .row
                  .col-12
                    .p-4.bg-c8
                      figure
                        img(src="@/assets/curso/tema1/img12.png", style="width: 340px", alt="").m-auto
          .tarjeta.color-acento-botones.p-4(titulo="Escala de grises")
            .row
              .col-12
                .row.mb-4
                  .col-auto.bg-c6
                    .p-2
                      p.mb-0 #[b Escala de grises]
                p El modo Escala de grises utiliza distintos tonos de gris en una imagen. En imágenes de 8 #[i bits], puede haber hasta 256 tonos de gris. Cada píxel de una imagen en escala de grises tiene un valor de brillo comprendido entre 0 (negro) y 255 (blanco). En imágenes de 16 y 32 #[i bits], el número de tonos de una imagen es mucho mayor que en las imágenes de 8 #[i bits].
                .row
                  .col-12
                    .p-4.bg-c8
                      figure
                        img(src="@/assets/curso/tema1/img13.png", style="width: 340px", alt="").m-auto
          .tarjeta.color-acento-botones.p-4(titulo="Mapa de <i>bits</i>")
            .row
              .col-12
                .row.mb-4
                  .col-auto.bg-c6
                    .p-2
                      p.mb-0 #[b Mapa de #[i bits]]
                p El modo Mapa de #[i bits] utiliza uno de los dos valores de color (blanco o negro) para representar los píxeles de una imagen. Las imágenes en este modo se denominan imágenes de 1 #[i bit] en mapa de #[i bits] porque tienen una profundidad de #[i bits] de 1.
                .row
                  .col-12
                    .p-4.bg-c8
                      figure
                        img(src="@/assets/curso/tema1/img14.png", style="width: 300px", alt="").m-auto
    p.mb-5(data-aos="fade-right") El color indexado y el duotono son los más utilizados en la autoedición.
    .row.align-items-center
      .col-lg-9.mb-4.mb-lg-0(data-aos="fade-right")
        .p-3.bg-c4
          .row.align-items-center
            .col-md-auto.mb-4.mb-md-0
              figure
                img(src="@/assets/curso/tema1/img8.svg", style="width: 80px", alt="").m-auto
            .col
              p.mb-0 #[b Si bien un dispositivo es capaz de reproducir los colores en los modelos RGB o CMYK, que por sus características de funcionamiento (monitor o impresora) interpretan los valores según su propio espacio de color, es necesaria la gestión de color, la cual garantiza que una importante cantidad de tonos sean similares entre dispositivos.]
      .col-lg-3(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema1/img15.png", style="width: 350px", alt="").m-auto
    Separador
    #t_1_3
    .titulo-segundo.color-acento-contenido
      h2 1.3 Resolución de imágenes
    .row.align-items-center
      .col-lg-8.order-2.order-lg-1(data-aos="fade-right")
        p Al hablar de resolución de imágenes, obligatoriamente se hace referencia a las dimensiones de alto y ancho, las cuales se miden en píxeles por pulgadas (PPI), es decir, la cantidad de píxeles que hay en una pulgada. Cuantos más PPI posea la imagen, mayor será su resolución y a la vez mejor la calidad de impresión.
        .row.align-items-center.mb-3
          .col-md-auto.mb-4.mb-md-0
            figure
              img(src="@/assets/curso/tema1/img9.svg", style="width: 80px", alt="").m-auto
          .col
            p.mb-0 Cuando se habla de píxeles por pulgadas, se hace referencia a la resolución en formato digital, mientras que los puntos por pulgada (DPI) indican la cantidad de gotas de tinta que caben en una pulgada.
        p.mb-0 #[b La resolución de una imagen se expresa en PPI y en las impresoras especifican en DPI, por esto es un error común utilizar DPI para referirse a las diferentes resoluciones.]
      .col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema1/img16.png", style="width: 450px", alt="").m-auto
    Separador
    .row.bg-c9
      .col-12
        .p-5
          .titulo-segundo.color-acento-contenido
            h2 1.4 Formatos
          .row.align-items-center.mb-5
            .col.order-2.order-md-1(data-aos="fade-right")
              p.mb-0 Photoshop permite el uso de imágenes vectoriales como también de formatos en mapa de #[i bits], porque cuenta con funciones para ambos; además, soporta una gran cantidad de formatos de archivo desde su panel de herramientas: #[b Abrir], #[b Guardar], #[b Guardar como], #[b Importar] y #[b Exportar], los cuales permiten trabajar fácilmente en varias áreas de diseño.
            .col-md-auto.mb-4.mb-md-0.order-1.order-md-2(data-aos="fade-left")
              figure
                img(src="@/assets/curso/tema1/img10.svg", style="width: 180px", alt="").m-auto
          .row
            .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src="@/assets/curso/tema1/img18.png", style="width: 380px", alt="").m-auto
            .col-lg-8(data-aos="fade-left")
              p Dicho #[i software] cuenta con su propio formato de archivo PSD, este le permite guardar el trabajo en capas, canales y diversas herramientas sin modificación, continuando con el trabajo desde el punto en que fue guardado el archivo. A continuación se mencionan algunos de los formatos que tiene esta aplicación:
              .row.align-items-center
                .col-lg-8.mb-4.mb-lg-0
                  .p-3.bg-c4
                    ul.lista-ul.mb-0
                      li.d-flex.mb-0
                        i.fas.fa-pencil-alt(style="color: #00AEEF")
                        |
                        p.mb-0 #[b BMP:] Windows #[i bitmap].
                      li.d-flex.mb-0
                        i.fas.fa-pencil-alt(style="color: #00AEEF")
                        |
                        p.mb-0 #[b IFF:] #[i Interchange File Format].
                      li.d-flex.mb-0
                        i.fas.fa-pencil-alt(style="color: #00AEEF")
                        |
                        p.mb-0 #[b GIF:] formato de intercambio de gráficos.
                      li.d-flex.mb-0
                        i.fas.fa-pencil-alt(style="color: #00AEEF")
                        |
                        p.mb-0 #[b PCX:] #[i PiCture Exchange].
                      li.d-flex.mb-0
                        i.fas.fa-pencil-alt(style="color: #00AEEF")
                        |
                        p.mb-0 #[b PDF:] formato de documento portátil.
                      li.d-flex.mb-0
                        i.fas.fa-pencil-alt(style="color: #00AEEF")
                        |
                        p.mb-0 #[b PICT:] formato gráfico utilizado por Macintosh.
                      li.d-flex.mb-0
                        i.fas.fa-pencil-alt(style="color: #00AEEF")
                        |
                        p.mb-0 #[b JPEG:] #[i Joint Photographic Experts Group].
                      li.d-flex.mb-0
                        i.fas.fa-pencil-alt(style="color: #00AEEF")
                        |
                        p.mb-0 #[b TIFF:] #[i Tagged Image File Format].
                      li.d-flex.mb-0
                        i.fas.fa-pencil-alt(style="color: #00AEEF")
                        |
                        p.mb-0 #[b Otros:] Webp, Pixar, PNG, TGA y EPS para archivos vectoriales.
                .col-lg-4
                  figure
                    img(src="@/assets/curso/tema1/img11.svg", style="width: 380px", alt="").m-auto

</template>

<script>
export default {
  name: 'Tema1',
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
