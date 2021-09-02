<template>
  <div>
    <h1>Usuarios</h1>

    <v-btn icon @click="$store.dispatch('usuarios/traerLosUsuarios')">
      <v-icon>mdi-cloud-download</v-icon>
    </v-btn>
    <TablaDeUsuarios />
  </div>
</template>

<script>
import TablaDeUsuarios from '../components/TablaDeUsuarios.vue'

export default {
  components: { TablaDeUsuarios },
}
</script>

<style></style>
