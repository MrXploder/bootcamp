<template>
  <div>
    <div>Este es el componente padre</div>
    <Hijo
      v-for="(nombreHijo, $index) in hijos"
      :key="$index"
      @saludar="log"
      :name="nombreHijo"
    />
  </div>
</template>

<script>
import Hijo from "./Hijo.vue";

export default {
  name: "Padre",
  components: { Hijo },
  data: () => ({
    hijos: ["Ehylin", "Angela", "Franco", "Gonzalo"],
  }),
  methods: {
    log(nombre) {
      this.$emit("saludar", nombre);
      console.log(`saludos desde el componente hijo con nombre: ${nombre}`);
    },
  },
};
</script>

<style></style>
