<template>
  <v-card color="grey lighten-3">
    <v-img :src="value.img" height="200px"></v-img>
    <v-card-text>
      <p class="subtitle-1">{{ value.name }}</p>
      <p>información</p>
      <v-timeline dense>
        <v-timeline-item color="primary" right>
          Costo: <strong>{{ value.price }}</strong>
          <br />
          Duración: {{ value.span }}
        </v-timeline-item>
        <v-timeline-item color="secondary" right>
          Cupos: <strong>{{ value.quota }}</strong>
          <br />
          Completado: {{ value.finished ? 'Si' : 'No' }}
        </v-timeline-item>
        <v-timeline-item right color="primary">
          Fecha de Registro:
          <br />
          {{ value.date }}
        </v-timeline-item>
        <v-timeline-item right color="secondary">
          Descripción:
          <br />
          {{ value.description }}
        </v-timeline-item>
      </v-timeline>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: ['value'],
};
</script>

<style></style>
