<template>
  <ul>
    <li v-for="(paciente, $index) in pacientesConNombreCompleto" :key="$index">
      {{ paciente.name }} | {{ paciente.lastName }} | {{ paciente.fullName }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "Pacientes",
  data: () => ({
    algo: "algo",
    pacientes: [
      { name: "Josefa", lastName: "Mendez", usaAudifonos: true },
      { name: "Jaime", lastName: "Lizama", usaAudifonos: false },
    ],
  }),
  methods: {
    pacientesConNombreCompletoPeroComoMetodo() {
      return this.pacientes.map((paciente) => {
        return {
          ...paciente,
          fullName: `${paciente.name} ${paciente.lastName}`,
        };
      });
    },
  },
  computed: {
    pacientesQueSoloUsanAudifonos() {
      return this.pacientes.filter((paciente) => paciente.usaAudifonos);
    },
    pacientesConNombreCompleto() {
      return this.pacientes.map((paciente) => {
        return {
          ...paciente,
          fullName: `${paciente.name} ${paciente.lastName}`,
        };
      });
    },
  },
};
</script>

<style></style>
