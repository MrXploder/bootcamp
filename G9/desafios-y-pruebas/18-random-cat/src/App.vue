<template>
  <div>
    <h1>Random GIF Cat</h1>

    <form @submit.prevent="generarNuevoGatitoUrl()">
      <label for="titulo">Titulo:</label>
      <input
        type="text"
        required
        name="titulo"
        minlength="3"
        maxlength="10"
        v-model="formulario.titulo"
      />

      <br />

      <label for="filtro">Filtro:</label>
      <select required name="filtro" v-model="formulario.filtro">
        <option value="" selected disabled></option>
        <option value="blur">Blur</option>
        <option value="mono">Mono</option>
        <option value="sepia">Sepia</option>
        <option value="negative">Negative</option>
        <option value="paint">Paint</option>
      </select>

      <br />

      <label for="color">Color:</label>
      <select required name="color" v-model="formulario.color">
        <option value="" selected disabled></option>
        <option value="red">Rojo</option>
        <option value="blue">Azul</option>
        <option value="green">Verde</option>
        <option value="purple">Morado</option>
        <option value="orange">Naranja</option>
      </select>
      <div
        style="width: 15px; height: 15px; border-radius: 50%; display: inline-block"
        :style="{ 'background-color': formulario.color }"
      ></div>

      <br />

      <label for="tamaño">Tamaño:</label>
      <input
        type="number"
        name="tamaño"
        required
        step="100"
        min="100"
        max="900"
        v-model.number="formulario.tamaño"
      />

      <br />
      <br />
      <br />

      <button type="submit">Obtener mi gatito</button>
    </form>

    <img
      alt="gatito"
      :src="gatitoUrl"
      @load="cargandoGatito = false"
      v-show="gatitoUrl !== '' && !cargandoGatito"
    />
    {{ cargandoGatito ? "Cargando imagen del gatito" : "" }}

    <br />
    <br />
    <br />

    <img
      alt="gatito-con-fetch"
      :src="gatitoUrlConBlob"
      v-show="gatitoUrlConBlob !== '' && !cargandoGatitoConBlob"
    />
    {{
      cargandoGatitoConBlob ? "Cargando imagen del gatito con fetch/blob" : ""
    }}
  </div>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    cargandoGatito: false,
    cargandoGatitoConBlob: false,
    gatitoUrl: "",
    gatitoUrlConBlob: "",
    formulario: {
      titulo: null,
      filtro: null,
      color: null,
      tamaño: null,
    },
  }),
  methods: {
    generarNuevoGatitoUrl() {
      this.cargandoGatito = true;

      this.gatitoUrl = `https://cataas.com/cat/gif/says/${this.formulario.titulo}?filter=${this.formulario.filtro}&color=${this.formulario.color}&width=${this.formulario.tamaño}&height=${this.formulario.tamaño}`;

      /////////////////////////////////////////7
      /**
       * Esta parte con fetch no es necesaria, es solo un ejemplo
       */

      this.cargandoGatitoConBlob = true;
      fetch(
        `https://cataas.com/cat/gif/says/${this.formulario.titulo}?filter=${this.formulario.filtro}&color=${this.formulario.color}&width=${this.formulario.tamaño}&height=${this.formulario.tamaño}`
      )
        .then((response) => response.blob())
        .then((blob) => {
          this.gatitoUrlConBlob = URL.createObjectURL(blob);
          this.cargandoGatitoConBlob = false;
        });
    },
  },
};
</script>

<style></style>
