<template>
  <div class="son-box">
    {{ numero }}
    <button @click="saludar">Saludar {{cantidadDeSaludos}}</button>
  </div>
</template>

<script>
export default {
  props: {
    numero: { type: Number, required: true },
  },
  data: () => ({
    cantidadDeSaludos: 0
  }),
  methods: {
    saludar(){
      console.log("Hola soy un hijo")
      this.cantidadDeSaludos++;
    }
  },
  computed: {},
  updated(){
    console.log("El component hijo se ha actualizado")
  },
  mounted(){
    console.log(`Hola soy el hijo numero: ${this.numero}`)
  },
  destroyed(){
    console.log("no lloren por mi, ya estoy muerto")
  }
};
</script>

<style>
.son-box {
  width: 100px;
  height: 100px;
  border: 2px solid red;
}
</style>
