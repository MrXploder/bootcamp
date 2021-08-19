<template>
  <div>
    <h1>Stock de Juegos</h1>
    <ul>
      <li v-for="(juego, $index) in $store.state.juegos" :key="juego.codigo">
        {{ juego }} <button @click="agregarProducto(juego, $index)">ADD</button>
      </li>
    </ul>
    <hr />

    <h1>Carrito de compras</h1>
    <ul>
      <li v-for="juego in $store.state.carritoDeCompras" :key="juego.codigo">
        {{ juego }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    agregarProducto(juego, $index) {
      this.$store.dispatch("agregarProductoAlCarritoDeCompras", {
        juego,
        $index,
      });
    },
  },
};
</script>

<style></style>
