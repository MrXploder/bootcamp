<template>
  <div class="router-header" :style="{ 'background-color': bgColor }">
    <div class="router-header__content">
      <v-container
        class="d-flex h-100 container--constrained router-header__inner-container align-center"
      >
        <transition mode="out-in" name="fade">
          <h1 v-if="!loading" :style="{ 'font-size': `${fontSize}px` }" style="height: fit-content">
            {{ routeMetaTitle }}
          </h1>
        </transition>
      </v-container>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator'

@Component({})
export default class LayoutRouterHeader extends Vue {
  @Prop({ type: String, default: '#eef2f5' })
  public bgColor: string = '#eef2f5'

  @Prop({ type: Number, default: 35 })
  public fontSize: number = 35

  public routeMetaTitle: string = ''
  public loading: boolean = false

  @Watch('$route.meta.title', { immediate: true })
  private onRouteMetaChange(currentTitle: string | null) {
    this.loading = true
    setTimeout(() => {
      this.routeMetaTitle = currentTitle ?? ''
      this.loading = false
    }, 250)
  }
}
</script>

<style lang="scss" scoped>
.router-header {
  overflow: hidden;
  width: 100%;
  height: 100%;
  border-top-left-radius: 30px;
  &__content,
  &__body {
    height: 100%;
  }
  &__inner-container {
    padding: 12px 40px 12px 40px;
  }
}
</style>
