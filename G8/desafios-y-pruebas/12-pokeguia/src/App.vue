<template>
  <div id="app">
    <img class="logo" src="./assets/pokemon-logo.jpg" />
    <h1>PokeGuía</h1>
    <div>
      <label>Nombre:</label>
      <input v-model="nombrePokemon" />
      <button @click="buscarPokemon">Buscar</button>
    </div>
    <div>
      <img :src="frontDefault" />
    </div>
    <div>
      <h2>Movimientos</h2>
      <p v-for="(movimiento, $index) in moves" :key="$index">
        {{ movimiento.move.name }}
      </p>
    </div>
    <div>
      <h2>Habilidades</h2>
      <p v-for="(habilidad, $index) in abilities" :key="$index">
        {{ habilidad.ability.name }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    nombrePokemon: "",
    pokemon: null,
  }),
  methods: {
    resetPokemon() {
      this.pokemon = null;
    },
    async buscarPokemon() {
      if (this.nombrePokemon !== "") {
        this.getPokemon(this.nombrePokemon);
      }
    },
    async getPokemon(nombrePokemon) {
      try {
        let response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`
        );
        let data = await response.json();

        this.pokemon = data;
      } catch (e) {
        console.error(e);
      }
    },
  },
  computed: {
    frontDefault() {
      return (
        (this.pokemon &&
          this.pokemon.sprites &&
          this.pokemon.sprites.front_default) ||
        ""
      );
    },

    moves() {
      return (this.pokemon && this.pokemon.moves) || [];
    },

    abilities() {
      return (this.pokemon && this.pokemon.abilities) || [];
    },
  },
  created() {
    this.nombrePokemon = "pikachu";
    this.buscarPokemon();
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.logo {
  width: 50vh;
}

.lista {
  list-style: none;
  width: 50vh;
  margin: 0 auto;
}
</style>
