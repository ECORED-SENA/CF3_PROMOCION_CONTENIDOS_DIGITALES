<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p(data-aos="fade-down") La idea de comunidad ha sido el pilar de la configuración de Internet desde sus comienzos. Intercambiar mensajes y resolver problemas a través de la producción de contenidos, teniendo como referente la información disponible en las bases de datos para su posterior difusión, ha sido la manera en la que científicos e investigadores han logrado en diferentes áreas del conocimiento resolver problemas y de esta manera crear comunidades interactivas entre ellos.

    .row.justify-content-center.align-items-center.mt-5           
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)   

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
