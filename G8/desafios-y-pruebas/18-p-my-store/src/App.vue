<template>
  <div id="app">
    <navbar :brand="'My Store'"/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  components: {
    Navbar,
  },
}
</script>


<style lang="scss">
</style>
