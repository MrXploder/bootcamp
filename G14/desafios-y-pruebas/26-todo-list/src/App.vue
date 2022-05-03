<template>
  <div class="container">
    <div class="row">
      <div class="col mx-auto text-center">
        <div class="card p-4">
          <h4 class="text-secondary mt-4">TodoList</h4>
          <form class="mt-4" @submit.prevent="agregarNuevaTarea()">
            <div class="form-group row">
              <div class="col-9">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Ingresa una nueva tarea"
                  required
                  v-model="nuevaTarea"
                />
              </div>
              <div class="col-2">
                <button type="submit" class="btn btn-outline-secondary">
                  Agregar
                </button>
              </div>
            </div>
          </form>
          <h4 class="text-secondary mt-4">Lista</h4>
          <ul class="list-group">
            <li
              class="list-group-item"
              v-for="(tarea, $index) of tareas"
              :key="$index"
            >
              {{ $index + 1 }}: {{ tarea }} -
              <button class="btn btn-danger" @click="eliminarTarea($index)">
                Eliminar
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    nuevaTarea: "",
    tareas: [],
  }),
  methods: {
    agregarNuevaTarea() {
      this.tareas.unshift(this.nuevaTarea);
      this.nuevaTarea = "";
    },
    eliminarTarea(indiceTarea) {
      this.tareas.splice(indiceTarea, 1);
    },
  },
};
</script>

<style></style>
