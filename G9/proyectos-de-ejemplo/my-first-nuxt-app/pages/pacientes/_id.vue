<template>
  <div>
    <h1>Vista de paciente: {{ $route.params.id }}</h1>
    Valor de la UF es: {{ uf }}
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const response = await $axios.$get("https://mindicador.cl/api/uf");
    const uf = response.serie[0].valor;

    return { uf };
  },
  data: () => ({
    uf: 100
  }),
  methods: {},
  mounted() {
    // console.log("mounted");
    // this.$axios.$get("https://mindicador.cl/api/uf").then(response => {
    //   this.uf = response.serie[0].valor;
    // });
  }
};
</script>

<style></style>
