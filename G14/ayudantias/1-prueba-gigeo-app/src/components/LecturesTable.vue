<template>
  <v-data-table :headers="headers" :items="value">
    <template v-slot:item.price="{ item }">
      <v-chip color="green" dark>${{ item.price.toLocaleString() }}</v-chip>
    </template>

    <template v-slot:item.finished="{ item }">
      <v-chip dark :color="item.finished ? 'info' : 'grey lighten-1'">
        {{ item.finished ? 'Si' : 'No' }}
      </v-chip>
    </template>

    <template v-slot:item.date="{ item }">
      <v-chip dark color="green">
        {{ item.date }}
      </v-chip>
    </template>
  </v-data-table>
</template>

<script>
export default {
  props: ['value'],
  data: () => ({
    headers: [
      {
        text: 'Curso',
        value: 'name',
      },
      {
        text: 'Cupos',
        value: 'quota',
      },
      {
        text: 'Inscritos',
        value: 'enrolled',
      },
      {
        text: 'Duración',
        value: 'span',
      },
      {
        text: 'Costo',
        value: 'price',
      },
      {
        text: 'Terminado',
        value: 'finished',
      },
      {
        text: 'Fecha',
        value: 'date',
      },
      {
        text: 'Acciones',
        value: 'actions',
      },
    ],
  }),
};
</script>

<style></style>
