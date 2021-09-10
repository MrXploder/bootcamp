<template>
  <h1>Hola mundo {{ error }}</h1>
</template>

<script>
import Axios from "axios";
export default {
  data: () => ({
    pokemon: null,
  }),
  methods: {
    ejemploPromises() {
      Axios.get("https://pokeapi.co/api/v2/pokemon/pikachu")
        .then((respuesta) => {
          // como es Axios tenemos el "data"
          this.pokemon = respuesta.data;
        })
        .catch((error) => {
          this.error = error;
          console.error(error);
        });
    },
    async ejemploAsyncAwait() {
      try {
        const respuesta = await Axios.get(
          "https://pokeapi.co/api/v2/pokemon/pikachu"
        );
        this.pokemon = respuesta.data;
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style></style>
