import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    events: {
      namespaced: true,
      state: {
        list: [],
        loading: false,
      },
      mutations: {
        SET_LOADING(state, newLoading) {
          state.loading = newLoading;
        },
        SET_LIST(state, newList) {
          state.list = newList;
        },
        ADD_TO_LIST(state, newElement) {
          state.list.push(newElement)
        }
      },
      actions: {
        async getAll({ commit }) {
          try {
            const { data: Points } = await Axios.get(
              'https://run.mocky.io/v3/a91f9c64-0abd-44be-b144-86e120a969fc'
            );
            commit('SET_LIST', Points);
          } catch (error) {
            console.error(error);
          }
        },
      },
    },
  },
});
