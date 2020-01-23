<template>
  <header class="HeaderContent">
    <HeaderMap />

    <div class="HeaderTitle">
      <h1>
        <img src="/img/logos/logo-geocamp-amarillo.svg" alt="GeoCAMP 2020" />
        <span>2020</span>
      </h1>

      <p>Región de Murcia</p>
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import HeaderMap from '@/components/core/Header/HeaderMap.vue'

@Component({
  components: {
    HeaderMap
  }
})
export default class HeaderContent extends Vue {}
</script>

<style scoped lang="scss">
@import '@/styles/settings/_core.scss';

.HeaderContent {
  padding: 2rem;
  position: relative;
  min-height: 30rem;
  padding-top: 5rem;
}

.HeaderTitle {
  position: absolute;
  width: auto;
  margin: 6rem;

  h1 {
    font-family: WorkSans;
    display: flex;
    flex-direction: column;
    font-size: 6rem;
    font-weight: bold;
    color: var(--ss--third-color);
  }

  img {
    width: 6em;
  }

  p {
    font-size: 2rem;
    color: var(--ss--contrast-color);
  }
}

@media (max-width: $media-query-min-width) {
  .HeaderTitle {
    margin: 1rem;

    h1 {
      font-size: 3.5rem;
    }

    img {
      width: 5em;
    }

    p {
      font-size: 1.5rem;
    }
  }
}
</style>
