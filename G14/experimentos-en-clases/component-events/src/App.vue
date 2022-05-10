<template>
  <div>
    <h1 @click="eventoClick">Hola</h1>
    <LuisButton @success="eventoClick" color="green"/>
  </div>
</template>

<script>
import LuisButton from "@/components/LuisButton.vue";
export default {
  name: "App",
  components: { LuisButton },
  methods: {
    eventoClick(){
      alert("evento click desde APP")
    }
  }
};
</script>

<style></style>
