<template>
  <div>nombre del cliente: {{ idcliente }}</div>
</template>

<script>
//object api
/**
 * @debt - aqui quedo horrible no se sabe si es un texto o un numero
 * arreglar
 */
export default {
  name: "ClientDetails",
  props: ["idcliente"],
};
</script>

<style></style>
