<template>
  <div></div>
</template>

<script>
export default {
  created() {
    fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
      .then((response) => {
        return response.json();
      })
      .then((datosDelPokemon) => {
        console.log({ conFetch: datosDelPokemon });
      });
  },
};
</script>

<style></style>
