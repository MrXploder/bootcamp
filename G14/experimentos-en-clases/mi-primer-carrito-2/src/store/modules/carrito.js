export const carritoModule = {
  namespaced: true,
  state: {
    productos: [],
    cargandoProductos: false
  },
  // commit
  mutations: {
    SET_PRODUCTOS(state, newProductos) {
      console.log("before: ", state.productos, "after: ", newProductos)
      state.productos = newProductos;
    },
  },
  //dispatch
  actions: {
    agregarProducto(context, producto) {
      const productos = context.state.productos;
      productos.push(producto);
      context.commit('SET_PRODUCTOS', productos);
    },
  },
  getters: {
    todosLosPancitos(state, getters, rootState, rootGetters) {
      return state.productos.filter(
        (producto) => producto.categoria === 'pancitos'
      );
    },
    todosLosIngredientes(state) {
      return state.productos.filter(
        (producto) => producto.categoria === 'ingredientes'
      );
    },
  },
};
