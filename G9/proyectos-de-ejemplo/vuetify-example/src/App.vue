<template>
  <v-app>
    <v-app-bar app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>

    <NavigationDrawer />

    <v-footer app padless>
      <v-card flat tile width="100%" class="red lighten-1 text-center">
        <v-card-text>
          <v-btn v-for="icon in icons" :key="icon" class="mx-4" icon>
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
import NavigationDrawer from "./components/NavigationDrawer.vue";
export default {
  components: {
    NavigationDrawer,
  },
  name: "App",
  data: () => ({
    drawer: false,
    icons: ["mdi-home", "mdi-email", "mdi-calendar", "mdi-delete"],
  }),
};
</script>
