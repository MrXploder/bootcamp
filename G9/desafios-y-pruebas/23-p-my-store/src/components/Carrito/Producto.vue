<template>
  <div class="card">
    <div class="row">
      <div class="col-md-4">
        <img :src="producto.imagen" class="w-100" />
      </div>
      <div class="col-md-8 px-3">
        <div class="card-block px-3">
          <h4 class="card-title">{{ producto.nombre }}</h4>
          <p class="card-text">Precio: ${{ producto.precio }}</p>
          <div class="row align-items-center">
            <p class="card-text mb-0 mr-4">Cantidad: {{ producto.cantidad }}</p>
            <div class="btn-group-vertical">
              <button
                class="btn btn-info"
                @click="$store.dispatch('carrito/agregarProducto', producto)"
              >
                +
              </button>
              <button
                class="btn btn-info"
                @click="$store.dispatch('carrito/quitarProducto', producto)"
              >
                -
              </button>
            </div>
          </div>

          <p class="card-text">
            Subtotal: ${{ (producto.cantidad * producto.precio).toLocaleString('de-DE') }}
          </p>
          <p class="card-text">
            Total: ${{
              parseInt(
                producto.precio * (1 - producto.descuento / 100) * producto.cantidad
              ).toLocaleString('de-DE')
            }}
          </p>
          <!-- <a href="#" class="btn btn-primary">Read More</a> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    producto: { type: Object, required: true }
  }
}
</script>

<style></style>
