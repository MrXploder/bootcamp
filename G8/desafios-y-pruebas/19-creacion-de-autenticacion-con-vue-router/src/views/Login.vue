<template>
  <div>
    <div>Login page</div>
    <form @submit.prevent="handleLoginFormSubmit">
      <input type="text" v-model="loginForm.user" required />
      <input type="password" v-model="loginForm.password" required />
      <button>Login con firebase</button>
    </form>
  </div>
</template>

<script>
import Firebase from 'firebase'
import { firebaseConfig } from '../../firebase-config'

Firebase.initializeApp(firebaseConfig)

export default {
  name: 'LoginPage',
  data: () => ({
    loginForm: {
      user: '',
      password: ''
    }
  }),
  methods: {
    handleLoginFormSubmit() {
      Firebase.auth()
        .signInWithEmailAndPassword(this.loginForm.user, this.loginForm.password)
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
