<template>
  <div>
    <div>{{ texto }}</div>
    <Texto v-if="mostrar" ref="textoHijo" />
    <button>Destruir</button>

    <br />
    <hr />

    <Pacientes />
  </div>
</template>

<script>
import Texto from "./components/Texto.vue";
import Pacientes from "./components/Pacientes.vue";
export default {
  components: { Texto, Pacientes },
  name: "App",
  data: () => ({
    texto: "Hola mundo",
    mostrar: true,
  }),
  methods: {},
  props: {},
  beforeCreate() {
    console.log("before create");
  },
  created() {
    console.log("created");
  },
  beforeMount() {
    console.log("before mount");
  },
  mounted() {
    console.log("mounted");
    this.$refs.textoHijo.log();
  },
  beforeUpdate() {
    console.log("before update");
  },
  updated() {
    console.log("updated");
  },
  beforeDestroy() {
    console.log("before destroy");
  },
  destroyed() {
    console.log("destroyed");
  },
};
</script>

<style></style>
