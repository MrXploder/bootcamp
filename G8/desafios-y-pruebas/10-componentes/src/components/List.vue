<template>
  <div>
    <list-item v-for="(item, $index) in items" :key="$index" :item="item" :highlight="$index === items.length - 1" />
  </div>
</template>

<script>
export default {
  name: 'List',
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style></style>
