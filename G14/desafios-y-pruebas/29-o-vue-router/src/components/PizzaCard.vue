<template>
  <div class="card pizza-card shadow" style="width: 18rem" @click="$emit('click', pizza.id)">
    <img :src="pizza.assets.menu[0].url" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{ pizza.name }}</h5>
      <p class="card-text">
        {{ pizza.menu_description }}
      </p>
      <p class="card-text">USD {{ pizza.price }}</p>
      <a href="#" class="btn btn-primary">Agregar al carrito</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pizza: { type: Object, required: true },
  },
}
</script>

<style lang="scss">
.pizza-card {
  cursor: pointer;
}
</style>
