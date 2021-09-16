<template>
  <div>
    <v-layout justify-center>
      <v-flex shrink>
        <h1 v-once>Editando el curso: {{ $store.state.cursos.curso.nombre }}</h1>
      </v-flex>
    </v-layout>

    <CursoForm v-if="$store.state.cursos.curso" :curso="$store.state.cursos.curso" @submit="handleFormSubmit" />
  </div>
</template>

<script>
import Store from '../store'

import CursoForm from '../components/CursoForm.vue'

export default {
  components: {
    CursoForm
  },
  async beforeRouteEnter(to, from, next) {
    await Store.dispatch('cursos/getCurso', to.params.id)
    next()
  },
  methods: {
    async handleFormSubmit(curso) {
      try {
        await this.$store.dispatch('cursos/actualizarCurso', curso)
        this.$router.back()
      } catch (e) {
        console.error(e)
      }
    }
  }
}
</script>

<style></style>
