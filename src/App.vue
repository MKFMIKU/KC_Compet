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
  height: auto;
}
  #lv-container{
    width: 960px;
    margin: 4rem auto 4rem;
    @media screen and (max-width: 540px) {
      width: 100%;
      margin: 2rem 0;
    }
  }
</style>
