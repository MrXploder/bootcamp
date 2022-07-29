<template>
  <v-dialog v-model="dialog" width="300">
    <template #activator="{ on }">
      <v-btn v-on="on">
        <v-icon>mdi-food-hot-dog</v-icon>
      </v-btn>
    </template>

    <v-card>
      <v-card-title>Crear un nuevo Hotdog</v-card-title>
      <v-card-text>
        <v-form ref="newHotdogForm">
          <v-text-field
            outlined
            label="Nombre"
            :rules="[required]"
            v-model="newHotdogName"
          ></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn color="success" @click="handleFormSubmit" :loading="loading">
          <v-icon>mdi-send</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data: () => ({
    dialog: false,
    loading: false,
    newHotdogName: ''
  }),
  methods: {
    ...mapActions('completos', {
      createHotdog: 'createOne',
      getAllHotdogs: 'getAll'
    }),
    required(v) {
      return !!v || 'Este campo es obligatorio'
    },
    async handleFormSubmit() {
      if (this.$refs.newHotdogForm.validate()) {
        this.loading = true
        try {
          await this.createHotdog(this.newHotdogName)
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
}
</script>

<style></style>
