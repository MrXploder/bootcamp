<template>
  <v-card class="mx-auto elevation-1">
    <v-img :src="value.imagen" height="200px" contain></v-img>

    <v-card-text class="grey lighten-2 pb-0">
      <h4 class="mb-6">
        {{ value.nombre }}
      </h4>

      <p>Información</p>
      <v-timeline align-top dense>
        <v-timeline-item color="purple" small>
          Costo: <strong>{{ value.costo }}</strong>
          <br />
          Duración: {{ value.duracion }}
        </v-timeline-item>
        <v-timeline-item color="success" small>
          Cupos: <strong>{{ value.cupos }}</strong>
          <br />
          Completado: {{ value.estado ? "Si" : "No" }}
        </v-timeline-item>
        <v-timeline-item color="purple" small>
          Fecha de registro
          <br />
          {{ value.fecha_registro }}
        </v-timeline-item>
        <v-timeline-item color="success" small>
          Descripción
          <br />
          {{ value.descripcion }}
        </v-timeline-item>
      </v-timeline>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: ["value"],
};
</script>

<style></style>
