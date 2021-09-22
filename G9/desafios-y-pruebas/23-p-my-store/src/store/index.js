import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import { carritoModule } from './modules/carrito'
import { productosModule } from './modules/productos'

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    carrito: carritoModule,
    productos: productosModule
  }
})
