export const system = {
  namespaced: true,
  state: {
    drawer: false
  },
  mutations: {
    SET_DRAWER(state, value) {
      state.drawer = value
    }
  },
  actions: {
    toggleDrawer(context) {
      context.commit('SET_DRAWER', !context.state.drawer)
    }
  }
}
