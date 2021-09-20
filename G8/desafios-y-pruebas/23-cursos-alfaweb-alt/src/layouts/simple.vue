<template>
  <v-main>
    <slot></slot>
  </v-main>
</template>

<script>
export default {
  name: 'SimpleLayout'
}
</script>

<style>
#app.v-application {
  background-color: var(--v-background-base);
}
</style>
