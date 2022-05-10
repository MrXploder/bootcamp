<template>
  <div>
    <button @click="agregarHijo">Agregar hijo</button>
    <button @click="quitarHijo">Quitar hijo</button>
    <div class="father-box">
      <Hijo v-for="(hijo, $index) of hijos" :key="$index" :numero="hijo" />
    </div>

    <button @click="mostrarHijo = !mostrarHijo">Toggle hijo</button>
    <Hijo :numero="30" v-if="mostrarHijo" />
    <Hijo :numero="60" v-show="mostrarHijo" />
  </div>
</template>

<script>
import Hijo from "@/components/Hijo.vue";

export default {
  components: { Hijo },
  data: () => ({
    hijos: [1, 2],
    mostrarHijo: true,
  }),
  methods: {
    agregarHijo() {
      this.hijos.push(this.hijos.length + 1);
    },
    quitarHijo() {
      this.hijos.pop();
    },
  },
  mounted() {},
};
</script>

<style>
.father-box {
  width: 100%;
  height: 200px;
  border: 4px solid black;
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
}
</style>
