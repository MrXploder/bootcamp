<template>
  <div>
    <h1>Lista de Cursos</h1>
    <CursosCards />
  </div>
</template>

<script>
import Store from '../store'
import CursosCards from '../components/CursosCards.vue'

export default {
  name: 'Home',
  components: {
    CursosCards
  },

  async beforeRouteEnter(to, from, next) {
    await Store.dispatch('cursos/getCursos')
    next()
  }
}
</script>
