<template>
  <div id="app">
    <div id="nav">
      <router-link to="/products">Productos</router-link>
      |
      <router-link to="/newproduct">Nuevo Producto</router-link>
    </div>
    <br />
    <router-view />
  </div>
</template>
