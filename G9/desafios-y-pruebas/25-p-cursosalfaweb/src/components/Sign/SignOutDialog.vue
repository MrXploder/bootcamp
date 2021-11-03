<template>
  <div>
    <v-btn text depressed to="/me">
      <v-avatar size="28" class="mr-2">
        <v-gravatar :email="$store.state.session.user.email"></v-gravatar>
      </v-avatar>
      {{ $store.state.session.user.email }}
    </v-btn>
    <v-btn text depressed @click="handleLogout" color="primary">
      <v-icon>mdi-logout</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  methods: {
    async handleLogout() {
      await this.$store.dispatch("session/signOut");
      this.$router.push({ name: "Root" });
    },
  },
};
</script>

<style></style>
