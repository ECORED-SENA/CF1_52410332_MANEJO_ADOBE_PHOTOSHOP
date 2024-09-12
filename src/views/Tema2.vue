<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Espacios de trabajo
    p.mb-5 El espacio de trabajo de Photoshop viene subdividido en diversos paneles y herramientas, entre los principales se encuentran:
    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 1.] Espacio de trabajo
        .row
          .col-12
            .p-4.bg-c10
              figure
                img(src="@/assets/curso/tema2/img1.png", style="width: 900px", alt="Imagen que presenta el espacio de trabajo, compuesto por el marco de aplicación, la barra de aplicaciones, los paneles, el panel de herramientas y la ventana documento.").m-auto

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
