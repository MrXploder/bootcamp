<template>
  <div>
    <h1>Vista de pacientes</h1>
    <ul>
      <li
        v-for="(paciente, $index) in $store.state.pacientes.data"
        :key="$index"
      >
        {{ paciente }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
