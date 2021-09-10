<template>
  <div>
    <h3>Ventas</h3>

    <section>
      <h3>Cantidad de juegos con stock</h3>
      <Juegos :juegos="$store.getters.juegosConStock" />
      <p>Total: {{ $store.getters.totalJuegosConStock }}</p>
    </section>
    <section>
      <h3>Venta de Juegos</h3>
      <Juegos
        :juegos="$store.state.juegos"
        modo="vender"
        @vender="$store.dispatch('venderJuego', $event)"
      />
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
