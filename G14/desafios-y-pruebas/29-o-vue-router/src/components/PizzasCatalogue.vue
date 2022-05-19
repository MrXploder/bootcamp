<template>
  <div class="pizzas-catalogue">
    <PizzaCard v-for="pizza of pizzas" :pizza="pizza" :key="pizza.id" @click="goToDetails" />
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

  methods: {
    goToDetails(id) {
      this.$router.push(`/productos/${id}`)
    },
  },
}
</script>

<style lang="scss">
.pizzas-catalogue {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 16px;
}
</style>
