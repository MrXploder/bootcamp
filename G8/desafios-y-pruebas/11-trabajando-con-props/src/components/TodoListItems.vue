<template>
  <ul>
    <TodoListItem v-for="(tarea, $index) in tareas" :key="$index" :tarea="tarea" @borrar-tarea="borrarTarea" />
  </ul>
</template>

<script>
import TodoListItem from '@/components/TodoListItem.vue'

export default {
  name: 'TodoListItems',
  components: {
    TodoListItem,
  },
  props: {
    tareas: {
      type: Array,
      required: true,
    },
  },
  methods: {
    borrarTarea(tarea) {
      this.$emit('borrar-tarea', tarea)
    },
  },
}
</script>

<style></style>
