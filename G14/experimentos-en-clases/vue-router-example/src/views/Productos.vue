<template>
  <div>
    <h1>Vista de Productos</h1>
    <h4>id del producto {{ $route.params.idProducto }}</h4>

    <ul>
      <li v-for="(item, $index) in carrito" :key="$index">
        {{ item.name }}
      </li>
    </ul>

    <ul v-if="!loading">
      <li v-for="(sanguche, $index) in sanguches" :key="$index">
        Nombre: {{ sanguche.name }} Origen: {{ sanguche.origin }}
        <button @click="carrito.push(sanguche)">Agregar al carrito</button>
      </li>
    </ul>

    <div class="lds-facebook" v-if="loading">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
function getAllSanguches() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch("/sanguches.json")
        .then((response) => response.json())
        .then((sanguches) => {
          resolve(sanguches);
        })
        .catch((error) => reject(error));
    }, 2000);
  });
}

export default {
  data: () => ({
    sanguches: [],
    loading: false,
    carrito: [],
  }),

  beforeRouteEnter(to, from, next) {
    console.log("antes de entrar a la vista de productos");

    getAllSanguches().then((sanguches) => {
      next((vm) => {
        vm.sanguches = sanguches;
      });
    });
  },

  beforeRouteLeave(to, from, next) {
    console.log("mi planeta me necesita");
    next();
  },

  beforeRouteUpdate(to, from, next) {
    console.log("ruta actualizada");
    next();
  },

  created() {},
};
</script>

<style>
.lds-facebook {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-facebook div {
  display: inline-block;
  position: absolute;
  left: 8px;
  width: 16px;
  background: black;
  animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
}
.lds-facebook div:nth-child(1) {
  left: 8px;
  animation-delay: -0.24s;
}
.lds-facebook div:nth-child(2) {
  left: 32px;
  animation-delay: -0.12s;
}
.lds-facebook div:nth-child(3) {
  left: 56px;
  animation-delay: 0;
}
@keyframes lds-facebook {
  0% {
    top: 8px;
    height: 64px;
  }
  50%,
  100% {
    top: 24px;
    height: 32px;
  }
}
</style>
