<template>
  <v-app dark>
    <component :is="layout">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </component>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

import DefaultLayout from '@/layouts/default.vue'
import SimpleLayout from '@/layouts/simple.vue'

@Component({})
export default class App extends Vue {
  public get layout() {
    const routeLayout = this.$route.meta?.layout ?? 'default'
    return routeLayout === 'default' ? DefaultLayout : SimpleLayout
  }
}
</script>

<style>
body .v-application {
  font-family: Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
    Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
}
</style>
