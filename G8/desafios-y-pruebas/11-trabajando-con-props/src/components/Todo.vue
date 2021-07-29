<template>
  <div>
    <h1 class="h1">{{ title }}</h1>
    <TodoTaskInput @nueva-tarea="agregarTarea" />

    <h2>Lista</h2>

    <TodoListItems :tareas="tareas" @borrar-tarea="borrarTarea" />
  </div>
</template>

<script>
import TodoTaskInput from '@/components/TodoTaskInput.vue'
import TodoListItems from '@/components/TodoListItems.vue'

export default {
  name: 'Todo',
  components: {
    TodoTaskInput,
    TodoListItems,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    nuevaTarea: '',
    tareas: [],
  }),
  methods: {
    agregarTarea(nuevaTarea) {
      this.tareas.push({ texto: nuevaTarea, $index: this.tareas.length })
    },
    modificar(tarea) {
      if (!tarea.modificable) {
        tarea.modificable = true
      } else {
        tarea.modificable = false
      }
    },
    borrarTarea(tareaABorrar) {
      this.tareas = this.tareas.filter((tarea) => tarea.$index !== tareaABorrar.$index)
    },
  },
}
</script>

<style></style>
