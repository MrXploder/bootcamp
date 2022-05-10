<template>
  <v-data-table :headers="headers" :items="completosList" :loading="loading">
    <template #loading>
      <v-skeleton-loader type="table-row-divider@2"></v-skeleton-loader>
    </template>
    <template v-slot:[`item.details`]="{ item }">
      <v-btn :to="{ name: 'hotdogDetails', params: { id: item.id } }">
        <v-icon>mdi-eye</v-icon>
      </v-btn>
      <RemoveHotdogModalBtn :hotdog="item" />
      <UpdateHotdogModalBtn :hotdog="item" />
    </template>
  </v-data-table>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import RemoveHotdogModalBtn from '@/components/RemoveHotdogModalBtn.vue'
import UpdateHotdogModalBtn from '@/components/UpdateHotdogModalBtn.vue'

export default {
  components: { RemoveHotdogModalBtn, UpdateHotdogModalBtn },
  data: () => ({
    headers: [
      {
        value: 'id',
        text: 'ID'
      },
      {
        value: 'name',
        text: 'Nombre'
      },
      {
        value: 'details',
        text: 'Detalle'
      }
    ]
  }),
  computed: {
    ...mapState('completos', {
      completosList: (state) => state.list,
      completosState: (state) => state.state
    }),
    loading() {
      return this.completosState === 'pending'
    }
  },
  methods: {
    ...mapActions('completos', {
      getAllHotdogs: 'getAll'
    })
  },
  mounted() {
    this.getAllHotdogs()
  }
}
</script>

<style></style>
