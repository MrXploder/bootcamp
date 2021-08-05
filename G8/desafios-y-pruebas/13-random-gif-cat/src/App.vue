<template>
  <div id="app">
    <h1>Random GIF Cat</h1>

    <form @submit.prevent="handleOnSubmit">
      <div>
        <label>Titulo</label>
        <input
          type="text"
          v-model="form.titulo"
          required
          placeholder="Escriba un titulo"
        />
      </div>

      <div>
        <label>Filtro</label>
        <select v-model="form.filtro" required>
          <option disabled selected value="">Elige un filtro</option>
          <option value="sepia">Sepia</option>
        </select>
      </div>

      <div>
        <label>Color</label>
        <select v-model="form.color">
          <option value="" disabled selected>Elige un color</option>
          <option value="green">Verde</option>
        </select>
      </div>

      <div>
        <label>Tamaño</label>
        <input
          type="number"
          v-model.number="form.tamaño"
          required
          placeholder="Ingrese un tamaño"
        />
      </div>

      <button type="submit">
        {{ cargando ? "Cargando gatito" : "Obteber mi gatito" }}
      </button>
    </form>

    <img :src="urlGatito" class="gatito" />
  </div>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    form: {
      titulo: "",
      filtro: "",
      color: "",
      tamaño: "",
    },
    urlGatito: "",
    cargando: false,
  }),
  methods: {
    async handleOnSubmit(event) {
      this.cargando = true;
      // try {
      //   const Response = await fetch(
      //     `https://cataas.com/cat/gif/says/${this.form.titulo}?json=true&${this.formParams}`
      //   );
      //   const Data = await Response.json();
      //   console.log(Data);
      //   // const Blob = await Response.blob();
      //   // const Imagen = URL.createObjectURL(Blob);
      //   // console.log(Imagen);
      //   // this.urlGatito = Imagen;
      // } catch (e) {
      //   console.error(e);
      // } finally {
      //   this.cargando = false;
      // }

      this.urlGatito = `https://cataas.com/cat/gif/says/${this.form.titulo}?${this.formParams}`;
    },
  },
  computed: {
    formParams() {
      return `filter=${this.form.filtro}&color=${this.form.color}&size=${this.form.tamaño}`;
    },
  },
};
</script>

<style>
html {
  background-color: lightblue;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.color-redondeado {
  height: 30px;
  border-radius: 15px;
  width: 30px;
  border: 1px solid lightgray;
  margin: 0 10px;
}

.prop {
  width: 50%;
  text-align: right;
  padding: 0 5px;
  box-sizing: border-box;
}

.val {
  width: 50%;
  text-align: left;
}

.row {
  width: 100%;
  display: inline-flex;
  padding: 10px;
  box-sizing: border-box;
  background-color: lightcoral;
}

.flex {
  display: inline-flex;
}
</style>
