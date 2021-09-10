<template>
  <div>
    <h3>Total</h3>

    <section>
      <h3>Listado total de ventas (carrito de compras)</h3>
      <Juegos :juegos="$store.state.ventas" />
    </section>
    <section>
      <h3>Monto total de ventas</h3>
      <p>Total: ${{ $store.getters.montoTotalDeVentas }}</p>
    </section>
  </div>
</template>

<script>
import Juegos from "../components/Juegos.vue";
export default {
  components: { Juegos },
};
</script>

<style></style>
