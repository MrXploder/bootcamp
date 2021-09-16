<template>
  <v-app dark>
    <Sidebar />
    <Toolbar />
    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  components: {
    Sidebar: () => import('@/components/App/Sidebar.vue'),
    Toolbar: () => import('@/components/App/Toolbar.vue')
  }
})
export default class App extends Vue {}
</script>
