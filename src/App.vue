<template>
  <div id="app">
    <HomeButton/>
    <TopNavBar></TopNavBar>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import TopNavBar from '@/components/core/General/TopNavBar.vue'
import HomeButton from '@/components/core/General/HomeButton.vue'

@Component({
  components: {
    TopNavBar,
    HomeButton
  }
})
export default class App extends Vue {
  protected loading: boolean = true

  public async mounted () {
    this.loading = false
  }
}
</script>

<style lang="scss">
@import '@/styles/main.scss';
</style>
