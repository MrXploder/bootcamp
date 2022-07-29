import Vue from 'vue';
import Vuex from 'vuex';

import { videosModule as videos } from './modules/videos.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    videos,
  },
});
