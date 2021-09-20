<template>
  <v-container>
    <section>
      <v-layout>
        <GoToAddGradeBtn />
      </v-layout>
    </section>

    <section>
      <v-layout>
        <GradesTable />
      </v-layout>
    </section>

    <section>
      <v-layout>
        <GradesOverview />
      </v-layout>
    </section>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { gradesModule } from '@/store'

@Component({
  components: {
    GradesTable: () => import('@/components/Grades/GradesTable.vue'),
    GoToAddGradeBtn: () => import('@/components/Grades/GoToAddGradeBtn.vue'),
    GradesOverview: () => import('@/components/Grades/GradesOverview.vue')
  },
  beforeRouteEnter(to, from, next) {
    gradesModule.readGrades()
    next()
  }
})
export default class GradesView extends Vue {}
</script>

<style></style>
