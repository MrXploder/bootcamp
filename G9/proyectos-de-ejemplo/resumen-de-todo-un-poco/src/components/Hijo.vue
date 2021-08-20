<template>
  <div>
    Hola soy el hijo: {{ nombre }} | {{ apellido }} | {{ edad }}
    <button @click="saludar()">saludar</button>
    <button @click="cambiarNombre()">cambiar</button>
  </div>
</template>

<script>
export default {
  name: "Hijo",
  props: {
    nombre: { type: String },
    apellido: { type: String },
    edad: { type: String },
  },
  methods: {
    saludar() {
      console.log(`saludos mi nombre es ${this.nombre}`);
    },
    cambiarNombre() {
      this.$emit("cambiar-nombre");
    },
  },
  //props: ["nombre", "apellido", "edad"]
};
</script>

<style></style>
