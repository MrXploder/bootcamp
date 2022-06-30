<template>
  <div>
    <v-alert outlined dense color="purple" icon="mdi-account-group"
      >Cantidad total de alumnos permitidos:
      <strong>{{ totalQuota }}</strong> alumnos</v-alert
    >
    <v-alert outlined dense color="info" icon="mdi-account-multiple-check"
      >Cantidad total de alumnos inscritos:
      <strong>{{ totalEnrolled }}</strong> alumnos</v-alert
    >
    <v-alert outlined dense color="deep-orange" icon="mdi-account-clock-outline"
      >Cantidad total de cupos restantes:
      <strong>{{ totalQuotaAvailable }}</strong> alumnos</v-alert
    >
    <v-alert outlined dense color="magenta" icon="mdi-cancel"
      >Cantidad total de cursos terminados:
      <strong>{{ totalFinished }}</strong> cursos</v-alert
    >
    <v-alert outlined dense color="brown" icon="mdi-bell-ring"
      >Cantidad total de cursos activos:
      <strong>{{ totalActive }}</strong> cursos</v-alert
    >
    <v-alert outlined dense color="orange" icon="mdi-bell-ring"
      >Cantidad total de cursos:
      <strong>{{ totalLectures }}</strong> cursos</v-alert
    >
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters('lectures', [
      'totalQuota',
      'totalEnrolled',
      'totalQuotaAvailable',
      'totalFinished',
      'totalActive',
      'totalLectures',
    ]),
  },
};
</script>

<style></style>
