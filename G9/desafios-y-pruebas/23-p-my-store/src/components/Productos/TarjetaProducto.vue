<template>
  <div class="card" style="width: 18rem">
    <img class="card-img-top" :src="producto.imagen" alt="Card image cap" />
    <div class="card-body">
      <h6>{{ producto.nombre }}</h6>
    </div>
    <ul class="list-group">
      <li class="list-group-item">Categoria: {{ producto.categoria }}</li>
      <li class="list-group-item">Peso: {{ producto.peso }}</li>
      <li class="list-group-item">Precio: ${{ producto.precio.toString().toLocaleLowerCase() }}</li>
      <li class="list-group-item">
        Descuento:
        {{ producto.oferta ? `${producto.descuento}% off` : 'Sin descuento asociado' }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    producto: { type: Object, required: true }
  }
}
</script>

<style></style>
