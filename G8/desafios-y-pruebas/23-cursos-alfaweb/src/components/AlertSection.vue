<template>
  <div>
    <v-alert outlined icon="mdi-account-group" color="purple">
      Cantidad total de alumnos permitidos:
      <strong>{{ $store.getters['cursos/cantidadTotalAlumnosPermitidos'] }}</strong> alumnos
    </v-alert>
    <v-alert outlined icon="mdi-account-multiple-check" color="cyan">
      Cantidad total de alumnos inscritos:
      <strong>{{ $store.getters['cursos/cantidadTotalAlumnosInscritos'] }}</strong> alumnos
    </v-alert>
    <v-alert outlined icon="mdi-account-clock" color="deep-orange"
      >Cantidad total de cupos restantes:
      <strong>{{ $store.getters['cursos/cantidadTotalCuposRestantes'] }}</strong> alumnos</v-alert
    >
    <v-alert outlined icon="mdi-cancel" color="magenta"
      >Cantidad total de cursos terminados:
      <strong>{{ $store.getters['cursos/cantidadTotalCursosTerminados'] }}</strong> cursos.</v-alert
    >
    <v-alert outlined icon="mdi-bell-ring" color="brown"
      >Cantidad total de cursos activos:
      <strong>{{ $store.getters['cursos/cantidadTotalCursosActivos'] }}</strong> cursos.</v-alert
    >
    <v-alert outlined icon="mdi-bell-ring" color="amber"
      >Cantidad total de cursos: <strong>{{ $store.state.cursos.data.length }}</strong> cursos.</v-alert
    >
  </div>
</template>
<script>
export default {}
</script>

<style></style>
