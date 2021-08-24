<template>
  <ul>
    <li v-for="(product, $index) in $store.state.productList" :key="$index">
      {{ product }}
    </li>
  </ul>
</template>

<script>
export default {};
</script>

<style></style>
