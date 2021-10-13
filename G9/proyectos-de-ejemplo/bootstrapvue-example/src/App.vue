<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">RickAndMorty</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#">Inicio</b-nav-item>
          <b-nav-item href="#">Busqueda</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <b-row>
      <b-col
        v-for="(personaje, $index) in personajes"
        :key="$index"
        cols="auto"
      >
        <b-card
          :title="personaje.nombre"
          :img-src="personaje.imagen"
          img-top
          tag="article"
          style="width: 400px"
          class="mb-2"
        >
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    personajes: [
      {
        id: 1,
        nombre: "Morty",
        imagen: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
      },
      {
        id: 2,
        nombre: "Rick",
        imagen: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      },
      {
        id: 3,
        nombre: "Summer",
        imagen: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
      },
      {
        id: 4,
        nombre: "Beth",
        imagen: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
      },
      {
        id: 5,
        nombre: "Jerry",
        imagen: "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
      },
    ],
  }),
};
</script>
