<template>
  <v-data-table :headers="headers" :items="completos"></v-data-table>
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
      completos: (state) => state.list
    }),
    items() {
      return [{ id: 1, name: 'Italiano' }];
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
