<template>
  <div>
    <h1>Listado de Panes que tenemos para ofrecer</h1>
    <ul>
      <li v-for="(pan, $index) of panes" :key="$index">
        <img :src="pan.img" alt="" style="width: 128px; height: 128px" />
        <br />
        <p>Nombre: {{ pan.nombre }}</p>
        <button @click="agregarProductoAlCarrito(pan)">
          Agregar al carrito
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data: () => ({
    panes: [
      {
        nombre: 'Amasado',
        img: 'https://cdn7.kiwilimon.com/brightcove/6838/6838.jpg',
      },
      {
        nombre: 'Batido',
        img: 'https://comidaschilenas.com/wp-content/uploads/2019/01/Receta-de-la-marraqueta-chilena.jpg',
      },
    ],
  }),
  methods: {
    ...mapActions('carrito', ['agregarProducto']),
    agregarProductoAlCarrito(pan) {
      this.agregarProducto({ ...pan, categoria: 'pancitos' });
    },
  },
};
</script>

<style></style>
