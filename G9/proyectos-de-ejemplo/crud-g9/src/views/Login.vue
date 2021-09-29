<template>
  <div>
    <h1>hola mundo</h1>
    <form @submit.prevent="pepitoDoble">
      <label for="correo">Correo</label>
      <input
        id="correo"
        type="email"
        placeholder="Escribe aqui tu correo"
        v-model="email"
        required
      />

      <label for="contraseña">Contraseña</label>
      <input
        id="contraseña"
        type="password"
        v-model="password"
        required
        placeholder="Escribe aqui tu contraseña"
      />

      <button type="submit">Iniciar</button>
    </form>
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
          console.log(response.user.email);
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>

<style></style>
