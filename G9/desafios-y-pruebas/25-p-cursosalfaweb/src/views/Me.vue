<template>
  <div>
    <h1>Vista de perfil</h1>
    <v-form @submit.prevent="handleFormSubmit" ref="userForm">
      <v-text-field
        label="Email"
        :value="$store.state.session.user.email"
        disabled
        readonly
      ></v-text-field>
      <v-select
        :items="[
          { text: 'Administrador', value: 'admin' },
          { text: 'Usuario', value: 'user' },
        ]"
        :value="$store.state.session.user.rol"
        :disabled="!$store.getters['session/isAdmin']"
      ></v-select>
      <v-text-field label="Nombre" v-model="form.name"></v-text-field>
      <v-text-field label="Apellido" v-model="form.lastName"></v-text-field>
      <v-btn type="submit">Guardar</v-btn>
    </v-form>
  </div>
</template>

<script>
import Firebase from "firebase";

export default {
  data: () => ({
    form: {},
  }),
  created() {
    this.form = { ...this.$store.state.session.user };
  },
  methods: {
    handleFormSubmit() {
      if (this.$refs.userForm.validate()) {
        console.log(this.form);
        if (this.form.id) {
          const { id, ...userData } = this.form;
          Firebase.firestore().collection("usuarios").doc(id).update(userData);
        } else {
          Firebase.firestore().collection("usuarios").add(this.form);
        }
      }
    },
  },
};
</script>

<style></style>
