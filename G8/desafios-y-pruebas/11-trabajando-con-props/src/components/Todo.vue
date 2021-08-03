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

import { Todo } from '@/services/Todos/index.js'

const $TodoService = new Todo('https://run.mocky.io/v3/6e51fef0-60e1-49c4-87ab-4ace465f0086')

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
  mounted() {
    $TodoService.getAllTodos().then((todos) => {
      this.tareas = todos
    })
  },
}
</script>

<style></style>
