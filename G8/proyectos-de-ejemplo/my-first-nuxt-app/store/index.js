export const state = () => ({
  indicador: null,
})

export const mutations = {
  SET_INDICADOR(state, nuevoIndicador) {
    state.indicador = nuevoIndicador
  },
}

export const actions = {
  async nuxtServerInit(context) {
    // TODO: lo que queramos
    const indicador = await fetch('https://mindicador.cl/api/uf').then((res) =>
      res.json()
    )
    context.commit('SET_INDICADOR', indicador)
  },
}
