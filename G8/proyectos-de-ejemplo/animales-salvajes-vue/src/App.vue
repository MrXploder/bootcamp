<template>
	<div class="row">
		<AnimalsList :animal-list="AnimalList" />
		<AnimalsForm :animal-types="AnimalTypes" @add-animal="handleOnAddAnimal($event)" />
	</div>
</template>

<script>
import AnimalsForm from '@/components/AnimalsForm.vue'
import AnimalsList from '@/components/AnimalsList.vue'

export default {
	name: 'App',
	components: {
		AnimalsForm,
		AnimalsList,
	},
	data: () => ({
		AnimalTypes: [],
		AnimalList: [],
	}),
	mounted() {
		fetch('./animales.json')
			.then((request) => request.json())
			.then((data) => (this.AnimalTypes = data.animales))
	},
	methods: {
		handleOnAddAnimal(animal) {
			this.AnimalList.push(animal)
		},
	},
}
</script>

<style lang="scss">
body {
	background-image: url('../public/assets/imgs/fondo.jpg');
	background-position: bottom;
	background-size: cover;
	background-repeat: no-repeat;
	height: 100vh;
	padding: 100px;
}
</style>
