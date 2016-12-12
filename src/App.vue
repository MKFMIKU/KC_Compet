<template>
  <div id="app">
    <router-view></router-view>

    <FooterCLF></FooterCLF>
  </div>
</template>

<script>
  import FooterCLF from './components/Footer.vue'
  export default {
    components: {
      FooterCLF
    }
  }
</script>

<style lang="scss">
html,body{
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100%;
}
</style>
