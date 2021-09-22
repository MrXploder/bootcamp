export const productosModule = {
  namespaced: true,
  state: {
    todosLosProductos: [
      {
        nombre: 'Pan de Pascua',
        categoria: 'Dulce',
        peso: '1kg',
        oferta: false,
        descuento: 0,
        precio: 1200,
        imagen:
          'https://cdn-0.enmicocinahoy.cl/wp-content/uploads/2017/11/pan-de-pascua-2-scaled.jpg'
      },
      {
        nombre: 'Batio',
        categoria: 'Salado',
        peso: '100gr',
        oferta: true,
        descuento: 10,
        precio: 800,
        imagen: 'https://www.midiariodecocina.com/wp-content/uploads/2014/10/pan-marraqueta.jpg'
      },
      {
        nombre: 'Hallulla',
        categoria: 'Salado',
        peso: '50gr',
        oferta: false,
        descuento: 0,
        precio: 1000,
        imagen:
          'https://comidaschilenas.com/wp-content/uploads/2019/02/Receta-de-hallullas-chilenas.jpg'
      },
      {
        nombre: 'Toscano',
        categoria: 'Salado',
        peso: '500gr',
        oferta: true,
        descuento: 50,
        precio: 400,
        imagen: 'https://www.wattsindustrial.cl/images/recetas/toscano-min.jpg'
      }
    ]
  },
  mutations: {
    AGREGAR_PRODUCTO(state, nuevoProducto) {
      state.todosLosProductos.push(nuevoProducto)
    }
  },
  actions: {
    crearProducto(context, producto) {
      context.commit('AGREGAR_PRODUCTO', producto)
    }
  }
}

// $store.state.productos.todosLosProductos
