<template>
  <div class="list-item" :class="{ highlight: highlight }">
    <list-item-avatar :src="item.src" />
    <list-item-title :title="item.nombre" :highlight="highlight" />
  </div>
</template>

<script>
export default {
  name: 'ListItem',
  props: {
    item: {
      type: Object,
      required: true,
    },
    highlight: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style>
.list-item {
  margin-bottom: 8px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.highlight {
  border: 1px solid white;
}
</style>
