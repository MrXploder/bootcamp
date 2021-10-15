<template>
  <div>
    <v-layout align-center justify-space-between>
      <v-flex shrink>
        <h1>Vista de Cursos</h1>
      </v-flex>
      <v-flex shrink>
        <v-btn color="primary" to="/cursos/crear">Crear curso</v-btn>
      </v-flex>
    </v-layout>
    <GradesTable />
  </div>
</template>

<script>
import Store from "../store";
import GradesTable from "../components/Grades/GradesTable.vue";

export default {
  components: { GradesTable },
  beforeRouteEnter(to, from, next) {
    Store.dispatch("grades/getAllGrades");
    next();
  },
};
</script>

<style></style>
