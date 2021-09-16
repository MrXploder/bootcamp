import Firebase from 'firebase'
import { firebaseConfig } from '../../firebase-config'

export const system = {
  namespaced: true,
  state: {
    drawer: false,
    firebase: null
  },
  mutations: {
    SET_DRAWER(state, value) {
      state.drawer = value
    },
    SET_FIREBASE(state, data) {
      state.firebase = data
    }
  },
  actions: {
    toggleDrawer(context) {
      context.commit('SET_DRAWER', !context.state.drawer)
    },
    initializeFirebase(context) {
      const firebaseApp = Firebase.initializeApp(firebaseConfig)
      context.commit('SET_FIREBASE', firebaseApp)
    }
  }
}
