<template>
  <v-app>
    <AppBar />
    <v-main>
      <v-container class="pa-0">
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import AppBarComponent from '@/components/AppBar.vue';
export default {
  components: {
    AppBar: AppBarComponent
  },
  data: () => ({})
};
</script>
