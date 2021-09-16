import Firebase from 'firebase'

export const session = {
  namespaced: true,
  state: {
    user: null,
    additionalUserInfo: null
  },
  getters: {},
  mutations: {
    SET_USER(state, newUser) {
      state.user = newUser
    },
    SET_ADDITIONAL_USER_INFO(state, newData) {
      state.additionalUserInfo = newData
    }
  },
  actions: {
    login(context, credentials) {
      return new Promise((resolve, reject) => {
        Firebase.auth()
          .signInWithEmailAndPassword(credentials.email, credentials.password)
          .then((data) => {
            context.commit('SET_USER', data.user)
            context.commit('SET_ADDITIONAL_USER_INFO', data.additionalUserInfo)
            resolve()
          }, reject)
      })
    },
    createUser(context, credentials) {
      return new Promise((resolve, reject) => {
        Firebase.auth()
          .createUserWithEmailAndPassword(credentials.email, credentials.password)
          .then((data) => {
            context.commit('SET_USER', data.user)
            context.commit('SET_ADDITIONAL_USER_INFO', data.additionalUserInfo)
            resolve()
          }, reject)
      })
    }
  }
}
