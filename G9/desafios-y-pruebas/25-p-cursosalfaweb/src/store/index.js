import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import { sessionModule } from "./modules/session";

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    session: sessionModule,
  },
});
