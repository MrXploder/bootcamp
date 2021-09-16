<template>
  <v-form @submit.prevent="handleLoginFormSubmit" ref="form">
    <v-text-field
      name="email"
      placeholder="E-mail"
      type="email"
      v-model="email"
      :rules="[(v) => !!v || 'Este campo es obligatorio']"
    ></v-text-field>
    <v-text-field
      name="password"
      placeholder="Password"
      type="password"
      :counter="20"
      v-model="password"
      :rules="[(v) => !!v || 'Este campo es obligatorio']"
    ></v-text-field>
    <v-layout justify-space-between>
      <v-btn type="submit" color="success">Iniciar</v-btn>
      <v-btn type="reset" color="error" @click="$refs.form.reset()">Limpiar formulario</v-btn>
      <v-btn type="button" color="warning" @click="$refs.form.resetValidation()">Limpiar validacion</v-btn>
    </v-layout>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    email: null,
    password: null
  }),
  methods: {
    handleLoginFormSubmit() {
      if (this.$refs.form.validate()) {
        this.$emit('submit', { email: this.email, password: this.password })
      }
    }
  }
}
</script>

<style></style>
