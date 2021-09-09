<template>
  <v-hover v-slot="{ hover }">
    <v-card
      v-ripple
      class="mx-auto card"
      max-width="344"
      :elevation="hover ? 12 : 2"
      @click="$emit('click', personaje)"
    >
      <v-img :src="personaje.imagen" height="200px"></v-img>

      <v-card-title> {{ personaje.nombre }}</v-card-title>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  props: {
    personaje: { type: Object, required: true },
  },
}
</script>

<style scoped>
.card {
  transition: all 0.2s linear;
  cursor: pointer;
}
</style>
