<template>
  <div>
    <h1>Usuarios</h1>
    <v-data-table :headers="headers" :items="users" :loading="loading">
      <template v-slot:[`item.details`]="{ item }">
        <v-btn icon color="error" @click="removeUser(item.id)">
          <v-icon>mdi-delete</v-icon>
        </v-btn>

        <EditUserBtn :value="item" />
      </template>
    </v-data-table>
  </div>
</template>

<script>
import EditUserBtn from "@/components/EditUserBtn.vue";

import { mapState, mapActions } from 'vuex';
export default {
  components: {EditUserBtn},
  created() {
    this.getAllUsers();
  },
  data: () => ({
    headers: [
      { text: '#', value: 'id' },
      { text: 'Nombre', value: 'name' },
      { text: 'Apellido', value: 'lastName' },
      { text: 'Edad', value: 'birthDate' },
      { text: 'Numero Telefono', value: 'phoneNumber' },
      { text: '', value: 'details' },
    ],
  }),
  computed: {
    ...mapState('users', {
      users: (state) => state.list,
      loading: (state) => state.loading,
    }),
  },
  methods: {
    ...mapActions('users', {
      removeOneUserById: 'removeOneById',
      getAllUsers: 'getAll',
    }),
    async removeUser(userId) {
      await this.removeOneUserById(userId);
      await this.getAllUsers();
    },
  },
};
</script>

<style></style>
