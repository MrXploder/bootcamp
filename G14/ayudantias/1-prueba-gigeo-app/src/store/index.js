import Vue from 'vue';
import Vuex from 'vuex';

import { sessionModule as session } from '@/store/modules/session.js';
import { lecturesModule as lectures} from "@/store/modules/lectures.js"

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    session,
    lectures
  },
});
