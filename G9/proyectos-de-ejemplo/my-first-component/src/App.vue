<template>
  <div>
    <div class="titulo">Hola mundo</div>
    <MiComponente />

    <input :value="texto" @input="texto = $event.target.value" />

    <Padre @saludar="log" />
  </div>
</template>

<script>
import MiComponente from "./components/MiComponente.vue";
import Padre from "./components/Padre.vue";

export default {
  name: "App",
  components: { MiComponente, Padre },
  data: () => ({
    texto: "algo",
  }),
  methods: {
    log(nombre) {
      console.log("dentro de App.vue => ", nombre);
    },
  },
};
</script>

<style scoped></style>
