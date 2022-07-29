export const appModule = {
  namespaced: true,
  state: {
    navigationDrawer: true
  },
  mutations: {
    SET_NAVIGATION_DRAWER(state, value) {
      state.navigationDrawer = value
    }
  },
  actions: {
    toggleNavigationDrawer({ commit, state }) {
      commit('SET_NAVIGATION_DRAWER', !state.navigationDrawer)
    }
  }
}
