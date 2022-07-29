<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/panes">Panes</router-link> |
      <router-link to="/ingredientes">Ingredientes</router-link>
      <Carrito />
    </nav>
    <router-view />
  </div>
</template>

<script>
import Carrito from '@/components/Carrito.vue';
export default {
  components: {
    Carrito,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
