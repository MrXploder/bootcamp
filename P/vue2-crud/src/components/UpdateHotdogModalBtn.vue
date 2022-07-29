<template>
  <v-dialog v-model="dialog" width="300">
    <template #activator="{ on }">
      <v-btn v-on="on" color="success">
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
    </template>

    <v-card>
      <v-card-title>Editar hotdog: {{ hotdog.name }}</v-card-title>
      <v-card-text>
        <v-form ref="editHotdogForm">
          <v-text-field
            v-model="newHotdogName"
            label="Nombre"
            :rules="[(v) => !!v || 'Este campo es obligatorio']"
          ></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn color="success" @click="handleSubmit" :loading="loading">
          <v-icon>mdi-send</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: {
    hotdog: { type: Object, required: true }
  },
  data: () => ({
    dialog: false,
    loading: false,
    newHotdogName: ''
  }),
  watch: {
    hotdog: {
      immediate: true,
      handler(value) {
        this.newHotdogName = value.name
      }
    }
  },
  methods: {
    ...mapActions('completos', {
      updateHotdog: 'updateOneById',
      getAllHotdogs: 'getAll'
    }),
    async handleSubmit() {
      if (this.$refs.editHotdogForm.validate()) {
        this.loading = true
        try {
          await this.updateHotdog({ ...this.hotdog, name: this.newHotdogName })
          await this.getAllHotdogs()
          this.dialog = false
        } catch (e) {
          console.error(e)
        } finally {
          this.loading = false
        }
      }
    }
  }
}
</script>

<style></style>
