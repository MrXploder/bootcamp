<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="/">
        <img src="/logo.webp" alt="" width="40" height="40" class="d-inline-block align-top" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link :to="{ name: 'Products' }" class="nav-link"> Productos </router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/reclutamiento">Trabaja con Nosotros</a>
          </li>
        </ul>
        <span class="navbar-text"> Ven a probar nuestras mejores pizzas </span>
      </div>
    </nav>
  </header>
</template>

<script>
export default {}
</script>

<style></style>
