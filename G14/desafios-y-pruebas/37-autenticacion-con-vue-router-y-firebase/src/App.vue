<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div
        class="d-flex align-center"
        @click="$router.push('/')"
        style="cursor: pointer"
      >
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <SignInBtn v-if="!activeLogin" />
      <SignOutBtn v-if="activeLogin" />
      <SignUpBtn v-if="!activeLogin" />

      <v-spacer></v-spacer>

      <v-btn text to="/users"> Usuarios </v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import SignInBtn from '@/components/SignInBtn.vue';
import SignOutBtn from '@/components/SignOutBtn.vue';
import SignUpBtn from "@/components/SignUpBtn.vue";
 
import { mapGetters } from 'vuex';

export default {
  name: 'App',
  components: { SignInBtn, SignOutBtn, SignUpBtn },
  data: () => ({}),
  computed: {
    ...mapGetters('session', ['activeLogin']),
  },
  mounted() {
    this.$store.dispatch('session/subscribeToAuthStateChange');
  },
};
</script>
