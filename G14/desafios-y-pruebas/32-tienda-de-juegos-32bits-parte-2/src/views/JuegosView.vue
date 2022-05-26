<template>
  <div>
    <h1>Vista de Juegos</h1>
    <JuegosCarousel />

    <hr />
    <h4>Lista de Juegos</h4>
    <JuegosTabla />
  </div>
</template>

<script>
import Store from '@/store'

import JuegosCarousel from '@/components/JuegosCarousel.vue'
import JuegosTabla from '@/components/JuegosTabla.vue'

export default {
  components: {
    JuegosCarousel,
    JuegosTabla,
  },
  beforeRouteEnter(to, from, next) {
    Store.dispatch('juegos/getAllJuegos')
    next()
  },
}
</script>

<style></style>
