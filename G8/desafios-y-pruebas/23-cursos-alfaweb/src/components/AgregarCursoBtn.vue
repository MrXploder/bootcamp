<template>
  <v-dialog v-model="dialog">
    <template #activator="{ on }">
      <v-btn v-on="on" color="info">Agregar curso</v-btn>
    </template>
    <v-card>
      <v-card-title> Agregando curso </v-card-title>
      <v-card-text>
        <CursoForm @submit="handleFormSubmit" mode="create" />
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import CursoForm from '../components/CursoForm.vue'
export default {
  components: {
    CursoForm
  },
  data: () => ({
    dialog: false
  }),
  methods: {
    async handleFormSubmit(nuevoCurso) {
      try {
        const response = await this.$store.dispatch('cursos/crearCurso', nuevoCurso)
        console.log({ response, nuevoCurso })
        this.dialog = false
        this.$store.dispatch('cursos/getCursos')
      } catch (e) {
        console.error(e)
      }
    }
  }
}
</script>

<style></style>
