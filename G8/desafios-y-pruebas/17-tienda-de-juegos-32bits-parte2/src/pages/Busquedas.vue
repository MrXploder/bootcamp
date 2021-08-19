<template>
  <div>
    <h1>Busquedas</h1>
    <input
      type="text"
      placeholder="codigo del juego"
      :value="busquedaPorCondigo"
      @input="$store.commit('SET_BUSQUEDA', $event.target.value)"
    />
    <ul>
      <li
        v-for="juego in $store.getters.productosFiltrados"
        :key="juego.codigo"
        :style="{ backgroundColor: juego.color }"
      >
        {{ juego.codigo }} | {{ juego.nombre }} | {{ juego.stock }} |
        {{ juego.precio }}
      </li>
    </ul>
    <Listado />
  </div>
</template>

<script>
import Listado from "@/components/Listado.vue";

export default {
  name: "BusquedasPage",
  components: {
    Listado,
  },
  computed: {
    busquedaPorCodigo() {
      return this.$store.state.busquedaPorCodigo;
    },
  },
};
</script>

<style></style>
