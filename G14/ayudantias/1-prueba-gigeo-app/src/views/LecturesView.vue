<template>
  <div>
    <v-layout justify-center>
      <v-flex shrink>
        <h1>Administración</h1>
      </v-flex>
    </v-layout>
    <AddLectureBtn />
    <LecturesTable :value="lectures" />
    <LecturesBanners />
  </div>
</template>

<script>
import AddLectureBtn from '@/components/AddLectureBtn.vue';
import LecturesTable from '@/components/LecturesTable.vue';
import LecturesBanners from '@/components/LecturesBanners.vue';
import { mapState, mapActions } from 'vuex';
export default {
  components: { LecturesTable, LecturesBanners, AddLectureBtn },
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
