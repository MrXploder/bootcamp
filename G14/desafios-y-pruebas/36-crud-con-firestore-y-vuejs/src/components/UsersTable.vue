<template>
  <v-data-table :headers="headers" :items="users" :loading="loading">
    <template v-slot:[`item.details`]="{ item }">
      <v-btn icon color="error" @click="removeUser(item.id)">
        <v-icon>mdi-delete</v-icon>
      </v-btn>

      <v-dialog width="500">
        <template v-slot:activator="{ on }">
          <v-btn icon color="info" v-on="on">
            <v-icon>mdi-eye</v-icon>
          </v-btn>
        </template>

        <v-card>
          <v-card-title>Hola mundo</v-card-title>
        </v-card>
      </v-dialog>
    </template>

    <!--
    <template #item.name="{item}">
      {{ item.name.toUpperCase() }}
    </template>

    <template #item.pepito="{item}">
      {{ item.name.toUpperCase() }}
    </template> -->
  </v-data-table>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  data: () => ({
    headers: [
      { text: '#', value: 'id' },
      { text: 'Nombre', value: 'name' },
      { text: 'Apellido', value: 'lastName' },
      { text: 'Detalle', value: 'details' },
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
