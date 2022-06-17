<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 3
      h1 Redes sociales
    .bg7.p-5.d-none.d-lg-block.rad
      .row.justify-content-start.align-items-center.p-5
        .col-lg-11  
          .row.justify-content-start.align-items-center
            .col-lg-7 
              p(data-aos="fade-down").mb-0 Las TIC (Tecnologías de la Información y la Comunicación) son la base de la interacción de una comunidad en su relacionamiento social como usuario de las herramientas social media.  Según Caivano (2010), se puede interpretar el relacionamiento social como un espacio de intercambio de información que se genera de diferentes formas mediante la interconexión.  

    .row.justify-content-center.align-items-center.bg7-1.p-4.d-block.d-lg-none
      .col-12
        p(data-aos="fade-down").mb-0 Las TIC (Tecnologías de la Información y la Comunicación) son la base de la interacción de una comunidad en su relacionamiento social como usuario de las herramientas social media.  Según Caivano (2010), se puede interpretar el relacionamiento social como un espacio de intercambio de información que se genera de diferentes formas mediante la interconexión. 

    Separador 
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 3.1  Concepto de red social 

    .bg9
      .row.justify-content-center.align-items-center
        .col-lg-9
          .row.justify-content-center.align-items-center
            .col-lg-8
              p(data-aos="fade-down") El ser humano es por su naturaleza un individuo social, es decir, siente la necesidad de ser aceptado e identificado por la sociedad o comunidad donde interactúa, razón por la cual se integra a ella participando de grupos formales e informales.  
              p(data-aos="fade-down") En el mundo digital esta participación es conocida como red. Identificarse con algunos intereses o temas en particular es el requisito principal para participar o ser parte de una red.                    

            .col-lg-4
              img.img-a.img-t.my-3(data-aos="zoom-in")(src='@/assets/curso/temas/img106.png', alt='')
            .row.justify-content-start.align-items-center.mt-4        
              .col-auto.d-none.d-lg-block.p-0
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img108.svg', alt='')       
              .col-lg-10
                p(data-aos="fade-down").mb-0 Entonces una red social es aquella plataforma que a través del uso de Internet permite la participación de individuos (usuarios) que se identifican y son atraídos por temas de particular interés. Esta participación se encuentra sujeta al cumplimiento de requisitos o protocolos que finalmente permiten la interacción entre sus miembros. 
            .bloque-texto-b.color-secundario.px-4.mt-4(data-aos="fade-down")
              .bloque-texto-b__texto
                i.fas.fa-quote-left
                p.mb-0 “Es aquella estructura social formada por nodos (habitualmente individuos u organizaciones) que están vinculados por uno o más tipos de interdependencia tales como valores, puntos de vista, ideas…”                 
                p #[b (Segura, 2015, p.106).]   
                i.fas.fa-quote-right     
          
        .col-lg-3
          img.img-a.img-t.my-3(data-aos="zoom-in")(src='@/assets/curso/temas/img107.png', alt='')

      Separador 
      #t_3_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
        h2 3.2  Tipos de redes sociales

      p(data-aos="fade-down") Teniendo en cuenta las características propias de una red se identifican dos especialmente así:      

      .row.justify-content-center.mt-5(data-aos='zoom-in')
        .col-lg-6.mb-3.mb-lg-0
          .tarjeta-up(:style="{'background-image': `url(${require('@/assets/curso/temas/img109.png')})`}")
            .tarjeta-up__content.color-primario.p-5
              h4.mb-4 Redes sociales off-line o analógicas
              p Su principal característica es que no hay intervención de aparatos electrónicos y conectividad por Internet para las relaciones sociales que se originan dentro de la comunidad por el rol que cada individuo desarrolla en ella, por ejemplo, la amplia red social y familiar.
        .col-lg-6.mb-3.mb-lg-0
          .tarjeta-up(:style="{'background-image': `url(${require('@/assets/curso/temas/img110.png')})`}")
            .tarjeta-up__content.color-secundario.p-5
              h4.mb-4 Redes sociales on-line o digitales
              p Principalmente son las que se desarrollan mediante dispositivos electrónicos a través de medios digitales utilizando Internet como conectividad, se originan y conforman alrededor de un tema de interés. A continuación se presentan algunos ejemplos relevantes.

      p(data-aos="fade-down").mt-5.text-center Por su público objetivo y temática las redes sociales pueden ser:
      .row.justify-content-center.align-items-center.mt-5
        .col-lg-10
          .row.justify-content-center.align-items-center
            .col-lg-7
              .tarjeta-avatar-b(data-aos="fade-right").my-3
                .tarjeta-avatar-b__img
                  img(src='@/assets/curso/temas/img111.svg' alt='AvatarTop')
                .tarjeta.bg-8.text-white
                  .p-4
                    h4 Horizontales
                    p.mt-4 son aquellas que buscan contar con un gran número de usuarios, se caracterizan por la participación libre sin mayores restricciones, por ejemplo, Instagram, Facebook, Twitter.

              img.img-a.img-t.my-4(data-aos="flip-down")(src='@/assets/curso/temas/img113.svg', alt='')

              .tarjeta-avatar-b(data-aos="fade-right").my-3
                .tarjeta-avatar-b__img
                  img(src='@/assets/curso/temas/img112.svg' alt='AvatarTop')
                .tarjeta.bg-8.text-white
                  .p-4
                    h4 Verticales
                    p.mt-4 son aquellas que tienen una temática definida para un público objetivo en concreto. 
                    p Se caracterizan por la participación de usuarios que identifican la satisfacción de una necesidad en particular.                              
            .col-lg-5
              .row.justify-content-center.align-items-center
                .col-lg-5.d-none.d-lg-block
                  img.img-a.img-t.my-3(data-aos="flip-down")(src='@/assets/curso/temas/img114.svg', alt='') 
                .col-lg-5.d-block.d-lg-none
                  img.img-a.img-t.my-3(data-aos="flip-down")(src='@/assets/curso/temas/img114-1.svg', alt='')                                       
                .col-lg-7
                  .bg-8.p-4.text-white.text-center.rad(data-aos="fade-left")
                    p.mb-0 Público objetivo y temática           

      p(data-aos="fade-down").mt-5.text-center En función de un tema específico se encuentran las siguientes redes sociales verticales:
      .row.justify-content-center.align-items-center.mt-5
        .col-lg-4
          img.img-a.img-t.my-3(data-aos="flip-down")(src='@/assets/curso/temas/img115.png', alt='') 
        .col-lg-8
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")(data-aos="fade-left")
            .row.justify-content-center.align-items-top.px-5.pb-4(titulo="Profesionales")
              .col-lg-11
                p Son aquellas que permiten la interacción de profesionales de cualquier área del saber conforme a una temática definida o un interés en común, por ejemplo,  Viadeo, Xing y LinkedIn.   
            .row.justify-content-center.align-items-top.px-5.pb-4(titulo="De ocio")
              .col-lg-11
                p Son aquellas cuyo propósito es congregar usuarios que desarrollan actividades de ocio, deporte, usuarios de videojuegos, fans, etc., por ejemplo, Wipley, Dogster y Moterus.   
            .row.justify-content-center.align-items-top.px-5.pb-4(titulo="Mixtas")
              .col-lg-11
                p Son aquellas que se caracterizan por la oferta de actividades a nivel personal y profesional para sus usuarios, tomando como referencia los perfiles, por ejemplo, Unience.

      p(data-aos="fade-down").mt-5.text-center Por el sujeto principal de la relación las redes sociales pueden ser:
          
      img.img-a.img-t.mt-5(data-aos="flip-down")(src='@/assets/curso/temas/img117.svg', alt='')
    .bg10
      .row.justify-content-center.align-items-center.mt-5
        .col-lg-4
          p.text-center #[b Por su localización geográfica las redes sociales pueden ser:]
        .col-lg-8
          .row.mb-md-5(data-aos="fade-down")
            .col-lg-6.mb-3
              .tarjeta.tarjeta-foto-hover
                .tarjeta-foto-hover__img: img(src='@/assets/curso/temas/img118.png')
                .tarjeta-foto-hover__titulo.d-flex.justify-content-center.align-items-center.p-3.bgh
                  h4.text-center.text-white.mb-0 Sedentarias
                .tarjeta-foto-hover__tarjeta.bg-degrade.d-flex.align-items-center.justify-content-center
                  .p-4.text-center.text-white
                    img.img-a.img-t(data-aos="flip-down")(src='@/assets/curso/temas/img120.svg', alt='')
                    h4.mt-4 Sedentarias
                    p.mb-0 Son aquellas que cambian dependiendo del contenido, los eventos que se generan y las relaciones entre personas, por ejemplo, Rejaw, Blogger, Kwippy, Plaxo y Bitacoras.com. 
            .col-lg-6.mb-3
              .tarjeta.tarjeta-foto-hover
                .tarjeta-foto-hover__img: img(src='@/assets/curso/temas/img119.png')
                .tarjeta-foto-hover__titulo.d-flex.justify-content-center.align-items-center.p-3.bgh
                  h4.text-center.text-white.mb-0 Nómadas
                .tarjeta-foto-hover__tarjeta.bg-degrade.d-flex.align-items-center.justify-content-center
                  .p-4.text-center.text-white
                    img.img-a.img-t(data-aos="flip-down")(src='@/assets/curso/temas/img121.svg', alt='')
                    h4.mt-4 Nómadas
                    p.mb-0 Son aquellas que basadas en la localización geográfica de los usuarios crean la red como punto de orientación con relación a los lugares visitados o por visitar. Los ejemplos más destacados son Foursquare y Skout.

    Separador 
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 3.3  Importancia de la red social
    .row.justify-content-start.align-items-center.mt-4        
      .col-auto.d-none.d-lg-block.p-0.ps-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/img122.svg', alt='')       
      .col-lg-10.p-0.ps-3
        p(data-aos="fade-down").mb-0 La importancia de las redes sociales hoy por hoy es que se han convertido en el canal de comunicación ágil y práctico que permite a la sociedad en general interactuar y transmitir información, facilitando la comunicación entre individuos o grupos sin importar la distancia entre ellos.
    p(data-aos="fade-down").mt-4 Como herramienta de trabajo permiten transferir información en tiempo real.
    .bg11
      .row.justify-content-center.align-items-center
        .col-lg-4
          p.my-4(data-aos="fade-down") #[b Algunas características que destacan a las redes sociales son:]       
        .col-lg-8
          SlyderG(columnas="col-lg-6")(data-aos="fade-right")
            .crd.crd--100.tarjeta.bg-secundario.p-5
              .row.justify-content-center.mb-3
                .col-8
                  img.img-a.img-t(src='@/assets/curso/temas/img123.svg' alt='AvatarTop')
              h5.text-center Promueven la técnica del autoaprendizaje.
            .crd.crd--100.tarjeta.bg-secundario.p-5
              .row.justify-content-center.mb-3
                .col-8
                  img.img-a.img-t(src='@/assets/curso/temas/img124.svg' alt='AvatarTop')
              h5.text-center Permiten interactuar y compartir conocimiento. 
            .crd.crd--100.tarjeta.bg-secundario.p-5
              .row.justify-content-center.mb-3
                .col-8
                  img.img-a.img-t(src='@/assets/curso/temas/img125.svg' alt='AvatarTop')
              h5.text-center Permiten adquirir competencias y habilidades  del uso de herramientas digitales.
            .crd.crd--100.tarjeta.bg-secundario.p-5
              .row.justify-content-center.mb-3
                .col-8
                  img.img-a.img-t(src='@/assets/curso/temas/img126.svg' alt='AvatarTop')
              h5.text-center Propician un intercambio de roles entre los usuarios.
            .crd.crd--100.tarjeta.bg-secundario.p-5
              .row.justify-content-center.mb-3
                .col-8
                  img.img-a.img-t(src='@/assets/curso/temas/img127.svg' alt='AvatarTop')
              h5.text-center Permiten la comunicación asíncrona entre individuos y grupos en un contexto de globalización.


</template>
<script>
import SlyderG from '../components/SlyderG.vue'
export default {
  name: 'Tema3',
  components: {
    SlyderG,
  },
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
