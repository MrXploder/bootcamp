<template>
  <div>
    <h1>Hola soy tu padre</h1>
    <Hijo :mensaje="diEsto" @mod-mensaje="modMensaje" />
    <Hijo :mensaje="diEsto" />
    <Hijo />
  </div>
</template>

<script>
import Hijo from '@/components/Hijo.vue'

export default {
  components: {
    Hijo,
  },
  data() {
    return {
      diEsto: 'Hola mundo pepito',
    }
  },
  methods: {
    modMensaje($event) {
      this.diEsto = $event
    },
  },
}
</script>

<style></style>
