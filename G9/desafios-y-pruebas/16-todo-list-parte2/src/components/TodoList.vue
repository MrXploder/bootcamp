<template>
  <div>
    <h1>Lista</h1>

    <ul>
      <li v-for="(actividad, $index) in actividades" :key="$index">
        {{ actividad }}
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
