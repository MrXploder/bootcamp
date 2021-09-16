<template>
  <v-data-table :items="$store.state.cursos.data" :headers="headers">
    <template v-slot:[`item.costo`]="{ item }">
      <v-chip color="success">${{ item.costo.toLocaleString() }}</v-chip>
    </template>

    <template v-slot:[`item.estado`]="{ item }">
      <v-chip :color="item.estado ? 'info' : ''">{{ item.estado ? 'Si' : 'No' }}</v-chip>
    </template>

    <template v-slot:[`item.fecha`]="{ item }">
      <v-chip color="success">{{ item.fecha }}</v-chip>
    </template>

    <template v-slot:[`item.actions`]="{ item }">
      <v-layout>
        <v-btn icon @click="$router.push(`/curso/${item.id}`)">
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
        <v-btn icon @click="borrarItem(item)">
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </v-layout>
    </template>
  </v-data-table>
</template>

<script>
export default {
  data: () => ({
    headers: [
      { text: 'Nombre', value: 'nombre' },
      {
        text: 'Cupos',
        value: 'cupos'
      },
      {
        text: 'Inscritos',
        value: 'inscritos'
      },
      {
        text: 'Duración',
        value: 'duracion'
      },
      {
        text: 'Costo',
        value: 'costo'
      },
      {
        text: 'terminado',
        value: 'estado'
      },
      {
        text: 'Fecha',
        value: 'fecha'
      },
      {
        text: 'Acciones',
        value: 'actions'
      }
    ]
  }),
  methods: {
    editarItem(item) {
      console.log(item)
    },
    borrarItem(item) {
      prompt('Desea borrar el elemento?')
      this.$store.dispatch('cursos/borrarCurso', item)
    }
  }
}
</script>

<style></style>
