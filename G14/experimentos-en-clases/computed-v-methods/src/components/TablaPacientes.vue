<template>
  <table class="table">
    <thead>
      <tr>
        <th>#</th>
        <th>Nombre</th>
        <th>Apellido</th>
        <th>Prevision</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(paciente, $index) of pacientes" :key="$index">
        <td>{{ $index + 1 }}</td>
        <td>{{ paciente.nombre }}</td>
        <td>{{ paciente.apellido }}</td>
        <td
          :style="{ color: paciente.prevision === 'FONASA' ? 'red' : 'gold' }"
        >
          {{ paciente.prevision }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: ["pacientes"],
};
</script>

<style></style>
