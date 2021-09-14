<template>
  <v-form @submit.prevent="handleLoginFormSubmit">
    <v-text-field
      placeholder="E-mail"
      type="email"
      v-model="email"
      :rules="[(v) => !!v || 'Este campo es obligatorio']"
    ></v-text-field>
    <v-text-field
      placeholder="Password"
      type="password"
      :counter="20"
      v-model="password"
      :rules="[(v) => !!v || 'Este campo es obligatorio']"
    ></v-text-field>
    <v-layout justify-space-between>
      <v-btn type="submit" color="success">Iniciar</v-btn>
      <v-btn type="reset" color="error">Limpiar formulario</v-btn>
      <v-btn type="button" color="warning">Limpiar validacion</v-btn>
    </v-layout>
  </v-form>
</template>

<script>
export default {
  props: {
    email: { type: String, default: '' },
    password: { type: String, default: '' }
  },
  methods: {
    handleLoginFormSubmit() {
      this.$emit('submit', { email: this.email, password: this.password })
    }
  }
}
</script>

<style></style>
