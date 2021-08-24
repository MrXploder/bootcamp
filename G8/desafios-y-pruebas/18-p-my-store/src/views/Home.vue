<template>
  <div class="container">
    <cart-detail/>
    <products-list/>
  </div>
</template>

<script>
import ProductsList from "../components/Products";
import CartDetail from "../components/CartDetail";

export default {
  name: 'home',
  components: {
    ProductsList,
    CartDetail,
  },
  props: {},
  data() {
    return {}
  },
  methods: {},
  computed: {},
  watch: {},
  created() {},
  mounted() {}
}
</script>

<style lang="scss" scoped>

</style>