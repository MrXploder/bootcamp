<template>
  <v-layout row>
    <v-flex col="sm" v-for="(video, $index) of videos" :key="$index">
      <DashboardCard :item="video" class="mx-auto mx-md-0" />
    </v-flex>
  </v-layout>
</template>

<script>
import DashboardCard from "@/components/DashboardCard.vue";

import { mapState } from "vuex";
// import Store from '@/store/';

export default {
  components: { DashboardCard },
  mounted() {
    this.$store.dispatch("videos/getAllVideos");
  },
  // beforeRouteEnter(to, from, next) {
  // Store.dispatch('videos/getAllVideos');
  // next();
  // },
  computed: {
    // ...mapState('videos', {
    //   videos: (state) => state.videos,
    // }),
    videos() {
      return [
        {
          label: "Mariya Takeuchi",
          views: "2.8M",
          followers: "1.1M",
          upload: "1 mes",
          url: "/song1.jpg",
        },
        {
          label: "Miki Matsubara",
          views: "4M",
          followers: "2M",
          upload: "2 meses",
          url: "/song2.jpg",
        },
        {
          label: "Engelbert Humperdinck",
          views: "1.5M",
          followers: "1.2M",
          upload: "1 mes",
          url: "/song3.jpg",
        },
        {
          label: "Tatsuro Yamashita",
          views: "1.5M",
          followers: "6M",
          upload: "1 año",
          url: "/song4.jpg",
        },
      ];
    },
  },
};
</script>

<style>
#app.v-application {
  background-color: #f9f9f9;
}
</style>
