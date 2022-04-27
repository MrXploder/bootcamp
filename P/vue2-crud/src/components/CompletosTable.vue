<template>
  <v-data-table :headers="headers" :items="completosList" :loading="loading">
    <template #loading>
      <v-skeleton-loader type="table-row-divider@2"></v-skeleton-loader>
    </template>
  </v-data-table>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  data: () => ({
    headers: [
      {
        value: 'id',
        text: 'ID'
      },
      {
        value: 'name',
        text: 'Nombre'
      }
    ]
  }),
  computed: {
    ...mapState('completos', {
      completosList: (state) => state.list,
      completosState: (state) => state.state
    }),
    loading() {
      return this.completosState === 'pending';
    }
  },
  methods: {
    ...mapActions('completos', ['getAllCompletos'])
  },
  mounted() {
    this.getAllCompletos();
  }
};
</script>

<style></style>
