<template>
  <v-dialog v-model="dialog" width="500">
    <template #activator="{ on }">
      <v-btn color="error" v-on="on">
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </template>

    <v-card>
      <v-card-title> Desea borrar el Hotdog {{ hotdog.name }} </v-card-title>
      <v-card-actions>
        <v-btn color="error" outlined @click="handleRemove" :loading="loading">
          Borrar
        </v-btn>
        <v-btn color="error" @click="handleExit" :disabled="loading"
          >Salir</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: { hotdog: { type: Object, required: true } },
  data: () => ({
    dialog: false,
    loading: false
  }),
  methods: {
    ...mapActions('completos', {
      removeHotdogById: 'removeOneById',
      getAllHotdogs: 'getAll'
    }),
    handleExit() {
      this.dialog = false
    },
    async handleRemove() {
      this.loading = true
      try {
        await this.removeHotdogById(this.hotdog.id)
        await this.getAllHotdogs()
        this.dialog = false
      } catch (e) {
        console.log(e)
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style></style>
