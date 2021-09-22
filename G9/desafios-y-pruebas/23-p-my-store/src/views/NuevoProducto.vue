<template>
  <div>
    <h3>Nuevo producto</h3>
    <form @submit.prevent="agregarNuevoProducto">
      <div class="form-group">
        <label for="nombre">Nombre</label>
        <input
          type="text"
          class="form-control"
          id="nombre"
          name="nombre"
          minlength="4"
          maxlength="40"
          required
          v-model="producto.nombre"
        />
      </div>

      <div class="form-group">
        <label for="categoria">Categoria</label>
        <select
          name="categoria"
          id="categoria"
          class="form-control"
          required
          v-model="producto.categoria"
        >
          <option value="" selected disabled>Elija una opción</option>
          <option value="dulce">Dulce</option>
          <option value="salado">Salado</option>
        </select>
      </div>

      <div class="form-group">
        <label for="imagen">URL Imagen</label>
        <input
          type="text"
          class="form-control"
          id="imagen"
          name="imagen"
          required
          v-model="producto.imagen"
        />
      </div>

      <div class="form-group">
        <label for="precio">Precio</label>
        <input
          v-model.number="producto.precio"
          type="number"
          min="100"
          max="9999"
          step="100"
          class="form-control"
          id="precio"
          name="precio"
          required
        />
      </div>

      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="oferta"
          v-model="producto.oferta"
        />
        <label class="form-check-label" for="oferta"> Oferta </label>
      </div>

      <div class="form-group" v-if="producto.oferta">
        <label for="descuento">Descuento</label>
        <input
          type="number"
          class="form-control"
          id="descuento"
          name="descuento"
          required
          v-model.number="producto.descuento"
          min="0"
          max="99"
          step="1"
        />
      </div>

      <button class="btn btn-success" type="submit">Crear producto</button>
    </form>
  </div>
</template>

<script>
export default {
  data: () => ({
    producto: {
      nombre: null,
      categoria: null,
      peso: null,
      precio: null,
      oferta: false,
      descuento: null,
      imagen: ''
    }
  }),
  methods: {
    agregarNuevoProducto() {
      this.$store.dispatch('productos/crearProducto', { ...this.producto })
      this.$router.push('/')
    }
  }
}
</script>

<style></style>
