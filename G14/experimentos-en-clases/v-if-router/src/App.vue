<template>
  <div>
    <h1>Hola</h1>

    <div style="display: flex; flex-direction: row">
      <button @click="mostrarVista('personas')">Personas</button>
      <button @click="mostrarVista('clientes')">Clientes</button>
      <button @click="mostrarVista('productos')">Productos</button>
    </div>

    <div style="width: 100%; height: 100%" v-if="vistaActual === 'personas'">
      <h1>Vista de Personas</h1>
    </div>
    <div style="width: 100%; height: 100%" v-if="vistaActual === 'clientes'">
      <h1>Vista de Clientes</h1>
    </div>
    <div style="width: 100%; height: 100%" v-if="vistaActual === 'productos'">
      <h1>Vista de Productos</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    vistaActual: "personas",
  }),
  methods: {
    mostrarVista(vista) {
      this.vistaActual = vista;
    },
  },
};
</script>

<style>
body,
html  {
  height: 100%;
  width: 100%;
}
</style>
