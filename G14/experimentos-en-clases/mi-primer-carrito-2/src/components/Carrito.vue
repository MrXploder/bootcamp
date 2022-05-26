<template>
  <div @click="goToDetalleCarrito">
    <img
      src="https://media.istockphoto.com/vectors/shopping-cart-icon-isolated-on-white-background-vector-id1206806317?k=20&m=1206806317&s=612x612&w=0&h=waK8qOHV2Fgz2ntEWHWBQtXpNDAQ_wdhd4tkTUz6tfE="
      alt=""
      style="width: 48px; height: 48px"
    />
    {{ productos.length }}
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data: () => ({
    cantidad: 0,
  }),
  computed: {
    ...mapState('carrito', ['productos']),
  },
  methods: {
    goToDetalleCarrito(){
      this.$router.push("/carrito")
    }
  }
};
</script>

<style></style>
