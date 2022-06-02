<template>
  <div>
    <h3>Categoria: {{ categoria }}</h3>
    <input type="text" v-model="nuevaTarea" />
    <button @click="manejarClick">Agregar tarea</button>

    <ul>
      <li v-for="(tarea, $index) in tareas" :key="$index">
        {{ tarea.nombre }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  props: {
    categoria: { type: String, default: 'desconocida' },
  },
  data: () => ({
    nuevaTarea: '',
  }),
  computed: {
    // ...mapState("tareas", ["tareas"]),
    tareas() {
      if(this.categoria === "hogar"){
        return this.$store.getters["tareas/tareasHogar"]
      } else {
        return this.$store.getters["tareas/tareasExternas"]
      }
    },
  },
  methods: {
    ...mapActions('tareas', ['agregarTarea']),
    manejarClick() {
      this.agregarTarea({ nombre: this.nuevaTarea, categoria: this.categoria });
      this.nuevaTarea = '';
    },
  },
};
</script>

<style></style>
