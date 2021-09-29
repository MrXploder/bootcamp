<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import $Locations from "./services/Locations.js";
import $Forecast from "./services/Forecast.js";

export default {
  name: "App",
  methods: {},
  mounted() {
    navigator.geolocation.getCurrentPosition((position) => {
      const response = $Locations.geopositionSearch(
        position.coords.latitude,
        position.coords.longitude
      );
      $Forecast.currentConditions(response);
    });
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
  margin-top: 60px;
}
</style>
