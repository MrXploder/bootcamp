<template>
  <div class="config">
    <v-btn icon class="ml-4" :dark="$vuetify.theme.isDark">
      <v-icon>mdi-translate</v-icon>
    </v-btn>
    <v-switch
      inset
      class="mx-4"
      :dark="$vuetify.theme.isDark"
      v-model="$vuetify.theme.dark"
    ></v-switch>
    <svg
      class="svg"
      xmlns="http://www.w3.org/2000/svg"
      width="160"
      height="160"
      viewBox="0 0 160 160"
    >
      <path
        d="M0-10,150,0l10,150S137.643,80.734,100.143,43.234,0-10,0-10Z"
        transform="translate(0 10)"
      ></path>
    </svg>
  </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator'

@Component({})
export default class NavigationConfig extends Vue {}
</script>

<style scoped lang="scss">
.config::v-deep {
  @media (max-width: 1264px) {
    display: none;
  }
  position: fixed;
  display: flex;
  flex-flow: row nowrap;
  place-items: center;
  place-content: center;
  column-gap: 16px;
  top: 93%;
  left: 255px;
  background-color: var(--v-theme-layout-base);
  border: 0;
  border-radius: 0 20px 0 0;
  outline: none;
  & .svg {
    width: 40px;
    height: 40px;
    top: -37px;
    left: -3px;
    position: absolute;
    transform: rotate(179deg);
    fill: var(--v-theme-layout-base);
    stroke: var(--v-theme-layout-base);
  }
}
</style>
