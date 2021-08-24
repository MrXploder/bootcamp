export default {
  state: {
    currentUser: undefined,
    shoppingCart: { list: [], total: 0.0 },
    showCart: false,
  },
  mutations: {
    // User
    UPDATE_CURR_USER(state, user) { state.currentUser = user },
    // Cart
    ADD_TO_CART(state, product) {
      let pidx = state.shoppingCart.list.map(p => p.id).indexOf(product.id)
      if (pidx >= 0) {
        state.shoppingCart.list[pidx].qty++
      } else { state.shoppingCart.list.push(product) }
      state.shoppingCart.total = state.shoppingCart.list.reduce((sum, prod) => sum += prod.price , 0.0)
    },
    REMOVE_FROM_CART(state, product_id) {
      let pidx = state.shoppingCart.list.map(p => p.id).indexOf(product_id)
      if (pidx >= 0) {
        state.shoppingCart.list.splice(pidx, 1)
        state.shoppingCart.total = state.shoppingCart.list.reduce((sum, prod) => sum += prod.price , 0.0)
      }
    },
    CLEAR_CART(state) { state.shoppingCart = { list: [], total: 0.0 } },
    UPDATE_SHOW_CART(state, value) { state.showCart = value },
  },
  actions: {
    // User
    updateUser ({commit}, user) {
      commit('UPDATE_CURR_USER', user)
    },
    addToCart ({commit}, product) {
      commit('ADD_TO_CART', product)
    },
    removeFromCart ({commit}, product_id) {
      commit('REMOVE_FROM_CART', product_id)
    },
    clearCart ({commit}) {
      commit('CLEAR_CART')
    },
    updateShowCart({commit}, val) {
      commit('UPDATE_SHOW_CART', !!val)
    }
  },
  getters: {
    // User
    isLoggedIn: state => !!state.currentUser,
    currentUser: state => state.currentUser,
    // Cart
    shoppingCart: state => state.shoppingCart,
    showCart: state => state.showCart,
  }
}
