<template>
  <div>
    <v-layout justify-center>
      <v-flex shrink>
        <v-form @submit.prevent="searchVideo" ref="form">
          <v-text-field
            :loading="loading"
            :disabled="loading"
            v-model="videoSearchText"
            outlined
            label="Busca un video"
            append-icon="mdi-close-circle"
            @click:append="videoSearchText = ''"
            :rules="[required, onlyLetters]"
          ></v-text-field>
        </v-form>
      </v-flex>
    </v-layout>
    <v-layout justify-center>
      <v-flex shrink v-if="!loading && video">
        <DashboardCard :item="video" />
      </v-flex>
      <v-flex shrink v-if="!loading && !video">
        El video no se encontro
      </v-flex>
      <v-flex shrink v-if="loading">
        <v-progress-circular
          :size="70"
          :width="7"
          color="purple"
          indeterminate
        ></v-progress-circular>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import DashboardCard from '@/components/DashboardCard.vue';
import Store from '@/store';
import { mapActions } from 'vuex';

export default {
  components: {
    DashboardCard,
  },
  beforeRouteEnter(to, from, next) {
    Store.dispatch('videos/getAllVideos');
    next();
  },
  data: () => ({
    videoSearchText: '',
    loading: false,
    video: null,
  }),
  methods: {
    ...mapActions('videos', ['findVideoByText']),
    async searchVideo() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        this.video = await this.findVideoByText(this.videoSearchText);
        this.loading = false;
      }
    },
    required(value) {
      return !!value || 'Este campo es obligatorio';
    },
    onlyLetters(value){
      return /^[a-zA-Z]*$/.test(value) || "Se permiten solo letras"
    }
  },
};
</script>

<style></style>
