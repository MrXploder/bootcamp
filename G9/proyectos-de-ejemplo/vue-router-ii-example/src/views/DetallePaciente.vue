<template>
  <div>
    <h1>Detalle paciente:</h1>
    <ul>
      <li>Param => {{ $route.params.nombre }}</li>
      <li>Prop => {{ nombre }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    nombre: { type: String, require: true },
  },
}
</script>

<style></style>
