<template>
  <div>
    <h1>{{ $store.state.todos.status }}</h1>

    <button>Crear</button>
    <ul>
      <li v-for="todo in $store.state.todos.data" :key="todo.id">
        <template v-if="!todo.editable">
          {{ todo.visibleName }}
        </template>
        <template v-if="todo.editable">
          <input v-model="todo.visibleName" />
        </template>
        | <button @click="onEditClick(todo)">Editar</button> |
        <button @click="onRemoveClick(todo)">Eliminar</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {
    this.$store.dispatch("todos/getTodos");
  },
  methods: {
    async onEditClick(todo) {
      if (!todo.editable) {
        this.$set(todo, "editable", true);
      } else {
        await this.$store.dispatch("todos/updateTodo", { ...todo });
        alert("tarea editada con exito");
        await this.$store.dispatch("todos/getTodos");
        this.$set(todo, "editable", false);
      }
    },
    async onRemoveClick(todo) {
      await this.$store.dispatch("todos/removeTodo", { ...todo });
      alert("Tarea eliminada con exito");
      await this.$store.dispatch("todos/getTodos");
    },
  },
};
</script>
