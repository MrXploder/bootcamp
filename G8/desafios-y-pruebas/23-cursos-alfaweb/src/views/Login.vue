<template>
  <v-container>
    <v-layout justify-center>
      <v-flex xs9>
        <h3>Login de Usuario</h3>
        <UserForm @submit="handleLoginFormSubmit" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import UserForm from '../components/UserForm.vue'

export default {
  components: { UserForm },
  name: 'LoginPage',

  methods: {
    async handleLoginFormSubmit(credentials) {
      try {
        await this.$store.dispatch('session/login', credentials)
        this.$router.push('/home')
      } catch (e) {
        console.error(e)
      }
    }
  }
}
</script>

<style></style>
