<template>
  <v-navigation-drawer absolute app v-model="drawer">
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>Hola mundo</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
  }),
};
</script>

<style></style>
