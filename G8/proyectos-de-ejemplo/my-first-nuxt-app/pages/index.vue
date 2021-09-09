<template>
  <div>
    <h1>Hola mundo soy yo desde Nuxt</h1>
    <button @click="actualizar">Actualizar</button>
    <p>fecha ultima de actualización: {{ actualizado }}</p>
    <pre>{{ indicador.serie[0] }}</pre>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const indicador = await $axios.$get('https://mindicador.cl/api/uf')
    const actualizado = new Date().toISOString().substr(0, 20)
    return { indicador, actualizado }
  },
  data: () => ({}),
  methods: {
    actualizar() {
      this.actualizado = new Date().toISOString().substr(0, 20)
    },
  },
}
</script>
