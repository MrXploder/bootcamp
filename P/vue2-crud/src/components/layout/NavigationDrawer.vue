<template>
  <v-navigation-drawer app @input="setDrawer($event)" :value="drawer" clipped>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="text-h6"> Application </v-list-item-title>
        <v-list-item-subtitle> subtext </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense nav>
      <v-list-item v-for="item in items" :key="item.title" link>
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data: () => ({
    items: [
      {
        icon: 'mdi-home',
        title: 'Home'
      }
    ]
  }),
  computed: {
    ...mapState('app', {
      drawer: (state) => state.navigationDrawer
    })
  },
  methods: {
    ...mapMutations({
      setDrawer: 'app/SET_NAVIGATION_DRAWER'
    })
  }
}
</script>

<style></style>
