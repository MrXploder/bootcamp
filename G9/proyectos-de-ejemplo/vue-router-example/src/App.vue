<template>
  <div>
    <Title> Hola esta es mi aplicacion SpaceJam </Title>
    <router-link :to="{ name: 'PaginaJamPrincipal' }">Jam</router-link> |
    <router-link :to="{ name: 'PaginaAlternativaJuniorJam' }">JuniorJam</router-link> |
    <router-link to="/pizzas/italiana">Pizza Italiana</router-link> |
    <router-link to="/pizzas/española">Pizza Española</router-link> |
    <router-link to="/pizzas/alachilena">Pizza Alachilena</router-link>

    <router-view />
  </div>
</template>

<script>
import Title from './components/Title.vue'
export default {
  components: { Title }
}
</script>
<style></style>
