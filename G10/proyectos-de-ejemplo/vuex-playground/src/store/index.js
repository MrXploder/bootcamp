import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: 'Luis',
    lastName: 'Arancibia',
    age: 30,
    career: 'Fronen',
  },
  getters: {
    fullName(state) {
      return `${state.name} ${state.lastName}`
    },
    isFronen(state) {
      return state.career === 'Fronen'
    },
  },
  mutations: {
    SET_NAME(state, newName) {
      state.name = newName
    },
    SET_LAST_NAME(state, newLastName) {
      state.lastName = newLastName
    },
  },
  actions: {
    changeFullName(context, newFullName) {
      if (typeof newFullName !== 'string') {
        console.warn(`Oye yapo calmate... intentaste mandarme un ${typeof newFullName} en vez de un string`)
        return
      }
      const [newName, newLastName] = newFullName.split(' ')
      context.commit('SET_NAME', newName)
      context.commit('SET_LAST_NAME', newLastName)
    },
  },
})
