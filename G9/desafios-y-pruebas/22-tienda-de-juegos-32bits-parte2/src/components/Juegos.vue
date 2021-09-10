<template>
  <ul>
    <li
      v-for="juego in juegos"
      :key="juego.codigo"
      :style="{ 'background-color': juego.color }"
    >
      {{ juego.codigo }} | {{ juego.nombre }} | {{ juego.stock }} |
      {{ juego.precio }} |
      <button
        v-if="modo === 'vender'"
        class="btn btn-info btn-sm m-2"
        @click="$emit('vender', juego)"
        :disabled="juego.stock <= 0"
      >
        Vender
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Juegos",
  props: {
    juegos: { type: Array, require: true },
    modo: { type: String, default: "mirar" },
  },
};
</script>

<style></style>
