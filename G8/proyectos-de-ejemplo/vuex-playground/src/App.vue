<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />

    <h1>
      Perfil de usuario
    </h1>

    <ul>
      <li>Nombre: {{ nombre }}</li>
      <li>Apellido:{{ $store.state.apellido }}</li>
      <li>
        Nombre completo: {{ nombreCompleto }}
        {{ $store.getters.nombreCompleto }}
      </li>
    </ul>

    <button @click="$store.dispatch('fetchUser')">Actualizar</button>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  name: "App",
  data: () => ({
    nickname: "jaja",
  }),
  computed: {
    ...mapState(["nombre", "apellido", "nickname"]),
    ...mapGetters(["nombreCompleto"]),
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
