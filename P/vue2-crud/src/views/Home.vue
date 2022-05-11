<template>
  <div>
    <h1>Nuestros productos</h1>
    <HotdogsCarousel />
  </div>
</template>

<script>
import HotdogsCarousel from '@/components/HotdogsCarousel.vue'
export default {
  components: {
    HotdogsCarousel
  },
  data: () => ({}),
  mounted() {
    console.log('mounted')
  },
  activated() {
    console.log('activated')
  },
  deactivated() {
    console.log('deactivated')
  }
}
</script>

<style></style>
