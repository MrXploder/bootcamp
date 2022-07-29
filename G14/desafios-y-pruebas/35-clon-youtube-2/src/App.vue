<template>
  <v-app>
    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon
        class="mr-5"
        @click="miniVariant = !miniVariant"
      ></v-app-bar-nav-icon>

      <v-img
        src="/logo.png"
        class="ml-5"
        max-width="40"
        max-height="80"
        contain
        style="transform: scale(3)"
      ></v-img>

      <v-spacer></v-spacer>
      <v-layout>
        <v-flex shrink>
          <transition name="fade" mode="out-in">
            <v-text-field
              single-line
              hide-details
              v-if="showSearchInput"
            ></v-text-field>
          </transition>
        </v-flex>
      </v-layout>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon @click="showSearchInput = !showSearchInput">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-menu left bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="n in 5" :key="n" @click="() => {}">
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-navigation-drawer
      :mini-variant="miniVariant"
      app
      clipped
      v-model="drawer"
    >
      <v-list nav>
        <v-list-item link to="/">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Principal</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/explore">
          <v-list-item-icon>
            <v-icon>mdi-compass</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Explorar</v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-ticket</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Shorts</v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-television</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Subscripciones</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-container>
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: true,
    miniVariant: true,
    showSearchInput: false,
  }),
};
</script>
