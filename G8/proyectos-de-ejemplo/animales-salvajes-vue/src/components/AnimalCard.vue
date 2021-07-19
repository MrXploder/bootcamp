<template>
	<div class="card text-white bg-secondary" style="width: 200px">
		<img class="card-img-top" :src="`./assets/imgs/${animal.imagen}`" />
		<div class="card-body p-0" @click="playSound()">
			<a href="#" class="btn btn-primary">
				<img class="p-1" src="assets/imgs/audio.svg" style="width: 50px" />
			</a>
		</div>
		<audio ref="player" class="d-none">
			<source :src="`./assets/sounds/${animal.sonido}`" />
		</audio>
	</div>
</template>

<script>
export default {
	props: {
		animal: { type: Object },
	},
	methods: {
		playSound() {
			this.$refs.player.play()
		},
	},
}
</script>

<style></style>
