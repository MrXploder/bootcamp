import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    productList: [
      {
        name: 'Casa',
        price: 100,
        color: 'red',
        category: 'Other'
      },
      {
        name: 'Bote',
        price: 100,
        color: 'red',
        category: 'Other'
      },
      {
        name: 'Avión',
        price: 100,
        color: 'red',
        category: 'Other'
      },
      {
        name: 'Motocicleta',
        price: 100,
        color: 'red',
        category: 'Other'
      },
      {
        name: 'Computadora',
        price: 100,
        color: 'red',
        category: 'Other'
      },
      {
        name: 'Silla',
        price: 100,
        color: 'red',
        category: 'Other',
        discount: 10
      },
      {
        name: 'Espejo',
        price: 100,
        color: 'red',
        category: 'Other'
      },
      {
        name: 'Mesa',
        price: 100,
        color: 'red',
        category: 'Other'
      },
      {
        name: 'Café',
        price: 100,
        color: 'red',
        category: 'Food'
      },
      {
        name: 'Bicicleta',
        price: 100,
        color: 'red',
        category: 'Other'
      },
      {
        name: 'Gato',
        price: 100,
        color: 'red',
        category: 'Pets',
        discount: 20
      },
      {
        name: 'Parlante',
        price: 100,
        color: 'red',
        category: 'Other'
      },
      {
        name: 'Plancha',
        price: 100,
        color: 'red',
        category: 'Other'
      },
      {
        name: 'Libro',
        price: 100,
        color: 'red',
        category: 'Other'
      }
    ]
  },
  mutations: {
    ADD_PRODUCT(state, newProduct) {
      state.productList.push(newProduct)
    }
  },
  actions: {
    async agregarProducto(context, newProduct) {
      return new Promise((resolve) => {
        setTimeout(() => {
          context.commit('ADD_PRODUCT', { ...newProduct })
          resolve()
        }, 2000)
      })
    }
  },
  modules: {}
})
