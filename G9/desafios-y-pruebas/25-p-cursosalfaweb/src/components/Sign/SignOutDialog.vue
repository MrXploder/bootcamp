<template>
  <div>
    <v-btn text depressed @click="$store.dispatch('session/signOut')">
      <v-avatar size="28" class="mr-2">
        <v-gravatar :email="$store.state.session.user.email"></v-gravatar>
      </v-avatar>
      {{ $store.state.session.user.email }}
      <v-icon right>mdi-logout</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
