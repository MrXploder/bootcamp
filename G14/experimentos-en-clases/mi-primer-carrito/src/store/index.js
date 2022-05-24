import Vue from 'vue'
import Vuex from 'vuex'

import {carritoModule} from "@/store/modules/carrito"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    carrito: carritoModule
  }
})
