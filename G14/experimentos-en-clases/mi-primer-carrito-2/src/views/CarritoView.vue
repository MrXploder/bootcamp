<template>
  <div>
    <h4>Detalle de productos en el carrito</h4>

    <h4>Todos los productos</h4>
    <ul>
      <li v-for="(producto, $index) in productos" :key="$index">
        Nombre: {{ producto.nombre }} - Categoria: {{ producto.categoria }}
      </li>
    </ul>

    <hr />

    <h4>Pancitos</h4>
    <ul>
      <li v-for="(pan, $index) in todosLosPancitos" :key="$index">
        Nombre: {{ pan.nombre }}
      </li>
    </ul>

    <hr />

    <h4>Ingredientes</h4>
    <ul>
      <li v-for="(ingrediente, $index) in todosLosIngredientes" :key="$index">
        Nombre: {{ ingrediente.nombre }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
export default {
  computed: {
    ...mapState('carrito', ['productos']),
    ...mapGetters('carrito', ['todosLosPancitos', 'todosLosIngredientes']),
  },
};
</script>

<style></style>
