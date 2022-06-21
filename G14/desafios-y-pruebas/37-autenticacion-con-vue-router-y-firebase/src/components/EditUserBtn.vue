<template>
  <v-dialog width="500" v-model="dialog">
    <template v-slot:activator="{ on }">
      <v-btn icon color="info" v-on="on">
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
    </template>

    <v-card>
      <v-form @submit.prevent="handleFormSubmit" ref="form">
        <v-card-title> Editar usuario: {{ title }} </v-card-title>
        <v-card-text>
          <v-text-field label="Nombre" v-model="newUser.name"></v-text-field>
          <v-text-field
            label="Apellido"
            v-model="newUser.lastName"
          ></v-text-field>
          <v-dialog
            ref="dialog"
            v-model="modal"
            :return-newUser.sync="newUser.birthDate"
            persistent
            width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="newUser.birthDate"
                label="Fecha de Nacimiento"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="newUser.birthDate" scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="modal = false">
                Cancel
              </v-btn>
              <v-btn
                text
                color="primary"
                @click="$refs.dialog.save(newUser.birthDate)"
              >
                OK
              </v-btn>
            </v-date-picker>
          </v-dialog>
          <v-text-field
            label="Numero de Teléfono"
            type="number"
            v-model="newUser.phoneNumber"
          ></v-text-field>
          <v-text-field
            readonly
            disabled
            label="Rol"
            v-model="newUser.role"
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn color="info" block type="submit">
            Crear
            <v-icon>mdi-send</v-icon>
          </v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  data: () => ({
    dialog: false,
    modal: false,
    newUser: {},
    title: '',
  }),
  props: ['value'],
  mounted() {
    // shallow copy
    this.newUser = { ...this.value };
    this.title = this.newUser.name || this.newUser.id;
  },
  methods: {
    ...mapActions("users", {
      'updateUserById': 'updateOneById',
      'getAllUsers': 'getAll'
    }),
    async handleFormSubmit() {
      if (this.$refs.form.validate()) {
        await this.updateUserById(this.newUser);
        this.dialog = false;
        await this.getAllUsers();
      }
    },
  },
};
</script>

<style></style>
