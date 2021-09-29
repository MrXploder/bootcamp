<template>
  <div>
    <h1>Inicia sesion con tus credenciales</h1>
    <b-container>
      <b-card>
        <b-form @submit.prevent="pepitoDoble">
          <b-form-group label="Email:" label-for="email">
            <b-form-input
              id="email"
              type="email"
              placeholder="Enter email"
              required
              v-model="email"
            ></b-form-input>
          </b-form-group>

          <b-form-group label="Password" label-for="password">
            <b-form-input
              id="password"
              type="password"
              placeholder="Ingrese contraseña"
              required
              v-model="password"
            ></b-form-input>
          </b-form-group>

          <b-button type="submit" variant="primary">Submit</b-button>
        </b-form>
      </b-card>
    </b-container>
  </div>
</template>

<script>
import Firebase from "firebase";
export default {
  data: () => ({
    email: "",
    password: "",
  }),
  methods: {
    pepitoDoble() {
      Firebase.auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then((response) => {
          this.$store.dispatch("defineCurrentUser", {
            email: response.user.email,
          });
          this.$router.push("/about");
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>

<style></style>
