<template>
  <div class="input-control">
    <label>Tarea</label>
    <input
      type="text"
      placeholder="Ingrese nueva tarea"
      v-model="nuevaActividad"
    />
    <button @click="agregarNuevaActividad">Crear</button>
  </div>
</template>

<script>
export default {
  name: "TodoAdd",
  data: () => ({
    nuevaActividad: "",
  }),
  methods: {
    agregarNuevaActividad() {
      this.$emit("nueva-actividad", this.nuevaActividad);
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
