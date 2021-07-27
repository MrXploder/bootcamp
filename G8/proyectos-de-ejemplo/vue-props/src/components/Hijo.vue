<template>
  <div>
    <h3>{{ mensaje }}</h3>
    <button @click="modMensaje">modificar mensaje</button>
  </div>
</template>

<script>
export default {
  props: {
    mensaje: {
      type: String,
      default: 'Sin mensaje',
    },
  },
  // props: ["mensaje"],
  // props: {
  //   mensaje: {
  //     type: String,
  //     required: true,
  //     validate(){

  //     }
  //   }
  // }
  methods: {
    modMensaje() {
      this.$emit('mod-mensaje', 'jajajaja')
    },
  },
}
</script>

<style></style>
