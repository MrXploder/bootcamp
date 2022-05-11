<template>
  <v-navigation-drawer app @input="setDrawer($event)" :value="drawer" clipped>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="text-h6"> Hotdogs </v-list-item-title>
        <v-list-item-subtitle></v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense nav>
      <v-list-item v-for="item in items" :key="item.title" link :to="item.to">
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
import { mapState, mapMutations, mapGetters } from 'vuex'

export default {
  data: () => ({}),
  computed: {
    ...mapState('app', {
      drawer: (state) => state.navigationDrawer
    }),
    ...mapGetters('session', {
      userIsAdmin: 'isAdmin'
    }),
    items() {
      const items = [
        {
          icon: 'mdi-food-hot-dog',
          title: 'Nuestros productos',
          to: '/'
        }
      ]
      if (this.userIsAdmin) {
        items.push({
          icon: 'mdi-shield-crown',
          title: 'Administrar',
          to: '/hotdogs'
        })
      }
      return items
    }
  },
  methods: {
    ...mapMutations({
      setDrawer: 'app/SET_NAVIGATION_DRAWER'
    })
  }
}
</script>

<style></style>
