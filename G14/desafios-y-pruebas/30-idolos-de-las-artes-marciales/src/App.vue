<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/peleadores">Peleadores</router-link> |
      <router-link to="/buscador">Buscador</router-link>
      <img src="https://i.pinimg.com/originals/bd/14/9c/bd149c5c05185de274f040d809f93354.png" alt="" style="width: 30px; height: 30px">
      {{ cantidadProductosEnElCarrito }}
    </nav>

    <router-view @agregar="agregar" />
  </div>
</template>

<script>
export default {
  data: () => ({
    cantidadProductosEnElCarrito: 0
  }),
  methods: {
    agregar(){
      alert("agregar!!!")
    }
  }
}
</script>