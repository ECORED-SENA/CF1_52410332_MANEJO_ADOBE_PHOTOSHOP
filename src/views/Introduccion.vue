<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.bg-c1
      .col-12
        .px-5.pb-5
          .row.justify-content-center.mb-5
            .col-lg-9.mb-4.mb-lg-0(data-aos="fade-right")
              .p-4.bg-c2
                .row.align-items-center
                  .col-md-auto.mb-4.mb-md-0
                    figure
                      img(src="@/assets/curso/intro/img1.svg", style="width: 70px", alt="").m-auto
                  .col
                    p.mb-0 Adobe Photoshop se ha consolidado como una herramienta fundamental en el campo del diseño gráfico y la edición de imágenes, ofreciendo un amplio abanico de funciones que permiten tanto a profesionales como a #[i amateurs], llevar a cabo proyectos con altos estándares de calidad. Este #[i software], desarrollado por Adobe, es utilizado en diversas industrias, desde la publicidad hasta la fotografía y la ilustración, gracias a su versatilidad y capacidad de adaptación a distintas necesidades creativas.
            .col-lg-3(data-aos="fade-left")
              .p-4.h-100.bg-c3
                .row.align-items-center.h-100
                  .col-12
                    figure
                      img(src="@/assets/curso/intro/img2.svg", style="width: 250px", alt="").m-auto
          .row
            .col-lg-6.mb-4.mb-lg-0(data-aos="fade-right")
              p.mb-0 Este componente formativo presenta una guía detallada para el manejo de Photoshop, enfocándose en los conceptos básicos que son esenciales para cualquier usuario. A lo largo de los contenidos, se exploran desde la configuración inicial del espacio de trabajo hasta el dominio de las herramientas avanzadas que permiten crear, modificar y perfeccionar imágenes con precisión. Además, se abordan las últimas actualizaciones y novedades que Adobe ha incorporado en las versiones recientes del #[i software], como herramientas específicas para proyectos de diseño gráfico, web, dispositivos móviles e ilustración. Estas novedades están diseñadas para facilitar el trabajo creativo y mejorar el uso de las nuevas tecnologías, haciendo de Photoshop una herramienta accesible y poderosa para cualquier usuario.
            .col-lg-6(data-aos="fade-left")
              figure
                img(src="@/assets/curso/intro/img2.png", style="width: 600px", alt="").m-auto
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
