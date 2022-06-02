import Vue from 'vue';
import Vuex from 'vuex';

import { tareasModule } from './modules/tareas.js';

Vue.use(Vuex);
export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    tareas: tareasModule,
  },
});
