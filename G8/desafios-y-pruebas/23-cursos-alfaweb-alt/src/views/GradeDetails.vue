<template>
  <div>
    <v-layout justify-center>
      <v-flex shrink>
        <h1 v-once>Editando el curso: {{ gradeName }}</h1>
      </v-flex>
    </v-layout>

    <GradeForm @submit="handleFormSubmit" mode="edit" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { gradesModule } from '@/store'

@Component({
  components: {
    GradeForm: () => import('@/components/Grades/GradeForm.vue')
  },
  async beforeRouteEnter(to, from, next) {
    await gradesModule.readGrade(to.params.gradeId)
    next()
  }
})
export default class GradeDetailsView extends Vue {
  public get gradeName() {
    return gradesModule.grade.data?.name
  }

  public async handleFormSubmit(gradeId: string) {
    try {
      await gradesModule.updateGrade(gradeId)
      this.$router.back()
    } catch (e) {
      console.error(e)
    }
  }
}
</script>

<style></style>
