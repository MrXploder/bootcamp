<template>
  <v-btn text small>
    {{ userEmail }}
    <v-icon class="ml-2">mdi-login</v-icon>
  </v-btn>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState('session', ['user']),
    userEmail() {
      return this.user.email;
    },
  },
};
</script>

<style></style>
