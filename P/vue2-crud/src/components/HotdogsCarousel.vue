<template>
  <div class="hotdogs-carousel">
    <img
      class="hotdogs-carousel__background"
      :class="{ 'hotdogs-carousel__background--dark': $vuetify.theme.dark }"
      src="../assets/hotdogs-bg1.jpeg"
      alt=""
    />
    <img
      v-for="(hotdog, $index) of hotdogsList"
      :key="$index"
      :src="hotdog.banner.src"
      alt=""
      :style="hotdog.banner.style"
      class="hotdogs-carousel__hotdog-banner"
      :class="{
        'hotdogs-carousel__hotdog-banner--active': $index === carousel,
        'hotdogs-carousel__hotdog-banner--dark': $vuetify.theme.dark
      }"
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
import defaultsDeep from 'lodash/defaultsDeep'

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
      {
        base: { src: 'assets/1base.png' },
        banner: { src: 'assets/1banner.png' }
      },
      {
        base: { src: 'assets/2base.png' },
        banner: { src: 'assets/2banner.png' }
      },
      {
        base: { src: 'assets/3base.png' },
        banner: { src: 'assets/3banner.png' }
      },
      {
        base: { src: 'assets/4base.png' },
        banner: { src: 'assets/4banner.png' }
      },
      {
        base: { src: 'assets/5base.png' },
        banner: { src: 'assets/5banner.png' }
      },
      {
        base: { src: 'assets/6base.png' },
        banner: { src: 'assets/6banner.png' }
      }
    ]
  }),
  computed: {
    hotdogsList() {
      return this.hotdogs.map((hotdog) =>
        defaultsDeep(hotdog, useDefaultCarouselStyles())
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
    filter: blur(1px) invert(1);
    &--dark {
      filter: blur(1px) brightness(0.5);
    }
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
    filter: invert(1);
    &--active {
      opacity: 1;
    }
    &--dark {
      filter: invert(0);
    }
  }
}
</style>
