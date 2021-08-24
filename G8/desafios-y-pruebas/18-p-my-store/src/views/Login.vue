<template>
  <div>
    <div class="columns">
      <div class="column is-one-third"></div>
      <div class="column is-one-third">
        <div class="login-container card">
          <form>
            <!-- Field email -->
            <div class="field">
              <!-- Error -->
              <span v-if="formHasErrors" class="has-text-danger">
                <i class="mdi mdi-alert"></i>
                Usuario o Contraseña incorrectos, Intente nuevamente.
              </span>
            </div>
            <div class="field">
              <label class="label">Email</label>
              <div class="control has-icons-left has-icons-right">
                <input type="email" name="email" id="email" placeholder="Email"
                v-model="credentials.email"
                class="input">
                <span class="icon is-small is-left">
                  <i class="mdi mdi-email"></i>
                </span>
              </div>
            </div>
            <!-- Field password -->
            <div class="field">
              <label class="label">Contraseña</label>
              <div class="control has-icons-left has-icons-right">
                <input type="password" name="password" id="password" placeholder="*******"
                v-model="credentials.password"
                class="input">
                <span class="icon is-small is-left">
                  <i class="mdi mdi-key"></i>
                </span>
              </div>
            </div>
            <!-- field submit -->
            <div class="field">
              <button class="button is-primary is-pulled-right" @click="login">Acceder</button>
            </div>
            <div class="is-clearfix"></div>
          </form>
        </div>
      </div>
      <div class="column is-one-third"></div>
    </div>
  </div>
</template>

<script>
import { Auth } from "../services/Auth";
export default {
  name: '',
  components: {},
  props: {},
  data() {
    return {
      credentials: {
        email: '',
        password: ''
      },
      formHasErrors: false
    }
  },
  methods: {
    login(e) {
      e.preventDefault()
      this.formHasErrors = this.credentials.email === '' || this.credentials.password === ''
      if(!this.formHasErrors) {
        // try login
        Auth.login(this.credentials)
        .then(response => {
          let user = response.data
          this.$store.dispatch('updateUser', user)
          this.$router.push('/')
        })
        .catch(error => {
          alert(error)
        })
      }
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {}
}
</script>

<style lang="scss" scoped>
.login-container {
  padding: 2rem 1rem 0.5rem 1rem;
}
</style>