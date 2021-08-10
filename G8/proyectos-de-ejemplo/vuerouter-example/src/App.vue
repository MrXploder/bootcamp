<template>
  <div>
    <div>Div principal</div>
    <router-view />
    <router-link to="/hello">Hello page</router-link>
    <router-link to="/world">World page</router-link>
    <button @click="goToHelloView">Ir a Hello View</button>
    <button @click="goToWorldView">Ir a World View</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    isHello: false,
    isWorld: true
  }),
  methods: {
    goToHelloView() {
      this.$router.push({ name: 'Hello' })
    },
    goToWorldView() {
      this.$router.push({ path: '/world' })
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

a {
  height: 50px;
  width: 100px;
}
</style>
