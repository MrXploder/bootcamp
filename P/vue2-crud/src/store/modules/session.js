import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore/lite'
import { db, auth } from '@/services/firestore'

export const sessionModule = {
  namespaced: true,
  state: {
    user: null
  },

  getters: {
    isAdmin(state) {
      return state.user?.rol === 'admin'
    },
    isUser(state) {
      return state.user?.rol === 'user'
    }
  },

  mutations: {
    SET_USER(state, newUser) {
      state.user = newUser
    }
  },

  actions: {
    subscribeToAuthStateChange({ commit, state }) {
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          const rolesReference = doc(db, 'roles', user.email)
          const rolesDocument = await getDoc(rolesReference)
          commit('SET_USER', {
            ...user,
            ...(rolesDocument.exists() ? rolesDocument.data() : { rol: 'user' })
          })
          console.log({ user: state.user })
        } else {
          commit('SET_USER', null)
        }
      })
    },
    async signIn(_context, credentials) {
      await signInWithEmailAndPassword(
        auth,
        credentials.email,
        credentials.password
      )
    },
    async signOut() {
      await signOut(auth)
    }
  }
}
