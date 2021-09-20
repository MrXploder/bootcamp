<template>
  <v-app-bar
    app
    flat
    :height="68"
    color=" toolbar"
    :class="{ 'toolbar--scrolled': extensionHeight <= MIN_EXTENSION_HEIGHT }"
    fixed
    :extension-height="extensionHeight"
  >
    <v-app-bar-nav-icon @click="$store.dispatch('app/toggleSidebar')"></v-app-bar-nav-icon>
    <v-spacer></v-spacer>
    <template #extension>
      <RouterHeader
        :font-size="extensionFontSize"
        :bg-color="extensionHeight <= MIN_EXTENSION_HEIGHT ? '#f4f7f8' : '#eef2f5'"
      />
    </template>
  </v-app-bar>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { scale } from '@/app.utils'

@Component({
  components: {
    RouterHeader: () => import('@/components/App/RouterHeader.vue')
  }
})
export default class LayoutAppBar extends Vue {
  public readonly MIN_EXTENSION_HEIGHT: number = 53
  public readonly MAX_EXTENSION_HEIGHT: number = 200
  public readonly MIN_EXTENSION_FONTSIZE: number = 20
  public readonly MAX_EXTENSION_FONTSIZE: number = 35
  public readonly MAX_SCROLL_TOP: number = 110
  public extensionHeight: number = 200
  public extensionFontSize: number = 35

  public mounted() {
    window.onscroll = this.onScroll.bind(this)
  }

  public onScroll() {
    const { scrollTop } = document.documentElement
    const scrollPosition = scrollTop > this.MAX_SCROLL_TOP ? this.MAX_SCROLL_TOP : scrollTop
    this.extensionHeight = Math.ceil(
      scale(
        scrollPosition,
        0,
        this.MAX_SCROLL_TOP,
        this.MAX_EXTENSION_HEIGHT,
        this.MIN_EXTENSION_HEIGHT
      )
    )
    this.extensionFontSize = Math.ceil(
      scale(
        scrollPosition,
        0,
        this.MAX_SCROLL_TOP,
        this.MAX_EXTENSION_FONTSIZE,
        this.MIN_EXTENSION_FONTSIZE
      )
    )
  }
}
</script>

<style lang="scss" scoped>
.toolbar::v-deep {
  transition: all 0.25s ease;
  background: linear-gradient(90deg, white 50%, #eef2f5 50%);
  .v-toolbar__extension {
    padding: unset;
    background: linear-gradient(180deg, white 50%, #eef2f5 50%);
  }
  .v-toolbar__content {
    background-color: white;
  }

  &.toolbar--scrolled::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%);
    height: 100%;
    z-index: -1;
    box-shadow: 0 25px 20px -25px rgb(0 0 0 / 10%);
    width: 100%;

    @media (min-width: 960px) {
      max-width: 900px;
    }

    @media (min-width: 1264px) {
      max-width: 1185px;
    }

    @media (min-width: 1904px) {
      max-width: 1785px;
    }
  }

  &:not(.toolbar--scrolled) {
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%);
      width: 0;
      height: 100%;
      z-index: -1;
      box-shadow: 0 0 0 0 rgb(0 0 0 / 10%);
      transition: all 0.25s ease;
    }
    .v-toolbar__content {
      border-bottom-right-radius: 30px;
    }
  }
}
</style>
