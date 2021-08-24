<template>
  <div id="app">
    <div id="nav">
      <router-link to="/products">Productos</router-link>
      |
      <router-link to="/newproduct">Nuevo Producto</router-link>
    </div>
    <router-view />
  </div>
</template>
