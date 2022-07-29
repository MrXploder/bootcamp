<template>
  <div>
    <h1>Ejemplo computed-v-methods</h1>
    <TablaPacientes :pacientes="pacientes" />

    <h2>Pacientes FONASA</h2>
    <TablaPacientes :pacientes="pacientesFonasa" />

    <h2>Pacientes ISAPRE</h2>
    <TablaPacientes :pacientes="pacientesIsapre" />
  </div>
</template>

<script>
import TablaPacientes from "@/components/TablaPacientes.vue";
export default {
  name: "App",
  components: {
    TablaPacientes,
  },
  mounted(){
    setInterval(() => {
      this.contador++;
    }, 1000)
  },
  data: () => ({
    contador: 0,
    pacientes: [
      { nombre: "Yerson", apellido: "Reyes", prevision: "FONASA" },
      { nombre: "Ana", apellido: "Navarro", prevision: "FONASA" },
      { nombre: "Alejandro", apellido: "Gonzalez", prevision: "ISAPRE" },
      { nombre: "Rai", apellido: "Silva", prevision: "ISAPRE" },
    ],
  }),
  computed: {
    pacientesFonasa() {
      return this.pacientes.filter(
        (paciente) => paciente.prevision === "FONASA"
      );
    },
    pacientesIsapre() {
      return this.pacientes.filter(
        (paciente) => paciente.prevision === "ISAPRE"
      );
    },
  },
};
</script>

<style></style>
