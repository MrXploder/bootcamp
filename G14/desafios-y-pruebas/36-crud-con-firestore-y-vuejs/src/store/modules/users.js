import Firebase from 'firebase';

export const usersModule = {
  namespaced: true,
  state: {
    list: [],
    loading: false,
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
        const users = [];
        const UsersCollection = await Firebase.firestore()
          .collection('users')
          .get();

        UsersCollection.forEach((doc) => {
          users.push({ ...doc.data(), id: doc.id });
        });

        commit('SET_LIST', users);
      } catch (e) {
        console.error('Error al traer Usuarios de Firebase', e);
      } finally {
        commit('SET_LOADING', false);
      }
    },
    async removeOneById({ commit }, id) {
      commit('SET_LOADING', true);
      try {
        await Firebase.firestore().collection('users').doc(id).delete();
      } catch (e) {
        console.error('Error al borrar documento: ', id);
      } finally {
        commit('SET_LOADING', false);
      }
    },
  },
};
