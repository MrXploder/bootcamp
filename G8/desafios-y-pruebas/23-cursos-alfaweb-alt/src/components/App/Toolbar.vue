<template>
  <v-app-bar color="purple darken-4" fixed app flat dark>
    <v-app-bar-nav-icon @click.stop="$store.dispatch('app/toggleSidebar')" />

    <v-btn icon @click.stop="toggleTheme">
      <v-icon>
        {{ isThemeDark ? 'mdi-white-balance-sunny' : 'mdi-moon-waning-crescent' }}
      </v-icon>
    </v-btn>
    <v-toolbar-title>Cursos Alfaweb</v-toolbar-title>
    <v-spacer />
  </v-app-bar>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({})
export default class Toolbar extends Vue {
  public get isThemeDark() {
    return this.$vuetify.theme.dark
  }

  public toggleTheme() {
    this.$vuetify.theme.dark = !this.$vuetify.theme.dark
  }
}
</script>

<style></style>
