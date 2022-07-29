<template>
  <v-layout style="gap: 10px" wrap>
    <v-flex v-for="lecture in lectures" :key="lecture.id">
      <LectureCard :value="lecture" />
    </v-flex>
  </v-layout>
</template>

<script>
import LectureCard from '@/components/LectureCard.vue';
import { mapState, mapActions } from 'vuex';
export default {
  components: {
    LectureCard,
  },
  computed: {
    ...mapState('lectures', {
      lectures: (state) => state.list,
    }),
  },
  methods: {
    ...mapActions('lectures', {
      getAllLectures: 'getAll',
    }),
  },
  mounted() {
    this.getAllLectures();
  },
};
</script>

<style></style>
