import Axios from 'axios'

const UsuariosAxios = Axios.create({
  baseURL: 'http://localhost:3000/api',
})

export const usuariosModulo = {
  namespaced: true,
  state: { lista: [] },
  mutations: {
    SET_LIST(state, nuevaLista) {
      state.lista = nuevaLista
    },
  },
  actions: {
    async traerLosUsuarios(context) {
      try {
        const UsuariosResponse = await UsuariosAxios.get('http://localhost:3000/api/pacientes')
        context.commit('SET_LIST', UsuariosResponse.data)
      } catch (e) {
        console.error(e)
      }
    },
  },
}
