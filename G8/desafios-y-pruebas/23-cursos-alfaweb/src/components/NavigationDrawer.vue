<template>
  <v-navigation-drawer
    :value="$store.state.system.drawer"
    @input="$store.commit('system/SET_DRAWER', $event)"
    :mini-variant="miniVariant"
    :clipped="clipped"
    fixed
    app
  >
    <v-list v-if="$store.state.session.user">
      <v-list-item link>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> {{ $store.state.session.user.email }} </v-list-item-title>
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
        title: 'Inicio',
        to: '/'
      },
      {
        icon: 'mdi-login',
        title: 'Login',
        to: '/login'
      },
      {
        icon: 'mdi-account-plus',
        title: 'Registrarse',
        to: '/sign-in'
      },
      {
        icon: 'mdi-account-multiple-check',
        title: 'Administración',
        to: '/admin'
      }
    ]
  })
}
</script>

<style></style>
