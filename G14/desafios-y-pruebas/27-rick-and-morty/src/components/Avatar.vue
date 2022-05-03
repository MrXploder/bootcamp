<template>
  <div style="display: flex; align-items: center; gap: 1rem">
    <img
      :src="imagen"
      alt=""
      style="border-radius: 50%; height: 72px; width: 72px"
    />
    <p style="color: green; margin: 0; font-size: 2rem">{{ nombre }}</p>
  </div>
</template>

<script>
export default {
  props: ["nombre", "imagen"]
};
</script>

<style></style>
