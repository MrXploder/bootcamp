<template>
  <div id="app">
    <!-- <padre></padre> -->
    <Padre />
  </div>
</template>

<script>
import Padre from '@/components/Padre.vue'

export default {
  name: 'App',
  components: {
    Padre,
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
