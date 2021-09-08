<template>
  <ul>
    <li
      v-for="juego in juegos"
      :key="juego.codigo"
      :style="{ 'background-color': juego.color }"
    >
      {{ juego.codigo }} | {{ juego.nombre }} | {{ juego.stock }} |
      {{ juego.precio }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "Juegos",
  props: {
    juegos: { type: Array, require: true },
  },
};
</script>

<style></style>
