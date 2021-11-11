<template>
  <div>
    <h1>
      Cantidad de juegos con stock: {{ $store.getters.juegosConStock.length }}
    </h1>

    <h1>Venta de juegos</h1>
    <Juegos :juegos="$store.getters.juegosConStock" show-sell-button />
  </div>
</template>

<script>
import Juegos from "../components/Juegos.vue";

export default {
  components: { Juegos },
};
</script>

<style></style>
