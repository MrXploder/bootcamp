<template>
  <div>
    <h1>Listado de peleadores</h1>
    <ul>
      <li v-for="peleador in peleadores" :key="peleador.id">
        {{ peleador.nombre }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: () => ({
    peleadores: [],
  }),
  created() {
    fetch("/peleadores.json")
      .then((res) => res.json())
      .then((data) => {
        this.peleadores = data;
      });
  },
};
</script>

<style></style>
