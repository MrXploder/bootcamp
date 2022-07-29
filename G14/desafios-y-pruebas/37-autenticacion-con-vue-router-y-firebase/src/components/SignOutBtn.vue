<template>
  <v-btn text @click="signOut"> Cerrar sesión </v-btn>
</template>

<script>
import { mapActions} from "vuex"
export default {
  methods: {
    ...mapActions("session", ["signOut"])
  }
};
</script>

<style></style>
