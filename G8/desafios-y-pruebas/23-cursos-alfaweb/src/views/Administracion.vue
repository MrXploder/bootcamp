<template>
  <div>
    <v-layout justify-center class="mb-4">
      <h1>Administración</h1>
      <AgregarCursoBtn />
    </v-layout>

    <CursosTabla />

    <AlertSection />
  </div>
</template>

<script>
import CursosTabla from '../components/CursosTabla.vue'
import AgregarCursoBtn from '../components/AgregarCursoBtn.vue'
import AlertSection from '../components/AlertSection.vue'
export default {
  components: {
    CursosTabla,
    AgregarCursoBtn,
    AlertSection
  }
}
</script>

<style></style>
