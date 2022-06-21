import Vue from 'vue';
import Vuex from 'vuex';

import { sessionModule as session } from './modules/sessionModule.js';
import { usersModule as users } from "./modules/usersModule.js"
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    session,
    users
  },
});
