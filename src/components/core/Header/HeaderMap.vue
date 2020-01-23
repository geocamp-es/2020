<template>
  <div class="HeaderMap">
    <iframe src="/maps/murcia" allowtransparency="true" frameborder="0"></iframe>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class HeaderMap extends Vue {}
</script>

<style scoped lang="scss">
.HeaderMap {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  iframe {
    width: 100%;
    height: 100%;
  }
}

</style>
