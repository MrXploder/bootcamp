<template>
  <section>
    <h1>Esta es la vista de completos</h1>

    <CompletosTable />
  </section>
</template>

<script>
import CompletosTableComponent from '@/components/CompletosTable.vue';

export default {
  components: {
    CompletosTable: CompletosTableComponent
  },
  data: () => ({})
};
</script>

<style></style>
