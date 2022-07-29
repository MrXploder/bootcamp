import Axios from 'axios'

export const juegosModule = {
  namespaced: true,
  state: {
    listado: [],
    loading: false,
  },
  mutations: {
    SET_LISTADO(state, newListado) {
      state.listado = newListado
    },
    SET_LOADING(state, newLoading) {
      state.loading = newLoading
    },
    ADD_STOCK(state, indice) {
      state.listado[indice].stock++
    },
    REMOVE_STOCK(state, indice) {
      state.listado[indice].stock--
    },
    SET_COLOR(state, { indice, nuevoColor }) {
      state.listado[indice].color = nuevoColor
    },
  },
  actions: {
    async getAllJuegos(context) {
      context.commit('SET_LOADING', true)
      try {
        if (context.state.listado.length === 0) {
          // const juegos = await fetch('/juegos.json').then((response) => response.json())
          const juegos = await Axios.get('/juegos.json')
          context.commit('SET_LISTADO', juegos.data)
        }
      } catch (e) {
        console.error(e)
      } finally {
        setTimeout(() => {
          context.commit('SET_LOADING', false)
        }, 2000)
      }
    },
    agregarStock(context, juegoABuscar) {
      const juegos = context.state.listado
      const indice = juegos.findIndex((juego) => juego.codigo === juegoABuscar.codigo)
      context.commit('ADD_STOCK', indice)
    },
    quitarStock(context, juegoABuscar) {
      const juegos = context.state.listado
      const indice = juegos.findIndex((juego) => juego.codigo === juegoABuscar.codigo)
      if (juegos[indice].stock > 0) {
        context.commit('REMOVE_STOCK', indice)
      }
    },
    cambiarColor(context, { juegoABuscar, nuevoColor }) {
      const juegos = context.state.listado
      const indice = juegos.findIndex((juego) => juego.codigo === juegoABuscar.codigo)
      context.commit('SET_COLOR', { indice, nuevoColor })
      if (nuevoColor === 'blue') {
        console.log('el color es azul')
      }
    },
  },
}
