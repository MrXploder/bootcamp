import { collection, getDocs } from 'firebase/firestore/lite';
import { db } from '@/services/firestore';

export const completosModule = {
  namespaced: true,
  state: {
    list: []
  },
  mutations: {
    SET_COMPLETOS(state, newCompletos) {
      state.completos = newCompletos;
    }
  },
  actions: {
    async getAllCompletos({ state }) {
      // return getDocs(collection(db, 'completos')).then((docs) => docs.map((doc) => doc.data()));
      const completosCollection = collection(db, 'completos');
      const completosSnapshot = await getDocs(completosCollection);
      const completosList = completosSnapshot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      state.list = completosList;
    }
  }
};
