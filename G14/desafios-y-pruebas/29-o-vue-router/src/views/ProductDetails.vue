<template>
  <div>
    <h1>Detalle de producto</h1>
    <h2>El codigo de la pizza es {{ $route.params.pizzaId }}</h2>
    <PizzaCard v-if="pizza" :pizza="pizza" />
  </div>
</template>

<script>
import PizzaCard from '@/components/PizzaCard.vue'

export default {
  components: { PizzaCard },
  data: () => ({
    pizzas: [],
  }),
  created() {
    fetch('/pizzas.json')
      .then((response) => response.json())
      .then((pizzas) => {
        this.pizzas = pizzas
      })
  },

  computed: {
    pizza() {
      return this.pizzas.find((pizza) => String(pizza.id) === this.$route.params.pizzaId)
    },
  },
}
</script>

<style></style>
