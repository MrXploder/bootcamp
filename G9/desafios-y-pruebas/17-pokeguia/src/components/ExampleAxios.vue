<template>
  <div></div>
</template>

<script>
import axios from "axios";

export default {
  created() {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/pikachu")
      .then((datosDelPokemon) => {
        console.log({ conAxios: datosDelPokemon.data });
      });
  },
};
</script>

<style></style>
