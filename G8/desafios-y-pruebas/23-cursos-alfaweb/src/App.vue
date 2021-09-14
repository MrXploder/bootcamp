<template>
  <v-app dark>
    <NavigationDrawer />
    <Toolbar />
    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>

    <!-- <Footer /> -->
  </v-app>
</template>

<script>
import NavigationDrawer from './components/NavigationDrawer.vue'
// import Footer from './components/Footer.vue'
import Toolbar from './components/Toolbar.vue'
export default {
  components: { NavigationDrawer, Toolbar },
  data() {
    return {
      title: 'Vuetify.js'
    }
  }
}
</script>
