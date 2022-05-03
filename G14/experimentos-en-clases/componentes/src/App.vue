<template>
  <div class="app">
    <input type="text" required="required" maxlength="30">
    <h1 >Padre</h1>
    <TextSuccess mensaje="Hola" />
    <TextSuccess mensaje="Chao" />
    <TextSuccess />
  </div>
</template>

<script>
import TextSuccess from "@/components/TextSuccess.vue";

export default {
  name: "App",
  components: {
    TextSuccess,
  },
};
</script>

<style>
.app {
  border: 1px solid red;
  padding: 40px;
}
</style>
