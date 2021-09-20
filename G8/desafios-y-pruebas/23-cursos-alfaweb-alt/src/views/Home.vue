<template>
  <section>
    <GradesTimelineCard />
  </section>
</template>

<script lang="ts">
import { gradesModule } from '@/store'
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
    GradesTimelineCard: () => import('@/components/Grades/GradesTimelineCards.vue')
  },
  async beforeRouteEnter(to, from, next) {
    await gradesModule.readGrades()
    next()
  }
})
export default class HomeView extends Vue {}
</script>
