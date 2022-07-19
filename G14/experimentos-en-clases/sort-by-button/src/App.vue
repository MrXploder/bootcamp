<template>
  <main>
    <h1>hOLA MUNDO</h1>

    <div>
      <button
        class="btn"
        :class="{ 'btn-primary': filtro === 'FONASA' }"
        @click="asignarFiltro('FONASA')"
      >
        FONASA
      </button>
      <button
        class="btn"
        :class="{ 'btn-primary': filtro === 'ISAPRE' }"
        @click="asignarFiltro('ISAPRE')"
      >
        ISAPRE
      </button>
    </div>

    <ul>
      <li v-for="(paciente, $index) of pacientesFiltrados" :key="$index">
        {{ paciente.prevision }} - {{ paciente.nombre }}
      </li>
    </ul>
  </main>
</template>

<script>
export default {
  data: () => ({
    filtro: '',
    pacientes: [
      { nombre: 'Luis', prevision: 'FONASA' },
      { nombre: 'Pepito', prevision: 'ISAPRE' },
    ],
  }),
  computed: {
    pacientesFiltrados() {
      if (this.filtro === '') {
        return this.pacientes;
      } else {
        return this.pacientes.filter(
          (paciente) => paciente.prevision === this.filtro
        );
      }
    },
  },
  methods: {
    asignarFiltro(tipoDeFiltro) {
      if (this.filtro === tipoDeFiltro) {
        this.filtro = '';
      } else {
        this.filtro = tipoDeFiltro;
      }
    },
  },
};
</script>

<style></style>
