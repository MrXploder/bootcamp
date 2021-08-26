<template>
  <div>
    <h1>Carrito de Compras</h1>

    <ul>
      <li v-for="(product, $index) in $store.state.shoppingCart" :key="$index">
        {{ product.name }} | {{ product.category }} | ${{ product.price }} |
        {{ product.offer ? `${product.discount}%` : '' }} | Cantidad:
        <button
          @click="
            $store.dispatch(
              'restarCantidadAlProductoDelCarritoDeCompras',
              $index
            )
          "
        >
          -
        </button>
        {{ product.qty }}
        <button
          @click="
            $store.dispatch(
              'agregarCantidadAlProductoDelCarritoDeCompras',
              $index
            )
          "
        >
          +
        </button>
      </li>
    </ul>

    <p v-if="$store.state.shoppingCart.length > 0">
      El total de tu carrito de compras es: ${{
        $store.getters['shoppingCartTotal']
      }}
    </p>
    <p v-else>No tienes productos en tu carrito de compras</p>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
