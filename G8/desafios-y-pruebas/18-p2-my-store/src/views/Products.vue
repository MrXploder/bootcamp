<template>
  <ul>
    <li v-for="(product, $index) in $store.state.productList" :key="$index">
      {{ product.name }} | {{ product.category }} | ${{ product.price }} |
      {{ product.offer ? `${product.discount}%` : '' }} |
      <button
        @click="$store.dispatch('agregarProductoAlCarritoDeCompras', product)"
      >
        Agregar al carrito
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Products'
}
</script>

<style></style>
