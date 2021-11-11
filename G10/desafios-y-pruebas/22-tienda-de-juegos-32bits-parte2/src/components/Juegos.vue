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
        v-if="showSellButton"
        @click="handleSellButtonClick(juego)"
        class="btn btn-primary"
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
    showSellButton: { type: Boolean, default: false },
  },
  methods: {
    async handleSellButtonClick(juego) {
      await this.$store.dispatch("procesarVenta", juego);
      await this.$store.dispatch("registrarVenta", juego);
    },
  },
};
</script>

<style></style>
