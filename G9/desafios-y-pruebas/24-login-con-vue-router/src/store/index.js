import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentUser: null,
  },
  mutations: {
    SET_CURRENT_USER(state, newUser) {
      state.currentUser = newUser;
    },
  },
  actions: {
    defineCurrentUser(context, user) {
      context.commit("SET_CURRENT_USER", user);
    },
  },
  modules: {},
});
