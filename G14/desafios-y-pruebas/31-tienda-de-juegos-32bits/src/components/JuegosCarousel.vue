<template>
  <div>
    <LottieAnimation ref="anim" path="./loading.json" v-if="loadingJuegos" />

    <carousel-3d v-if="!loadingJuegos">
      <slide v-for="(juego, $index) in juegos" :key="$index" :index="$index">
        <img :src="juego.cover" alt="" />
      </slide>
    </carousel-3d>
  </div>
</template>

<script>
import LottieAnimation from 'lottie-vuejs/src/LottieAnimation.vue' // import lottie-vuejs
import { mapState } from 'vuex'

export default {
  components: {
    LottieAnimation,
  },
  computed: {
    ...mapState('juegos', {
      juegos: (state) => state.listado,
      loadingJuegos: (state) => state.loading,
    }),
  },
}
</script>

<style></style>
