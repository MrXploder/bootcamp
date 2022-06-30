<template>
  <h1>Este es el componente saludar, cantidad de saludos: {{ cantidad }}</h1>
</template>

<script>
export default {
  data: () => ({
    cantidad: 0,
  }),
  methods: {
    saludar() {
      this.cantidad++;
    },
  },
};
</script>

<style></style>
