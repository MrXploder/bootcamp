<template>
  <v-app>
    <v-container>
      <v-layout row>
        <v-flex shrink v-for="personaje in personajes" :key="personaje.id">
          <v-card :elevation="2">
            <v-card-title>
              {{ personaje.nombre }}
            </v-card-title>
            <v-card-text>
              <v-img :src="personaje.imagen" contain height="340px"></v-img>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container>
      <v-row>
        <v-col
          v-for="personaje in personajes"
          :key="personaje.id"
          cols="12"
          md="6"
          lg="4"
        >
          <v-card class="mx-auto" max-width="344">
            <v-img :src="personaje.imagen" height="200px"></v-img>

            <v-card-title> {{ personaje.nombre }}</v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
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

<style>
.image {
  width: 100%;
  display: block;
}
</style>
