const delay = (ms) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, ms)
  })

export const carritoModule = {
  namespaced: true,
  state: {
    todosLosProductos: []
  },
  getters: {
    totalTotal(state) {
      return state.todosLosProductos.reduce((accumulator, producto) => {
        accumulator += producto.precio * (1 - producto.descuento / 100) * producto.cantidad
        return accumulator
      }, 0)
    }
  },
  mutations: {
    AGREGAR_PRODUCTO(state, nuevoProducto) {
      state.todosLosProductos.push(nuevoProducto)
    },
    AGREGAR_CANTIDAD_PRODUCTO(state, indiceProducto) {
      state.todosLosProductos[indiceProducto].cantidad++
    },
    QUITAR_CANTIDAD_PRODUCTO(state, indiceProducto) {
      state.todosLosProductos[indiceProducto].cantidad--
    },
    QUITAR_PRODUCTO(state, indiceProducto) {
      state.todosLosProductos.splice(indiceProducto, 1)
    },
    QUITAR_TODOS_PRODUCTOS(state) {
      state.todosLosProductos = []
    }
  },
  actions: {
    agregarProducto(context, producto) {
      const indiceDelProductoQueYoQuieroBuscar = context.state.todosLosProductos.findIndex(
        (productoEnElCarrito) => productoEnElCarrito.nombre === producto.nombre
      )

      /**
       * significa que no lo encontro
       */
      if (indiceDelProductoQueYoQuieroBuscar === -1) {
        // eslint-disable-next-line no-unused-vars
        const { stock, ...nuevoProducto } = producto
        context.commit('AGREGAR_PRODUCTO', { ...nuevoProducto, cantidad: 1 })
        /**
         * significa que si lo encontro
         */
      } else {
        context.commit('AGREGAR_CANTIDAD_PRODUCTO', indiceDelProductoQueYoQuieroBuscar)
      }
    },
    quitarProducto(context, producto) {
      const indiceDelProductoQueYoQuieroBuscar = context.state.todosLosProductos.findIndex(
        (productoEnElCarrito) => productoEnElCarrito.nombre === producto.nombre
      )

      if (indiceDelProductoQueYoQuieroBuscar >= 0) {
        if (context.state.todosLosProductos[indiceDelProductoQueYoQuieroBuscar].cantidad > 1) {
          context.commit('QUITAR_CANTIDAD_PRODUCTO', indiceDelProductoQueYoQuieroBuscar)
        } else {
          context.commit('QUITAR_PRODUCTO', indiceDelProductoQueYoQuieroBuscar)
        }
      } else {
        console.error('el producto no existe en el carrito de compras')
      }
    },
    async comprar(context) {
      await delay(5000)
      console.log('Productos comprados')
      console.table(context.state.todosLosProductos)
      context.commit('QUITAR_TODOS_PRODUCTOS')
    }
  }
}
