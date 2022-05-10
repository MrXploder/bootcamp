<template>
  <main>
    <section class="banner">
      <img src="pokemon-banner.jpeg" />
    </section>

    <section class="search">
      <h4>PokeGuía</h4>
      <form class="input-search" @submit.prevent="findPokemon(pokemonName)">
        <p>Nombre:</p>
        <input type="text" v-model="pokemonName" required />
        <button type="submit">Buscar</button>
      </form>
    </section>

    <section>
      <img :src="pokemonFrontDefault" alt="" />
    </section>

    <section class="movements">
      <h4>Movimientos</h4>
      <ul>
        <li v-for="(move, $index) in pokemonMoves" :key="$index">
          {{ move }}
        </li>
      </ul>
    </section>

    <section class="abilities">
      <h4>Habilidades</h4>
      <ul>
        <li v-for="(ability, $index) in pokemonAbilities" :key="$index">
          {{ ability }}
        </li>
      </ul>
    </section>
  </main>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    pokemon: null,
    pokemonName: "",
  }),
  mounted() {
    this.findPokemon("pikachu")
  },
  computed: {
    pokemonMoves() {
      return this.pokemon?.moves?.map?.((move) => move.move.name) ?? []
    },
    pokemonAbilities() {
      return this.pokemon?.abilities?.map?.((ability) => ability.ability.name) ?? []
    },
    pokemonFrontDefault() {
      return this.pokemon?.sprites?.front_default ?? ""
    },
  },
  methods: {
    async findPokemon(pokemonName) {
      const pokemon = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
      ).then((response) => response.json())

      this.pokemon = pokemon
    },
  },
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  background-color: black;
  color: white;
}

main {
  max-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
}

.banner {
  display: flex;
  align-items: center;
  justify-content: center;
}
.banner img {
  width: 50%;
}

.search {
  text-align: center;
}

.search .input-search {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

.search .input-search p {
  margin: 0;
}
</style>
