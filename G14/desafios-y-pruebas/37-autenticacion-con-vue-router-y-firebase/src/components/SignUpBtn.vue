<template>
  <v-dialog v-model="dialog" width="500">
    <template #activator="{ on }">
      <v-btn v-on="on" text> Crear cuenta </v-btn>
    </template>
    <v-card>
      <v-form @submit.prevent="handleSignUpFormSubmit" ref="signUpFormRef">
        <v-card-title> Crea una nueva cuenta </v-card-title>
        <v-card-text>
          <v-text-field
            type="email"
            label="Correo electrónico"
            outlined
            v-model="credentials.email"
            :rules="[required, mustBeEmail]"
          ></v-text-field>
          <v-text-field
            type="password"
            label="Contraseña"
            outlined
            v-model="credentials.password"
            :rules="[required, minLength(6)]"
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn color="success" block type="submit">
            Enviar
            <v-icon>mdi-send</v-icon>
          </v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions} from "vuex";
export default {
  data: () => ({
    dialog: false,
    credentials: {
      email: '',
      password: '',
    },
  }),
  methods: {
    ...mapActions("session", ["createUserWithEmailAndPassword"]),
    async handleSignUpFormSubmit(){
      if(this.$refs.signUpFormRef.validate()){
        await this.createUserWithEmailAndPassword(this.credentials);
      }
    },
    required(value){
      return !!value || "Este campo es obligatorio"
    },
    mustBeEmail(value){
      return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value) || "El campo debe ser un email"
    },
    minLength(length){
      return (value) => String(value).length >= length  || `El campo no tiene el minimo de ${length} carácteres`
    }
  }
};
</script>

<style></style>
