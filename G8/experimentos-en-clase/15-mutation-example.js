const mutations = {
  AGREGAR_STOCK(state, indiceProducto) {
    state.productos[indiceProducto].stock += 1;
  },
};

const actions = {
  agregarStockAProducto(context, productoSolicitado) {
    const productoEncontrado = context.state.productos.find(
      (producto) => producto.id === productoSolicitado.id
    );

    if (productoEncontrado) {
      context.commit("AGREGAR_STOCK", indice);
      return productoEncontrado;
    } else {
      console.warn("errorHandler", "producto no encontrado");
    }
  },
};
