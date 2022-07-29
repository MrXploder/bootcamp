<template>
  <div>
    <h1>Vista de Juegos</h1>
    <JuegosCarousel />
  </div>
</template>

<script>
import Store from '@/store'

import JuegosCarousel from '@/components/JuegosCarousel.vue'

export default {
  components: { JuegosCarousel },
  beforeRouteEnter(to, from, next) {
    Store.dispatch('juegos/getAllJuegos')
    next()
  },
}
</script>

<style></style>
