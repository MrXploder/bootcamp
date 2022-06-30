<template>
  <v-app>
    <v-app-bar app color="primary" dark @click="drawer = !drawer">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-app-bar-title> Cursos alfaweb </v-app-bar-title>
      <v-spacer></v-spacer>

      <AppBarSession v-if="activeLogin" />
    </v-app-bar>

    <v-navigation-drawer
      app
      clipped
      v-model="drawer"
    >
      <v-list nav>
        <v-list-item link to="/">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Principal</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/lectures">
          <v-list-item-icon>
            <v-icon>mdi-book-account</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Administrar Cursos</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container style="height: 100%">
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import AppBarSession from '@/components/AppBarSession';
import { mapGetters } from 'vuex';
export default {
  components: {
    AppBarSession,
  },
  data: () => ({
    drawer: false
  }),
  computed: {
    ...mapGetters('session', ['activeLogin']),
  },
  mounted() {
    this.$store.dispatch('session/subscribeToAuthStateChange');
  },
};
</script>

<style></style>
