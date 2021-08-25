<template>
  <form @submit.prevent="handleFormSubmit">
    <label for="">Nombre Producto</label>
    <input type="text" v-model="form.name" required />
    <br />
    <label for="">Precio del producto</label>
    <input type="number" v-model.number="form.price" required />
    <br />
    <label for="">Categoria</label>
    <select v-model="form.category" required>
      <option value="Food">Comida</option>
      <option value="Pets">Mascotas</option>
      <option value="Other">Otro</option>
    </select>
    <br />
    <label>Color</label>
    <input type="color" v-model="form.color" required />
    <br />
    <label>Oferta</label>
    <input type="checkbox" v-model="form.offer" />
    <input
      type="number"
      min="1"
      max="100"
      v-model="form.discount"
      v-if="form.offer"
      required
    />
    <br />
    <button type="submit">Guardar</button>
  </form>
</template>

<script>
export default {
  name: 'NewProduct',
  data: () => ({
    form: {
      name: '',
      price: null,
      category: '',
      offer: false,
      discount: null,
      color: ''
    }
  }),
  methods: {
    async handleFormSubmit() {
      await this.$store.dispatch('agregarProducto', this.form)
      this.$router.push('/products')
    }
  }
}
</script>

<style></style>
