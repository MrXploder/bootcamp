<template>
  <v-app>
    <Navbar />

    <v-main class="grey lighten-3">
      <v-container>
        <v-row justify="center">
          <v-col cols>
            <v-sheet min-height="70vh" rounded="lg" class="pa-6">
              <transition mode="out-in" name="fade">
                <router-view />
              </transition>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  components: {
    Navbar: () => import("./components/App/Navbar"),
  },
  name: "App",
  data: () => ({}),
  mounted() {
    this.$store.dispatch("session/subscribeToAuthStateChange");
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
