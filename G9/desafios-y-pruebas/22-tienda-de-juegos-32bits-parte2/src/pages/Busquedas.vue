<template>
  <div>
    <section>
      <h3>Filtro</h3>
      <input
        type="text"
        placeholder="Escriba el nombre del producto"
        :value="$store.state.busqueda"
        @input="$store.dispatch('setBusqueda', $event.target.value)"
      />

      <Juegos
        v-if="$store.getters.juegosSegunBusqueda.length > 0"
        :juegos="$store.getters.juegosSegunBusqueda"
      />
      <ul v-else>
        <li>Escribe algo para buscar</li>
      </ul>
    </section>
    <section>
      <h3>Cantidad de juegos totales y de stock total</h3>
      <ul>
        <li>juegos totales: {{ $store.state.juegos.length }}</li>
        <li>stock total: {{ $store.getters.stockTotal }}</li>
      </ul>
    </section>
    <section>
      <h3>Listado de juegos</h3>

      <Juegos :juegos="$store.state.juegos" />
    </section>
  </div>
</template>

<script>
import Juegos from "../components/Juegos.vue";
export default {
  name: "BusquedasPage",
  components: { Juegos },
};
</script>

<style></style>
