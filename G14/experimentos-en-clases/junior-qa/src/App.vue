<template>
  <div>
    <h1>Desafio</h1>
    <Avatar
      v-for="(personaje, $index) of personajes"
      :key="$index"
      :nombre="personaje.nombre"
      :imagen="personaje.src"
    />
    <input type="text" class="prueba" />
  </div>
</template>

<script>
import Avatar from '@/components/Avatar.vue';
export default {
  name: 'App',
  components: { Avatar },
  data: () => ({
    personajes: [
      {
        nombre: 'Rick Sanchez',
        src: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      },
      {
        nombre: 'Morty Smith',
        src: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
      },
      {
        nombre: 'Summer Smith',
        src: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
      },
      {
        nombre: 'Beth Smith',
        src: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg',
      },
      {
        nombre: 'Jerry Smith',
        src: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg',
      },
    ],
  }),
};
</script>

<style>
body {
  background-image: url('../public/assets/background.png');
}
</style>
