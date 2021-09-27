<template>
  <div>
    <h4>Carrito de compras</h4>

    <div class="row">
      <button class="btn btn-info" @click="clickPagar">Comprar</button>
      <p>Total a Pagar: {{ $store.getters['carrito/totalTotal'] }}</p>
    </div>

    <Producto
      v-for="(producto, $index) in $store.state.carrito.todosLosProductos"
      :key="$index"
      :producto="producto"
    />
  </div>
</template>

<script>
import Producto from '../components/Carrito/Producto.vue'

export default {
  components: {
    Producto
  },
  methods: {
    async clickPagar() {
      await this.$store.dispatch('carrito/comprar')
      alert('Compra procesada, muchas gracias por su preferencia!')
      this.$router.push('/')
    }
  }
}
</script>

<style></style>
