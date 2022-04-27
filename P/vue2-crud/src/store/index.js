import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import { completosModule } from './modules/completos';

export default new Vuex.Store({
  modules: {
    completos: completosModule
  }
});
