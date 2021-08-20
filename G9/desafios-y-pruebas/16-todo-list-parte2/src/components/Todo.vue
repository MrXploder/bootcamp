<template>
  <div>
    <h1>Crea una nueva tarea</h1>

    <TodoAdd @nueva-actividad="agregarNuevaActividad" />

    <TodoList :actividades="actividades" />
  </div>
</template>

<script>
import TodoList from "./TodoList.vue";
import TodoAdd from "./TodoAdd.vue";

export default {
  name: "Todo",
  components: {
    TodoList,
    TodoAdd,
  },
  data: () => ({
    actividades: [],
  }),
  methods: {
    agregarNuevaActividad(nuevaActividad) {
      this.actividades.push(nuevaActividad);
    },
  },
};
</script>
