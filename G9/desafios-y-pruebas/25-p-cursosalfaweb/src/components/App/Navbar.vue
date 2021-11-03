<template>
  <v-app-bar app color="white" flat>
    <v-container class="fill-height py-0">
      <v-avatar size="48" class="mr-10">
        <v-img
          src="https://logodownload.org/wp-content/uploads/2020/04/google-classroom-logo-2.png"
        ></v-img
      ></v-avatar>

      <transition-group name="fade" tag="div">
        <template v-if="$store.state.session.user">
          <v-btn
            v-for="(link, $index) in links"
            :key="$index"
            text
            :to="link.to"
          >
            <v-icon left>{{ link.icon }}</v-icon>
            {{ link.text }}
          </v-btn>
        </template>
      </transition-group>

      <v-spacer></v-spacer>

      <transition mode="out-in" name="fade">
        <template v-if="$store.state.session.user">
          <SignOutDialog />
        </template>
        <template v-else>
          <SignInDialog />
        </template>
      </transition>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  components: {
    SignInDialog: () => import("../Sign/SignInDialog.vue"),
    SignOutDialog: () => import("../Sign/SignOutDialog.vue"),
  },
  computed: {
    links() {
      const links = [
        {
          text: "Inicio",
          icon: "mdi-home",
          to: "/home",
        },
        {
          text: "Cursos",
          icon: "mdi-apps",
          to: "/cursos",
        },
      ];

      if (this.$store.getters["session/isAdmin"]) {
        links.push({
          text: "Admin",
          icon: "mdi-shield-crown-outline",
          to: "/admin",
        });
      }

      return links;
    },
  },
};
</script>

<style></style>
