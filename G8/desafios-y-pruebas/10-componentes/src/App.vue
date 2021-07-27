<template>
  <div>
    <list :items="items" />
  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    items: [
      { nombre: 'Rick Sanchez', src: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg' },
      { nombre: 'Morty Smith', src: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg' },
    ],
  }),
}
</script>

<style>
body {
  background-image: url(../public/background.png);
}
</style>
