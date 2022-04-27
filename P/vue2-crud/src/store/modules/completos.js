import { collection, getDocs } from 'firebase/firestore/lite';
import { db } from '@/services/firestore';

export const completosModule = {
  namespaced: true,
  state: {
    list: [],
    state: 'idle'
  },
  mutations: {
    SET_LIST(state, newCompletos) {
      state.list = newCompletos;
    },
    SET_STATE(state, newState) {
      state.state = newState;
    }
  },
  actions: {
    async getAllCompletos({ commit }) {
      // return getDocs(collection(db, 'completos')).then((docs) => docs.map((doc) => doc.data()));
      commit('SET_STATE', 'pending');
      try {
        const completosCollection = collection(db, 'completos');
        const completosSnapshot = await getDocs(completosCollection);
        const completosList = completosSnapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });

        commit('SET_LIST', completosList);
        commit('SET_STATE', 'fulfilled');
      } catch (e) {
        commit('SET_STATE', 'rejected');
      }
    }
  }
};
