<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Conceptos básicos
    .row
      .col-lg-9.mb-4.mb-lg-0
        .p-4.bg-c4.h-100
          .row.align-items-center
            .col-md-auto.mb-4.mb-md-0
              figure
                img(src="@/assets/curso/tema1/img1.svg", style="width: 70px", alt="").m-auto
            .col
              p.mb-0 #[b Photoshop] es una aplicación que facilita el retoque y el perfeccionamiento de las fotos, ya sea a nivel profesional o #[i amateur], brindando una amplia cantidad de herramientas que le facilitan al usuario la creación y composición de fotografías.
      .col-lg-3
        figure
          img(src="@/assets/curso/tema1/img1.png", style="width: 350px", alt="").m-auto
    Separador
    #t_1_1
    .titulo-segundo.color-acento-contenido
      h2 1.1 ¿Para qué sirve?
    .row.align-items-center.mb-5
      .col-lg-8.mb-4.mb-lg-0
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
              p.text-center.mb-0 Photoshop le permite emplear el mouse como si fuera un pincel sobre un lienzo real, debido a que posee gran variedad de pinceles que simulan el uso real del artista, generando diversas texturas y formas que le permiten trabajar como lo harían con herramientas tradicionales.
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/img2.png", style="width: 350px", alt="").m-auto
    p.mb-5 Photoshop nos presenta constantemente diferentes novedades, como son:
    TabsA.color-primario.mb-5
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
              img(src="@/assets/curso/tema1/img3.png", style="width: 350px", alt="").m-auto
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
              img(src="@/assets/curso/tema1/img4.png", style="width: 350px", alt="").m-auto
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
    p.mb-5 Y entre las últimas novedades, encontramos:
      
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
