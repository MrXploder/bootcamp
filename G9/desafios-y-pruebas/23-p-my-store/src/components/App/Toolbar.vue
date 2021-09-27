<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">PanCalientito</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item" v-for="(item, $index) in items" :key="$index">
          <router-link :to="item.to" class="nav-link">{{ item.text }}</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data: () => ({
    items: [
      { text: 'Inicio', to: '/' },
      { text: 'Nuevo producto', to: '/nuevo-producto' },
      { text: 'Carrito de Compras', to: '/carrito' }
    ]
  })
}
</script>

<style></style>
