<template>
  <div>
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Clientes' }">Clientes</router-link>
      </li>
      <li>
        <router-link to="/personas">Personas</router-link>
      </li>
      <li>
        <router-link to="/productos">Productos</router-link>
      </li>
      <li>
        <router-link to="/productos/1">Productos 1</router-link>
      </li>
      <li>
        <router-link to="/productos/2">Productos 2</router-link>

      </li>
    </ul>

    <router-view />
  </div>
</template>

<script>
export default {
  data: () => ({
    user: false,
  }),
};
</script>

<style></style>
