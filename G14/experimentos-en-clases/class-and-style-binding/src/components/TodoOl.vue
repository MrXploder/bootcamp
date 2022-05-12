<template>
  <ol :style="{ backgroundColor: dark ? 'black' : 'white' }">
    <li
      v-for="(tarea, $index) in value"
      :key="$index"
      class="text-center"
      :class="{
        'bg-high': tarea.prioridad === 'alta',
        'bg-middle': tarea.prioridad === 'media',
        'bg-low': tarea.prioridad === 'baja',
      }"
      :style="{ color: dark ? 'white' : 'black' }"
    >
      {{ tarea.text }} - prioridad: {{ tarea.prioridad }}
    </li>
  </ol>
</template>

<script>
export default {
  props: {
    value: { type: Array, required: true },
    dark: { type: Boolean, default: false },
  },
};
</script>

<style scoped>
.text-center {
  text-align: center;
}
</style>
