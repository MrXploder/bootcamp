<template>
  <p :style="{ color: highlight ? 'red' : 'green' }" :class="{ italic: title === 'Morty Smith' }">{{ title }}</p>
</template>

<script>
export default {
  name: 'ListItemTitle',
  props: {
    title: {
      type: String,
      required: true,
    },
    highlight: {
      type: Boolean,
      required: true,
    },
  },
}
</script>

<style>
.italic {
  font-style: italic;
}
</style>
