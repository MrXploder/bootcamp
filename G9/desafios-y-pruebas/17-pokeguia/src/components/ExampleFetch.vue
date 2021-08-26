<template>
  <div>
    <button @click="actualizarPokemon()"></button>
  </div>
</template>

<script>
export default {
  created() {
    this.apiPokemon();
  },
  methods: {
    actualizarPokemon() {
      this.apiPokemon();
    },
    async apiPokemon() {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
      const pokemon = await response.json();
      console.log(pokemon);
    },
  },
};
</script>

<style></style>
