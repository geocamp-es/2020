<template>
<div class="CodeOfConduct">
  <PageSection class="PageSection--custom" title="Código de Conducta">
    <p>En este evento siempre tenemos muy buen rollo y queremos seguir así, por eso creemos que todos los eventos deberían incluir un código de conducta. Éste está basado en <a href="http://es.confcodeofconduct.com/">Code of Conduct (ES)</a> y en <a href="https://www.contributor-covenant.org/es/version/1/4/code-of-conduct">Contributor Covenant Code of Conduct</a>.</p>

    <p>Se requiere que todos los asistentes, ponentes, patrocinadores y voluntarios de nuestra conferencia acepten el siguiente código de conducta. Los organizadores harán cumplir este código a lo largo del evento. Esperamos la colaboración de todos los
      participantes para ayudar a asegurar un ambiente seguro para todos.</p>

    <p>Resumiendo: Sean excelentes los unos con los otros.</p>

    <h3>¿Necesitas ayuda?</h3>

    <p>Puedes contactar con nosotros también a través de este <a href="mailto:__todo__">email.</a></p>

    <h3>La Versión Corta</h3>

    <p>Nuestra conferencia se dedica a ofrecer una experiencia libre de abusos para todos, independientemente de su género, orientación sexual, discapacidad, apariencia física, talla, raza o religión. No toleramos abusos de los participantes de la conferencia
      en ninguna de sus formas. El lenguaje e imágenes sexuales no son apropiados para ninguna sala de la conferencia, incluyendo charlas, talleres, fiestas, Twitter y otros medios online. Los participantes de la conferencia que violen estas reglas
      pueden ser sancionados o expulsados de la misma a discreción de los organizadores.</p>

    <h3>La Versión Menos Corta</h3>

    <p>Ejemplos de comportamiento que contribuyen a crear un ambiente positivo:</p>

    <ul>
      <li>Uso de lenguaje amable e inclusivo.</li>
      <li>Respeto a diferentes puntos de vista y experiencias.</li>
      <li>Aceptación de críticas constructivas.</li>
      <li>Respeto durante las charlas y en las rondas de preguntas.</li>
      <li>Enfocarse en lo que es mejor para los asistentes.</li>
      <li>Mostrar empatía a otros miembros de la comunidad.</li>
    </ul>

    <p>Ejemplos de comportamiento inaceptable por participantes:</p>

    <ul>
      <li>Comentarios ofensivos relativos a género, orientación sexual, discapacidad, apariencia física, talla, raza o religión.</li>
      <li>Imágenes de contenido sexual en espacios públicos.</li>
      <li>Imágenes no consentidas por otro asistente, sean del tipo que sean.</li>
      <li>Intimidación deliberada, acoso o persecución (público o privado)</li>
      <li>Interrupciones continuadas de charlas.</li>
      <li>Contacto físico inapropiado.</li>
      <li>Otros tipos de conducta que pudieran considerarse inapropiadas en un entorno profesional.</li>
    </ul>

    <p>Se espera que los participantes instados a parar cualquier comportamiento abusivo obedezcan inmediatamente.</p>

    <p>Los patrocinadores también están sujetos a la política contra abusos. En particular, los patrocinadores no deberían utilizar imágenes, actividades u otro material con contenido sexual. El personal de los puestos (voluntarios incluidos) no debería usar ropa/uniformes/disfraces sexualizados, o que de otra manera crean un ambiente sexualizado.</p>

    <p>Si un participante incurre en un comportamiento abusivo, los organizadores de la conferencia pueden tomar cualquier acción que estimen oportuna, incluyendo advertencias al ofensor o su expulsión de la conferencia.</p>

    <p>Si estás sufriendo algún abuso, adviertes abusos sobre otra persona, o tienes alguna otra preocupación, por favor contacta con algún miembro del personal de la conferencia inmediatamente. El personal de la conferencia puede ser fácilmente identificado, ya que vestirán camisetas del evento.</p>

    <p>El personal de la conferencia estará contento de ayudar a los participates a contactar con la seguridad de la sala o con las autoridades locales, proveer escolta o asistir de otra manera a aquellos que estén sufriendo abusos para que se sientan seguros mientras dure la conferencia. Valoramos tu asistencia.</p>

    <p>Esperamos que los participantes sigan estas reglas en la la conferencia, talleres y eventos sociales relacionados con la conferencia.</p>

    <p>Si tienes algún problema, puedes reportarlo a este <a href="mailto:__todo__?Subject=Codigo%20Conducta%20Betabeers">email.</a></p>
  </PageSection>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import PageSection from '@/components/core/Page/PageSection.vue'

@Component({
  components: {
    PageSection
  }
})
export default class CodeOfConduct extends Vue {}
</script>

<style scoped lang="scss">
@import '@/styles/settings/_core.scss';

.PageSection--custom {
  margin-top: 6rem;
  padding: 4rem 8rem;

  ul {
    margin: 2rem 1rem;
  }

  li {
    list-style: square;
  }
}

@media (max-width: $media-query-min-width) {
  .PageSection--custom {
    padding: 6rem 4rem;

    h2 {
      top: 8rem;
    }
  }
}
</style>
