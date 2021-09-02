import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import { usuariosModulo as usuarios } from './modules/Usuarios'

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { usuarios },
})
