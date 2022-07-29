<template>
  <v-layout row>
    <v-flex col="sm" v-for="(video, $index) of videos" :key="$index">
      <DashboardCard :item="video" class="mx-auto mx-md-0" />
    </v-flex>
  </v-layout>
</template>

<script>
import DashboardCard from '@/components/DashboardCard.vue';

import { mapState } from 'vuex';
import Store from '@/store/';

export default {
  components: { DashboardCard },
  beforeRouteEnter(to, from, next) {
    Store.dispatch('videos/getAllVideos');
    next();
  },
  computed: {
    ...mapState('videos', {
      videos: (state) => state.videos,
    }),
  },
};
</script>

<style>
  #app.v-application {
    background-color: #f9f9f9;
  }
</style>
