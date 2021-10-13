<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />

    <button @click="$store.dispatch('traerTodosLosPacientes')">
      Actualizar pacientes
    </button>
    <ul>
      <li v-for="paciente in $store.state.pacientes" :key="paciente.id">
        {{ paciente.nombre }} {{ paciente.apellido }} - {{ paciente.edad }} |
        {{ paciente.prevision }}
      </li>
    </ul>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  data: () => ({}),
  mounted() {},
};
</script>
