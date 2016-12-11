<template>
  <div id="app">
    <router-view></router-view>

    <Footer></Footer>
  </div>
</template>

<script>
  import Footer from './components/Footer.vue'
  export default {
    components: {
      Footer
    }
  }
</script>

<style lang="scss">
html,body{
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
