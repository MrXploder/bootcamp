<template>
  <div>
    <h1>Buscador de peleadores</h1>
    <form @submit.prevent="handleSubmit">
      <input
        type="text"
        v-model="idBuscar"
        required
        minlength="3"
        maxlength="3"
      />
      <button type="submit">Buscar</button>
    </form>
  </div>
</template>

<script>
export default {
  data: () => ({
    idBuscar: "",
  }),
  methods: {
    handleSubmit() {
      this.$router.push(`/peleadores/${this.idBuscar}`);
    },
  },
};
</script>

<style></style>
