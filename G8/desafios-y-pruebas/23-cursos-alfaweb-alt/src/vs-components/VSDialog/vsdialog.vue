<template>
  <v-dialog
    :value="dialog"
    @input="dialog = $event"
    content-class="vs-dialog"
    persistent
    flat
    overlay-opacity="1"
    overlay-color="rgba(0, 0, 0, 0.2)"
  >
    <template v-slot:activator="activatorProps">
      <slot name="trigger" v-bind="activatorProps"></slot>
    </template>
    <v-card class="vs-card" flat>
      <v-overlay
        :absolute="true"
        :value="successOverlay || errorOverlay"
        opacity="1"
        :color="successOverlay ? 'success' : errorOverlay ? 'error' : undefined"
      >
        <v-row class="fill-height" align="center" justify="center">
          <v-scale-transition>
            <div v-if="overlayIcon" class="text-center">
              <v-icon color="white" size="128">
                {{ successOverlay ? 'mdi-check-circle-outline' : 'mdi-close-circle-outline' }}
              </v-icon>
              <h4>
                {{
                  successOverlay
                    ? 'Tu solicitud fue generada de manera exitosa.'
                    : 'Ocurrio un error al procesar tu solicitud, porfavor reintenta.'
                }}
              </h4>
            </div>
          </v-scale-transition>
        </v-row>
      </v-overlay>
      <v-btn icon class="vs-card__close" @click="$emit('input', false)">
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <v-card-title class="text-center px-md-32 pb-12 word-break-word">
        {{ title }}
      </v-card-title>
      <v-card-text class="px-md-32">
        <slot />
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch, VModel } from 'vue-property-decorator'

@Component({
  components: {
    VSInput: () => import('@/components/VSInput/vsinput.vue')
  }
})
export default class VSDialog extends Vue {
  public overlayIcon: boolean = false

  @VModel({ type: Boolean })
  public readonly dialog!: boolean

  @Prop({ type: String, default: '400px' })
  public readonly width!: string

  @Prop({ type: String, default: '' })
  public readonly title!: string

  @Prop({ type: Boolean, default: false })
  public readonly successOverlay!: boolean

  @Prop({ type: Boolean, default: false })
  public readonly errorOverlay!: boolean

  @Watch('successOverlay', { immediate: true })
  private onSuccessOverlayChange(val: boolean) {
    if (val) {
      setTimeout(() => {
        this.overlayIcon = true
      }, 250)
    } else {
      this.overlayIcon = false
    }
  }

  @Watch('errorOverlay')
  private onErrorOverlayChange(val: boolean) {
    if (val) {
      setTimeout(() => {
        this.overlayIcon = true
      }, 250)
    } else {
      this.overlayIcon = false
    }
  }
}
</script>

<style lang="scss">
.vs-dialog {
  box-shadow: none !important;
  min-width: 400px;
  max-width: 800px;
  width: fit-content;
  padding: 10px;
  overflow-y: unset !important;
  @media (max-width: 600px) {
    min-width: calc(100vw - 20px);
    max-width: calc(100vw - 20px);
    margin: auto 10px;
  }
}
</style>

<style lang="scss" scoped>
.vs-card {
  border-radius: 20px;
  background-color: white;
  color: rgba(44, 62, 80, 1);
  position: relative;
  transition: all 0.25s ease;
  box-shadow: 0 5px 30px 0 rgba(0, 0, 0, 0.05) !important;
  width: 100%;
  height: 100%;
  margin: auto;
  &__close {
    top: -6px;
    right: -6px;
    position: absolute;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.05);
    transition: all 0.25s ease;
    background-color: white;
    border: 0;
    & i {
      width: 34px;
      height: 34px;
      opacity: 0.7;
    }

    &:hover {
      box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.05);
      transform: translate(-2px, 2px);
      i {
        opacity: 1;
      }
    }
  }
}
</style>
