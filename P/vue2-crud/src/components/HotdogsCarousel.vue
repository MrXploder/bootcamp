<template>
  <div class="hotdogs-carousel">
    <img
      class="hotdogs-carousel__background"
      src="../assets/hotdog-bg.jpeg"
      alt=""
    />
    <img
      v-for="(hotdog, $index) of hotdogsList"
      :key="$index"
      :src="hotdog.banner.src"
      alt=""
      class="hotdogs-carousel__hotdog-banner"
      :class="{ active: $index === carousel }"
      :style="hotdog.banner.style"
    />
    <v-carousel
      :show-arrows-on-hover="true"
      hide-delimiters
      v-model="carousel"
      class="hotdogs-carousel__carousel"
    >
      <v-carousel-item v-for="(hotdog, $index) of hotdogsList" :key="$index">
        <template>
          <img
            :src="hotdog.base.src"
            class="hotdogs-carousel__hotdog"
            :style="hotdog.base.style"
          />
        </template>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
const useDefaultCarouselStyles = () => ({
  base: {
    style: {
      minWidth: '200px',
      maxWidth: '400px',
      transform: 'translate(-50%, -50%)'
    }
  },
  banner: {
    style: {
      minWidth: '200px',
      maxWidth: '400px',
      transform: 'translate(-50%, -50%)'
    }
  }
})

export default {
  data: () => ({
    carousel: false,
    input: false,
    hotdogs: [
      { base: { src: 'assets/1.png' }, banner: { src: 'assets/1b.png' } },
      { base: { src: 'assets/2.png' }, banner: { src: 'assets/2b.png' } },
      { base: { src: 'assets/3.png' }, banner: { src: 'assets/3b.png' } },
      { base: { src: 'assets/4.png' }, banner: { src: 'assets/4b.png' } },
      { base: { src: 'assets/5.png' }, banner: { src: 'assets/5b.png' } },
      { base: { src: 'assets/6.png' }, banner: { src: 'assets/6b.png' } }
    ]
  }),
  computed: {
    hotdogsList() {
      return this.hotdogs.map((hotdog) =>
        Object.assign({}, useDefaultCarouselStyles(), hotdog)
      )
    }
  },
  methods: {
    handleInputChange(val) {
      console.log(val)
    }
  }
}
</script>

<style scoped lang="scss">
.hotdogs-carousel {
  position: relative;
  width: 100%;
  height: 100%;
  min-width: 200px;
  &__carousel {
    z-index: 20;
  }

  &__background {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 10;
  }

  &__hotdog {
    position: absolute;
    z-index: 12;
    top: 50%;
    left: 50%;
    width: 80%;
  }

  &__hotdog-banner {
    position: absolute;
    z-index: 11;
    top: 50%;
    left: 50%;
    width: 80%;
    opacity: 0;
    transition: opacity 1s ease-in-out;
    &.active {
      opacity: 1;
    }
  }
}
</style>
