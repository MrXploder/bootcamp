<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <button type="button" class="btn btn-primary">Primary</button>
    <SaBtn color="primary">Clickme!</SaBtn>
    <SaBtn color="secondary">Clickme!</SaBtn>
    <SaBtn color="danger">Clickme!</SaBtn>
    <SaBtn color="warning">Clickme!</SaBtn>
    <SaBtn color="success">Clickme!</SaBtn>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import SaBtn from '@/components/SaBtn.vue';
export default {
  name: 'App',
  components: {
    HelloWorld,
    SaBtn,
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
