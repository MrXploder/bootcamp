<template>
  <v-navigation-drawer
    :value="$store.state.system.drawer"
    @input="$store.commit('system/SET_DRAWER', $event)"
    :mini-variant="miniVariant"
    :clipped="clipped"
    fixed
    app
  >
    <v-list v-if="$store.getters['session/currentUser']">
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img :src="$store.getters['session/currentUser'].img"></v-img>
        </v-list-item-avatar>
      </v-list-item>

      <v-list-item link>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> {{ $store.getters['session/currentUser'].name }} </v-list-item-title>
          <v-list-item-subtitle>{{ $store.getters['session/currentUser'].email }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-spacer></v-spacer>

    <v-list>
      <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
        <v-list-item-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title v-text="item.title" />
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    miniVariant: false,
    clipped: false,
    items: [
      {
        icon: 'mdi-apps',
        title: 'Welcome',
        to: '/'
      },
      {
        icon: 'mdi-chart-bubble',
        title: 'Inspire',
        to: '/inspire'
      }
    ]
  })
}
</script>

<style></style>
