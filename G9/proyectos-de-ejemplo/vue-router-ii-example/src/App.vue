<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> | <router-link to="/about">About</router-link> |
      <router-link to="/pacientes">Pacientes</router-link>
      |
      <router-link to="/pacientes/luca">Paciente luca </router-link>

      |
      <router-link to="/configuracion/usuarios">Configuracion Usuarios</router-link>
      |
      <router-link to="/configuracion/materiales">Configuracion Materiales</router-link>
    </div>

    <transition name="slide-left" mode="in-out">
      <router-view />
    </transition>

    <!-- <DetallePaciente nombre="pepito" /> -->
  </div>
</template>

<script>
export default {
  components: {},
  mounted() {},
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
