<template>
  <v-dialog v-model="dialog" width="400">
    <template #activator="{ on }">
      <v-btn text depressed v-on="on">
        Iniciar sesión
        <v-icon>mdi-login</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-text style="position: relative" class="pt-10">
        <v-form ref="userForm" @submit.prevent="handleFormSubmit">
          <v-text-field
            outlined
            label="Correo electronico"
            v-model="form.email"
            :rules="[required]"
            type="email"
            name="email"
            :disabled="loading"
          ></v-text-field>
          <v-text-field
            outlined
            label="Contraseña"
            v-model="form.password"
            :rules="[required]"
            type="password"
            name="password"
            :disabled="loading"
          ></v-text-field>
          <v-btn
            style="transition: background-color 0.2s linear"
            :color="color"
            type="submit"
            fab
            absolute
            bottom
            right
            :loading="loading"
          >
            <v-icon :class="{ shake: color === 'error' }">
              {{ color === "success" ? "mdi-login-variant" : "mdi-close" }}
            </v-icon>
          </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import delay from "delay";

export default {
  data: () => ({
    dialog: false,
    loading: false,
    color: "success",
    form: { email: "", password: "" },
  }),
  methods: {
    async handleFormSubmit() {
      if (this.$refs.userForm.validate()) {
        try {
          this.loading = true;
          await this.$store.dispatch("session/signIn", this.form);
          this.dialog = false;
          this.loading = false;
        } catch (e) {
          this.loading = false;
          this.color = "error";
          await delay(2000);
          this.color = "success";
        }
      }
    },
    required(value) {
      return !!value || "Este campo es obligatorio";
    },
  },
};
</script>

<style scoped>
>>> .v-dialog {
  overflow-y: visible;
}
</style>

<style>
.shake {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
}
@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }
  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }
  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }
  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>
