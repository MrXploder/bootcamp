<template>
  <v-data-table :items="$store.state.grades.grades.data" :headers="headers">
    <template v-slot:[`item.price`]="{ item }">
      <v-chip color="success">${{ item.price.toLocaleString() }}</v-chip>
    </template>

    <template v-slot:[`item.status`]="{ item }">
      <v-chip :color="item.status ? 'info' : ''">{{ item.status ? 'Si' : 'No' }}</v-chip>
    </template>

    <template v-slot:[`item.date`]="{ item }">
      <v-chip color="success">{{ item.date }}</v-chip>
    </template>

    <!-- <template v-slot:[`item.actions`]="{ item }">
      <v-layout>
        <v-btn icon @click="$router.push(`/grade/${item.id}`)">
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
        <v-btn icon @click="borrarItem(item)">
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </v-layout>
    </template> -->
  </v-data-table>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({})
export default class GradesTable extends Vue {
  public get headers() {
    return [
      { text: 'Nombre', value: 'name' },
      {
        text: 'Cupos',
        value: 'quotas'
      },
      {
        text: 'Inscritos',
        value: 'enrolled'
      },
      {
        text: 'Duración',
        value: 'span'
      },
      {
        text: 'Costo',
        value: 'price'
      },
      {
        text: 'terminado',
        value: 'status'
      },
      {
        text: 'Fecha',
        value: 'date'
      },
      {
        text: 'Acciones',
        value: 'actions'
      }
    ]
  }
}
</script>

<style></style>
