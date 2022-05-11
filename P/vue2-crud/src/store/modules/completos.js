import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc
} from 'firebase/firestore/lite'
import { db } from '@/services/firestore'

export const completosModule = {
  namespaced: true,
  state: {
    list: [],
    details: null,
    state: 'idle'
  },
  mutations: {
    SET_LIST(state, newCompletos) {
      state.list = newCompletos
    },
    SET_STATE(state, newState) {
      state.state = newState
    },
    SET_DETAILS(state, newDetails) {
      state.details = newDetails
    }
  },
  actions: {
    async getAll({ commit }) {
      commit('SET_STATE', 'pending')
      try {
        const completosCollection = collection(db, 'completos')
        const completosSnapshot = await getDocs(completosCollection)
        const completosList = completosSnapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id }
        })

        commit('SET_LIST', completosList)
        commit('SET_STATE', 'fulfilled')
      } catch (e) {
        commit('SET_STATE', 'rejected')
      }
    },
    async getOneById({ commit, state }, id) {
      if (state.details?.id !== id) {
        commit('SET_DETAILS', null)
      }
      try {
        const completoReference = doc(db, 'completos', id)
        const completoDocument = await getDoc(completoReference)
        commit('SET_DETAILS', {
          ...completoDocument.data(),
          id: completoDocument.id
        })
      } catch (e) {
        console.error(e)
      }
    },
    async removeOneById({ commit }, id) {
      try {
        const hotdogReference = doc(db, 'completos', id)
        await deleteDoc(hotdogReference)
        commit('SET_DETAILS', null)
      } catch (e) {
        console.error(e)
      }
    },
    async createOne(_, newHotdogName) {
      try {
        const hotdogsReference = collection(db, 'completos')
        await addDoc(hotdogsReference, { name: newHotdogName })
      } catch (e) {
        console.error(e)
      }
    },
    async updateOneById(_, { id, ...hotdog }) {
      try {
        const hotdogReference = doc(db, 'completos', id)
        await updateDoc(hotdogReference, hotdog)
      } catch (e) {
        console.error(e)
      }
    }
  }
}
