<template>
  <div>
    <div>Hola soy {{ name }}</div>
    <button @click="$emit('saludar', name)">Saludar</button>
  </div>
</template>

<script>
export default {
  name: "Hijo",
  props: {
    name: String,
  },
};
</script>

<style></style>
