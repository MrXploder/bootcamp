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
import Firebase from 'firebase'
import { firebaseConfig } from '../../firebase-config'

Firebase.initializeApp(firebaseConfig)

import UserForm from '../components/UserForm.vue'

export default {
  components: { UserForm },
  name: 'LoginPage',

  methods: {
    handleLoginFormSubmit($event) {
      Firebase.auth()
        .signInWithEmailAndPassword($event.email, $event.password)
        .then(
          () => {
            this.$router.push('home')
          },
          () => {
            console.error('El usuario no existe, intente denuevo')
          }
        )
    }
  }
}
</script>

<style></style>
