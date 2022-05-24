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
  },
  actions: {
    async getAllJuegos(context) {
      context.commit('SET_LOADING', true)
      try {
        // const juegos = await fetch('/juegos.json').then((response) => response.json())
        const juegos = await Axios.get('/juegos.json')
        console.log(typeof juegos.data)
        context.commit('SET_LISTADO', juegos.data)
      } catch (e) {
        console.error(e)
      } finally {
        setTimeout(() => {
          context.commit('SET_LOADING', false)
        }, 2000)
      }
    },
  },
}
