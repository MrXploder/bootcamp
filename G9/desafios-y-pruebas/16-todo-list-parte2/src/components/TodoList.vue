<template>
  <div>
    <h1>Lista</h1>

    <ul>
      <li v-for="(actividad, $index) in actividades" :key="$index">
        {{ actividad }}
        <button @click="$emit('eliminar-actividad', $index)">R</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TodoList",
  props: {
    actividades: { type: Array, required: true },
  },
};
</script>

<style></style>
