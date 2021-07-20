<template>
  <div>
    <div>Hola mundo, bienvenido: {{ nombre }}</div>
    <InputPassword />
    <InputPassword />
    <InputPassword />
    <InputPassword />
    <InputPassword />
    <InputPassword />
  </div>
</template>

<script>
import InputPassword from '@/components/InputPassword.vue'

export default {
  components: {
    InputPassword,
  },
  data: () => ({
    nombre: 'Luis',
  }),
}
</script>

<style lang="scss"></style>
