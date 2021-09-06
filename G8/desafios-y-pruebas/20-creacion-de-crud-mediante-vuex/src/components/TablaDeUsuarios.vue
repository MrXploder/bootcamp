<template>
  <v-data-table :headers="headers" :items="$store.state.usuarios.lista">
    <template #no-data>
      <v-btn icon x-large color="orange"> =( </v-btn>
    </template>
  </v-data-table>
</template>

<script>
export default {
  name: 'TablaDeUsuarios',
  data: () => ({
    headers: [
      { text: 'Nombre', sortable: false, value: 'nombre' },
      { text: 'Apellido', sortable: false, value: 'apellido' },
      { text: 'Edad', sortable: false, value: 'edad' },
    ],
  }),
}
</script>

<style></style>
