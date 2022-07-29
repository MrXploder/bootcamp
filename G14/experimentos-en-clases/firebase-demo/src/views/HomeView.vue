<template>
  <h1>Benvenuti a tuti</h1>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('funcionarios/getAll');
  }
};
</script>

<style></style>
