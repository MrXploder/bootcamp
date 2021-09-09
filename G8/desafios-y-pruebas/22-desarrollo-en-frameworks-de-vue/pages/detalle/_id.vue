<template>
  <CharacterCard v-if="personaje" :personaje="personaje" />
</template>

<script>
import CharacterCard from '../../components/CharacterCard.vue'
export default {
  component: { CharacterCard },
  data: () => ({
    personaje: null,
  }),
  mounted() {
    const personaje = this.$store.state.personajes.find(
      (personaje) => personaje.id === Number.parseInt(this.$route.params.id)
    )
    this.personaje = personaje
  },
}
</script>

<style></style>
