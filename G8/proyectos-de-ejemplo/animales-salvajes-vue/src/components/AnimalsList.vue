<template>
	<div class="col-12 card col-sm-7 text-center p-4 bg-warning shadow-lg" id="Tabla">
		<h3>Animales en investigación</h3>
		<hr class="my-0 bg-dark w-75 mx-auto" />

		<div class="zona-de-tarjetas my-3 p-3 d-flex align-items-start justify-content-start flex-wrap bg-dark">
			<AnimalCard v-for="(animal, $index) in animalList" :key="$index" :animal="animal" />
		</div>
	</div>
</template>

<script>
import AnimalCard from '@/components/AnimalCard.vue'
export default {
	components: {
		AnimalCard,
	},
	props: {
		animalList: { type: Array },
	},
}
</script>

<style></style>
