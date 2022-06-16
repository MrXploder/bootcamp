import Vue from 'vue';
import Vuex from 'vuex';

import { sessionModule as session } from './modules/sessionModule.js';
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    session,
  },
});
