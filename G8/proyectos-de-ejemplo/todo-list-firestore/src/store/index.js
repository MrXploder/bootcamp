import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import { todosModule as todos } from "./todos";

export default new Vuex.Store({
  state: {
    todos: {
      data: [],
      status: "idle",
    },
  },
  mutations: {},
  actions: {},
  modules: {
    todos,
  },
});
