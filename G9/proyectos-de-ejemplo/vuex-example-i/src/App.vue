<template>
  <div>
    <input v-model="tarea.texto" />
    <input
      v-model.number="tarea.precio"
      type="number"
      step="100"
      min="100"
      max="900"
    />
    <button @click="agregarTarea">Agregar tarea</button>
    <h1>
      {{ !cargando ? "Lista del Super" : "Agregando elemento a la lista" }}
    </h1>
    <ul>
      <li
        v-for="(tarea, $index) in $store.state.tareas"
        :key="$index"
        :style="{
          'background-color':
            tarea.precio <= 300
              ? 'green'
              : tarea.precio > 300 && tarea.precio <= 500
              ? 'orange'
              : tarea.precio > 500
              ? 'red'
              : 'blue',
        }"
      >
        {{ tarea.texto }} | {{ tarea.precio }}
      </li>
    </ul>

    <h1>Productos terrible caros</h1>
    <ul>
      <li
        v-for="(tarea, $index) in $store.getters.productosTerribleCaros"
        :key="$index"
        :style="{
          'background-color':
            tarea.precio <= 300
              ? 'green'
              : tarea.precio > 300 && tarea.precio <= 500
              ? 'orange'
              : tarea.precio > 500
              ? 'red'
              : 'blue',
        }"
      >
        {{ tarea.texto }} | {{ tarea.precio }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    tarea: { texto: "", precio: 0 },
    cargando: false,
  }),
  methods: {
    async agregarTarea() {
      this.cargando = true;
      try {
        await this.$store.dispatch("agregarTarea", { ...this.tarea });
        this.cargando = false;
      } catch (e) {
        console.error(e);
      }
    },
  },
};
</script>
