import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

import { system } from './system.js'
import { session } from './session.js'
import { cursos } from './cursos.js'

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    system,
    session,
    cursos
  },
  plugins: [createPersistedState()]
})
