<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script>
import './assets/scss/style.scss'
import Header from './components/Header.vue'
export default {
  name: 'app',
  components: { 'Header': Header }
}
</script>

<style scoped>

</style>

