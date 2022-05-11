<template>
  <div>
    <v-btn text depressed to="/me">
      <v-avatar size="28" class="mr-2">
        <v-gravatar :email="$store.state.session.user.email"></v-gravatar>
      </v-avatar>
      {{ $store.state.session.user.email }}
    </v-btn>
    <v-btn text depressed @click="handleLogout">
      <v-icon>mdi-logout</v-icon>
    </v-btn>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions('session', {
      signOut: 'signOut'
    }),
    async handleLogout() {
      await this.signOut()
      this.$router.push({ name: 'Home' })
    }
  }
}
</script>

<style></style>
