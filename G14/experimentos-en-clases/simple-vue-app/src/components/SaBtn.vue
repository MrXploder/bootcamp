<template>
  <button type="button" class="btn" :class="[colorClass]">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    color: { type: String, default: 'primary' },
  },
  computed: {
    colorClass() {
      return `btn-${this.color}`;
    },
  },
};
</script>

<style></style>
