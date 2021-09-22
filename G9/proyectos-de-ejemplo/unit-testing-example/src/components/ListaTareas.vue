<template>
  <ul>
    <li v-for="(tarea, $index) in $store.state.tareas" :key="$index">
      {{ tarea }}
    </li>
  </ul>
</template>

<script>
export default {};
</script>

<style></style>
