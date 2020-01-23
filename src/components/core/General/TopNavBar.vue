<template>
  <nav class="TopNavBar" :class="{'TopNavBar--open': open}">
    <ul class="TopNavBar__List">
      <li><a href="/#Evento">Evento</a></li>
      <li><a href="/#Inscripción">Inscripción</a></li>
      <li><a href="/#Información">Información</a></li>
      <li><a href="/#Patrocinio">Patrocinio</a></li>
      <li><a href="/#Ediciones">Ediciones</a></li>
      <li><a href="/codigo-conducta">Conducta</a></li>
    </ul>

    <button class="TopNavBar__Button" @click="onOpen">{{buttonContent}}</button>
  </nav>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class TopNavBar extends Vue {
  protected open: boolean = false

  protected onOpen () {
    this.open = !this.open
  }

  get buttonContent () {
    return this.open ? 'Cerrar' : 'Menu'
  }
}
</script>

<style scoped lang="scss">
@import '@/styles/settings/_core.scss';

.TopNavBar {
  position: absolute;
  top: 1rem;
  right: 0;
  z-index: 10;

  .TopNavBar__List {
    display: flex;
    justify-content: flex-end;
    padding: 0 2rem;
    background: var(--ss--secondary-color);

    li {
      padding: 1rem 2rem;
      color: var(--ss--white-color);

      a,
      a:focus,
      a:active,
      a:visited {
        color: inherit;
        text-decoration: none;
      }
    }
  }
}

.TopNavBar__Button {
  display: none;
}

@media (max-width: $media-query-min-width) {
  .TopNavBar {
    top: 0;

    .TopNavBar__List {
      display: none;
    }
  }

  .TopNavBar.TopNavBar--open {
    width: 100%;

    .TopNavBar__List {
      display: block;
      height: 100%;
      flex-direction: column;
      justify-content: flex-start;
      padding: 2rem;
      margin: 0;
      font-size: 2rem;
      opacity: 0.95;
    }
  }

  .TopNavBar__Button {
    display: block;
    background: var(--ss--secondary-color);
    position: absolute;
    top: 1.5rem;
    right: 1rem;
    color: white;
    padding: .5rem 1rem;
  }
}
</style>
