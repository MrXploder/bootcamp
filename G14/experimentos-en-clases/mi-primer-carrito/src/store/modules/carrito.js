export const carritoModule = {
  namespaced: true,
  state: {
    cantidadProductos: 1
  },
  // commit
  mutations: {
    SET_CANTIDAD_PRODUCTOS(state, newCantidadProductos) {
      state.cantidadProductos = newCantidadProductos;
    }
  },
  //dispatch
  actions: {
    agregarProducto(context) {
      context.commit("SET_CANTIDAD_PRODUCTOS", context.state.cantidadProductos + 1)
    }
  }
}