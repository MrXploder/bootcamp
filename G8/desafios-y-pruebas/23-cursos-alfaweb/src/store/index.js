import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import { system } from './system.js'
import { session } from './session.js'

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    system,
    session
  }
})
