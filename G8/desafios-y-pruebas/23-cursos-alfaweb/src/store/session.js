import Firebase from 'firebase'

export const session = {
  namespaced: true,
  state: {},
  getters: {
    currentUser() {
      try {
        return Firebase.auth().currentUser
      } catch (e) {
        return null
      }
    }
  }
}
