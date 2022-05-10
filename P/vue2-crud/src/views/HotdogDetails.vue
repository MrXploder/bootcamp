<template>
  <div>
    <h1>Detalle del completo</h1>
    <pre>
      {{ hotdogDetails }}
    </pre>
  </div>
</template>

<script>
import Store from '@/store'
import { mapState } from 'vuex'

export default {
  beforeRouteEnter(to, from, next) {
    Store.dispatch('completos/getOneById', to.params.id)
    next()
  },
  computed: {
    ...mapState('completos', {
      hotdogDetails: (state) => state.details
    })
  }
}
</script>

<style></style>
