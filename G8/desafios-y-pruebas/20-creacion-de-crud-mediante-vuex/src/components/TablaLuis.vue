<template>
  <table class="tabla-linda-preciosa">
    <thead></thead>
    <slot></slot>
    <slot name="no-data" v-if="$slots['no-data']" />
    <div v-else>{{ $props['no-data-text'] }}</div>
  </table>
</template>

<script>
export default {
  props: ['no-data-text'],
}
</script>

<style></style>
