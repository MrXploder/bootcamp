<template>
  <v-dialog v-model="dialog">
    <template #activator="{ on }">
      <v-btn v-on="on" color="info">Agregar curso</v-btn>
    </template>
    <v-card>
      <v-card-title> Agregando curso </v-card-title>
      <v-card-text>
        <GradeForm @submit="handleFormSubmit" mode="create" />
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { gradesModule } from '@/store'

@Component({
  components: {
    GradeForm: () => import('@/components/Grades/GradeForm.vue')
  }
})
export default class GoToAddGradeBtn extends Vue {
  public dialog: boolean = false

  public async handleFormSubmit() {
    try {
      await gradesModule.createGrade()
      this.dialog = false
    } catch (e) {
      console.error(e)
    } finally {
      await gradesModule.createGrade()
    }
  }
}
</script>

<style></style>
