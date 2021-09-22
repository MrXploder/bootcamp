<template>
  <div>
    <h4>Todos los productos</h4>
    <div class="row">
      <div
        class="col-sm mb-4 mb-md-0"
        v-for="(producto, $index) in $store.state.productos.todosLosProductos"
        :key="$index"
      >
        <TarjetaProducto :producto="producto" class="mx-auto" />
      </div>
    </div>
  </div>
</template>

<script>
import TarjetaProducto from '../components/Productos/TarjetaProducto.vue'
export default {
  components: { TarjetaProducto }
}
</script>

<style></style>
