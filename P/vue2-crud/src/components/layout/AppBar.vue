<template>
  <v-app-bar app color="primary" clipped-left>
    <div class="d-flex align-center">
      <v-img
        class="shrink mr-2"
        contain
        src="assets/logo.png"
        transition="scale-transition"
        width="56"
      />
      <v-toolbar-title>Fresh and Tasty</v-toolbar-title>
    </div>

    <v-app-bar-nav-icon @click="toggleDrawer()"></v-app-bar-nav-icon>
    <v-btn icon>
      <v-icon> </v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions({
      toggleDrawer: 'app/toggleNavigationDrawer'
    })
  }
}
</script>

<style></style>
