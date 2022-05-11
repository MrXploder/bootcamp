<template>
  <v-app>
    <SystemBar v-if="false" />
    <AppBar />
    <NavigationDrawer />

    <v-main>
      <v-container>
        <transition name="fade" mode="out-in">
          <router-view />
        </transition>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import SystemBar from '@/components/layout/SystemBar.vue'
import AppBar from '@/components/layout/AppBar.vue'
import NavigationDrawer from '@/components/layout/NavigationDrawer.vue'

export default {
  components: {
    SystemBar,
    AppBar,
    NavigationDrawer
  },
  mounted() {
    this.$vuetify.theme.dark = true
  }
}
</script>
