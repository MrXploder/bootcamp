<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/peleadores">Peleadores</router-link> |
      <router-link to="/buscador">Buscador</router-link>
    </nav>

    <router-view/>
  </div>
</template>