<template>
  <v-data-table :headers="headers" :items="$store.state.usuarios.lista"></v-data-table>
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
