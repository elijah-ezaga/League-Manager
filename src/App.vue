<template>
  <div id="app">
    <LeagueHome />
  </div>
</template>

<script>
import LeagueHome from './components/LeagueHome.vue'

export default {
  name: 'app',
  components: {
    LeagueHome
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
