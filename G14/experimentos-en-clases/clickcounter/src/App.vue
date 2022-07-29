<template>
  <div>
    <h1>Cantidad de clicks: {{ clicks }}</h1>
    <button @click="incrementar">+</button>
    <button @click="decrementar">-</button>
  </div>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    clicks: 0,
  }),
  methods: {
    incrementar() {
      this.clicks++;
    },
    decrementar() {
      this.clicks--;
    },
  },
};
</script>

<style></style>
