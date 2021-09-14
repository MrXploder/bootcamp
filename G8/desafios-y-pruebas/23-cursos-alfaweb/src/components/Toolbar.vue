<template>
  <v-app-bar color="purple darken-4" :clipped-left="clipped" fixed app flat dark>
    <v-app-bar-nav-icon @click.stop="$store.dispatch('system/toggleDrawer')" />

    <v-btn icon @click.stop="$vuetify.theme.dark = !$vuetify.theme.isDark">
      <v-icon>{{ $vuetify.theme.isDark ? 'mdi-white-balance-sunny' : 'mdi-moon-waning-crescent' }}</v-icon>
    </v-btn>
    <v-toolbar-title>Cursos Alfaweb</v-toolbar-title>
    <v-spacer />
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    fixed: false,
    rightDrawer: false,
    title: '',
    miniVariant: false,
    clipped: false
  })
}
</script>

<style></style>
