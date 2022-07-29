import { DB } from '@/plugins/firebase';

export const usersModule = {
  namespaced: true,
  state: {
    loading: false,
    list: [],
  },
  mutations: {
    SET_LIST(state, newList) {
      state.list = newList;
    },
    SET_LOADING(state, newLoading) {
      state.loading = newLoading;
    },
  },
  actions: {
    async getAll({ commit }) {
      commit('SET_LOADING', true);
      try {
        const users$ = await DB.collection('users').get();
        const users = [];

        users$.forEach((document) => {
          users.push({ ...document.data(), id: document.id });
        });

        commit('SET_LIST', users);
      } catch (e) {
        console.error(e);
      } finally {
        commit('SET_LOADING', false);
      }
    },
    async updateOneById({ commit }, {id, ...newUser}) {
      commit('SET_LOADING', true);
      try {
        await DB.collection("users").doc(id).update(newUser)
      } catch (error) {
        console.error(e)
      } finally {
        commit('SET_LOADING', false);
      }
    },
  },
};
