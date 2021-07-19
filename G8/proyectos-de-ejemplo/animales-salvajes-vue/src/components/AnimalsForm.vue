<template>
	<div class="card col-12 col-sm-4 bg-warning text-dark offset-1 shadow-lg">
		<div class="card-body">
			<h5 class="card-title">Registrar animal en:</h5>
			<h6 class="card-subtitle mb-2 text-muted">Ingrese los datos del animal</h6>
			<hr />
			<div class="card-text my-3">
				<div class="form-group">
					<label for="exampleInputPassword1">Nombre del animal:</label>
					<select class="form-control bg-dark text-white" v-model="form.name">
						<option disabled selected>Seleccione un animal</option>
						<option value="Leon">León</option>
						<option value="Lobo">Lobo</option>
						<option value="Oso">Oso</option>
						<option value="Serpiente">Serpiente</option>
						<option value="Aguila">Águila</option>
					</select>
				</div>

				<div class="form-group">
					<label for="exampleInputPassword1">Años de edad estimados:</label>
					<select class="form-control bg-dark text-white" v-model="form.age">
						<option disabled selected>Seleccione un rango de años</option>

						<option value="0 - 1 años">0 - 1 años</option>
						<option value="1 - 3 años">1 - 3 años</option>
						<option value="3 - 5 años">3 - 5 años</option>
						<option value="5 - 8 años">5 - 8 años</option>
						<option value="8 - 10 años">8 - 10 años</option>
						<option value="Más de 10 años">Más de 10 años</option>
					</select>
				</div>

				<div class="form-group">
					<label for="exampleInputPassword1">Comentarios:</label>
					<textarea rows="5" class="form-control shadow-lg bg-dark text-white" v-model="form.comments"></textarea>
				</div>

				<div class="p-5 card bg-dark">
					<img :src="previewSrc" class="preview" />
				</div>
			</div>

			<button class="btn btn-light d-block" @click="handleOnAdd">Agregar</button>
		</div>
	</div>
</template>

<script>
export default {
	data: () => ({
		form: {
			name: '',
			age: '',
			comments: '',
		},
	}),
	props: {
		animalTypes: { type: Array },
	},
	computed: {
		previewSrc() {
			const animal = this.animalTypes.find((animal) => animal.name === this.form.name)
			if (animal) {
				return `./assets/imgs/${animal.imagen}`
			} else {
				return ''
			}
		},
		fullAnimal() {
			return this.animalTypes.find((animal) => animal.name === this.form.name)
		},
	},
	methods: {
		handleOnAdd() {
			this.$emit('add-animal', { ...JSON.parse(JSON.stringify(this.form)), ...this.fullAnimal })
		},
	},
}
</script>

<style>
.preview {
	height: 200px;
	background-position: top;
	background-size: contain;
	background-repeat: no-repeat;
}
</style>
