<template>
  <section>
    <h1>Esta es la vista de Hotdogs</h1>
    <CreateHotdogModalBtn />
    <HotdogsTable />
  </section>
</template>

<script>
import CreateHotdogModalBtn from '@/components/CreateHotdogModalBtn.vue'
import HotdogsTable from '@/components/HotdogsTable.vue'

export default {
  components: {
    CreateHotdogModalBtn,
    HotdogsTable
  },
  data: () => ({})
}
</script>

<style></style>
