<template>
  <li>
    <div v-if="!tarea.modificable">{{ tarea.$index + 1 }}: {{ tarea.texto }}</div>
    <input v-if="tarea.modificable" type="text" v-model="tarea.texto" />
    <button @click="modificar(tarea)">M</button>
    <button @click="borrar(tarea)">E</button>
  </li>
</template>

<script>
export default {
  name: 'TodoListItem',
  props: {
    tarea: {
      type: Object,
      required: true,
    },
  },
  methods: {
    borrar(tarea) {
      this.$emit('borrar-tarea', tarea)
    },
  },
}
</script>

<style></style>
