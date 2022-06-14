import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import { funcionariosModule as funcionarios } from './modules/funcionarios';

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    funcionarios
  }
});
