import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const delay = (ms) => async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, ms)
  })
}

export default new Vuex.Store({
  state: {
    search: '',
    shoppingCart: [],
    productList: [
      {
        name: 'Casa',
        price: 100,
        color: 'red',
        category: 'Other',
        offer: false,
        discount: 0
      },
      {
        name: 'Café',
        price: 100,
        color: 'red',
        category: 'Food',
        offer: false,
        discount: 0
      },
      {
        name: 'Gato',
        price: 100,
        color: 'red',
        category: 'Pets',
        offer: true,
        discount: 20
      }
    ]
  },
  getters: {
    filteredProductList(state) {
      return state.productList.filter(
        (product) =>
          state.search.length > 2 &&
          Object.values(product).join(',').includes(state.search)
      )
    },
    shoppingCartTotal(state) {
      return state.shoppingCart.reduce((accumulator, producto) => {
        accumulator =
          accumulator +
          (producto.price - (producto.price * producto.discount) / 100) *
            producto.qty
        return accumulator
      }, 0)
    }
  },
  mutations: {
    ADD_PRODUCT(state, newProduct) {
      state.productList.push(newProduct)
    },
    ADD_PRODUCT_TO_SHOPPING_CART(state, newProduct) {
      state.shoppingCart.push(newProduct)
    },
    REMOVE_PRODUCT_FROM_SHOPPING_CART(state, productIndex) {
      state.shoppingCart.splice(productIndex, 1)
    },
    ADD_QTY_TO_SHOPPING_CART_ITEM(state, productIndex) {
      state.shoppingCart[productIndex].qty++
    },
    SUB_QTY_TO_SHOPPING_CART_ITEM(state, productIndex) {
      state.shoppingCart[productIndex].qty--
    }
  },
  actions: {
    async agregarProducto(context, newProduct) {
      await delay(2000)
      context.commit('ADD_PRODUCT', { ...newProduct })
    },
    async agregarProductoAlCarritoDeCompras(context, newProduct) {
      await delay(1000)
      const productIndexInShoppingCart = context.state.shoppingCart.findIndex(
        (product) => {
          return product.name === newProduct.name &&
            product.category === newProduct.category
            ? product
            : undefined
        }
      )

      if (productIndexInShoppingCart >= 0) {
        context.commit(
          'ADD_QTY_TO_SHOPPING_CART_ITEM',
          productIndexInShoppingCart
        )
      } else {
        context.commit(
          'ADD_PRODUCT_TO_SHOPPING_CART',
          {
            ...newProduct,
            qty: 1
          },
          1000
        )
      }
    },
    async agregarCantidadAlProductoDelCarritoDeCompras(
      context,
      indiceProducto
    ) {
      await delay(1000)
      context.commit('ADD_QTY_TO_SHOPPING_CART_ITEM', indiceProducto)
    },
    async restarCantidadAlProductoDelCarritoDeCompras(context, indiceProducto) {
      await delay(1000)
      if (context.state.shoppingCart[indiceProducto].qty >= 2) {
        context.commit('SUB_QTY_TO_SHOPPING_CART_ITEM', indiceProducto)
      } else {
        context.commit('REMOVE_PRODUCT_FROM_SHOPPING_CART', indiceProducto)
      }
    }
  }
})
