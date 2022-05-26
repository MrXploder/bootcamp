<template>
  <table class="table">
    <thead>
      <tr>
        <th>Código</th>
        <th>Color</th>
        <th>Nombre</th>
        <th>Stock</th>
        <th>Precio</th>
        <th>Acciones</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(juego, $index) in juegos" :key="$index" :style="{ color: juego.color }">
        <td>{{ juego.codigo }}</td>
        <td>
          <select :value="juego.color" @change="cambiarColorAUnJuego(juego, $event)">
            <option v-for="(color, $index) in colores" :key="$index" :value="color.value">
              {{ color.label }}
            </option>
          </select>
        </td>
        <td>{{ juego.nombre }}</td>
        <td>{{ juego.stock }}</td>
        <td>{{ juego.precio }}</td>
        <td>
          <button @click="agregarStock(juego)">+</button>
          <button @click="quitarStock(juego)">-</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data: () => ({
    colores: [
      { value: 'red', label: 'Rojo' },
      { value: 'blue', label: 'Azul' },
      { value: 'green', label: 'Verde' },
      { value: 'black', label: 'Negro' },
    ],
  }),
  computed: {
    ...mapState('juegos', {
      juegos: (state) => state.listado,
    }),
  },
  methods: {
    ...mapActions('juegos', ['agregarStock', 'quitarStock', 'cambiarColor']),
    cambiarColorAUnJuego(juego, event) {
      this.cambiarColor({ juegoABuscar: juego, nuevoColor: event.target.value })
    },
  },
}
</script>
