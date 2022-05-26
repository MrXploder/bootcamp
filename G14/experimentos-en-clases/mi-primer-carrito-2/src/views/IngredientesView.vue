<template>
  <div>
    <h1>Listado de Panes que tenemos para ofrecer</h1>
    <ul>
      <li v-for="(ingrediente, $index) of ingredientes" :key="$index">
        <img
          :src="ingrediente.img"
          alt=""
          style="width: 128px; height: 128px"
        />
        <br />
        <p>Nombre: {{ ingrediente.nombre }}</p>
        <button @click="agregarProductoAlCarrito(ingrediente)">
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
    ingredientes: [
      {
        nombre: 'Mantequilla',
        img: 'https://www.cocinayvino.com/wp-content/uploads/2016/10/48713650_l-1200x675.jpg',
      },
      {
        nombre: 'Manjar',
        img: 'https://static.emol.cl/emol50/Fotos/2020/11/02/file_20201102112610.png',
      },
    ],
  }),
  methods: {
    ...mapActions('carrito', ['agregarProducto']),
    agregarProductoAlCarrito(ingrediente) {
      this.agregarProducto({ ...ingrediente, categoria: 'ingredientes' });
    },
  },
};
</script>

<style></style>
