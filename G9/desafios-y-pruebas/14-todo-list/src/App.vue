<template>
  <div>
    <Todo />
    <Todo />
    <Todo />
    <Todo />
    <Todo />
  </div>
</template>

<script>
// const nuevaActividad = "";
// const actividades = [];

// function agregarNuevaActividad(nuevaActividad) {
//   actividades.push(nuevaActividad);
// }
import Todo from "./components/Todo.vue";

export default {
  name: "App",
  components: {
    Todo,
  },
};
</script>
