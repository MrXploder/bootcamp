<template>
  <form @submit.prevent="nuevoProducto">
    <label for="">Nombre Producto</label>
    <input type="text" v-model="nombre" required />
    <br />
    <label for="">Precio del producto</label>
    <input type="number" v-model.number="precio" required />

    <br />
    <button type="submit">Guardar</button>
  </form>
</template>

<script>
export default {
  name: "NewProduct",
  data: () => ({
    nombre: "",
    precio: null,
  }),
  methods: {
    nuevoProducto() {
      const form = [this.nombre, this.precio];
      console.log(form);
    },
  },
};
</script>

<style></style>
