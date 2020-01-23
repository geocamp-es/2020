<template>
  <div class="Home">
    <HeaderContent />
    <PageSection title="Sobre el evento" direction="left" id="Evento">
      <p>La GeoCAMP es una <a href="https://es.wikipedia.org/wiki/BarCamp" target="_blank">desconferencia</a>, un tipo de evento en el que no hay agenda y en el que todo el mundo está invitado a participar. Es un día para el intercambio de experiencias, conocimientos y valores en torno a todo aquello que tenga que ver con lo GEO y no tan GEO. No hay charlas patrocinadas, los ponentes se eligen entre todos... ¡el mismo día!</p>
      <p>No te olvides que puedes seguirnos en <a title="Geocamp ES en Twitter" href="http://twitter.com/geocampes" target="_blank">@geocampes</a> y <a title="Geoinquietos Murcia en Twitter" href="http://twitter.com/MUgeoinquietos" target="_blank">@MUgeoinquietos</a> . Apúntate y comenta, participa, quéjate y ayúdanos a organizar el evento.</p>
    </PageSection>

    <PageSection title="¡Inscríbete!" direction="right" id="Inscripción">
      <p>Instrucciones para inscribirse en el evento</p>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </PageSection>

    <PageSection title="Información útil" direction="left" id="Información">
      <p>Información sobre el evento: día, hora, cómo llegar...</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </PageSection>

    <PageSection title="¡Patrocina!" direction="right" id="Patrocinio">
      <p>Instrucciones para patrocinar y lista de patrocinadores</p>

      <p>Este evento está desarrollado de manera voluntaria y todas las necesidades económicas giran en torno a la realización del mismo.</p>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </PageSection>

    <PageSection title="Ediciones anteriores" direction="left" id="Ediciones">
      <p>Cada año se celebra en una ciudad diferente, puedes ver aquí las ediciones anteriores:</p>
      <ul>
        <li><a href="http://2019.geocamp.es/" target="_blank">Valencia 2019</a></li>
        <li><a href="http://2018.geocamp.es/" target="_blank">Madrid 2018</a></li>
        <li><a href="http://2017.geocamp.es/" target="_blank">Almería 2017</a></li>
        <li><a href="http://2016.geocamp.es/" target="_blank">Barcelona 2016</a></li>
        <li><a href="http://2015.geocamp.es/" target="_blank">Sevilla 2015</a></li>
        <li><a href="http://2014.geocamp.es/" target="_blank">A Coruña2014</a></li>
        <li><a href="http://2013.geocamp.es/" target="_blank">Vigo 2013</a></li>
      </ul>
    </PageSection>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import HeaderContent from '@/components/core/Header/HeaderContent.vue'
import PageSection from '@/components/core/Page/PageSection.vue'

@Component({
  components: {
    HeaderContent,
    PageSection
  }
})
export default class Home extends Vue {}
</script>

<style lang="scss">
.Home {
  position: relative;
}

.PageSection {
  ul {
    li {
      margin: 1rem 0;
    }
  }
}
</style>
