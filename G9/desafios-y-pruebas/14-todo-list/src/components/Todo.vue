<template>
  <div>
    <h1>Crea una nueva tarea</h1>

    <div class="input-control">
      <label>Tarea</label>
      <input
        type="text"
        placeholder="Ingrese nueva tarea"
        v-model="nuevaActividad"
      />
      <button @click="agregarNuevaActividad">Crear</button>
    </div>

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
  name: "Todo",
  data: () => ({
    nuevaActividad: "",
    actividades: [],
  }),
  methods: {
    agregarNuevaActividad() {
      this.actividades.push(this.nuevaActividad);
      this.nuevaActividad = "";
    },
  },
};
</script>

<style scoped>
.input-control {
  display: inline-block;
}
</style>
