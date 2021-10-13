import Firebase from "firebase";

export const sessionModule = {
  namespaced: true,
  state: {
    user: null,
  },

  mutations: {
    SET_USER(state, newUser) {
      state.user = newUser;
    },
  },

  actions: {
    subscribeToAuthStateChange(context) {
      Firebase.auth().onAuthStateChanged((user) => {
        context.commit("SET_USER", user || null);
      });
    },
    async signIn(_context, credentials) {
      await Firebase.auth().signInWithEmailAndPassword(
        credentials.email,
        credentials.password
      );
    },
    async signOut() {
      await Firebase.auth().signOut();
    },
  },
};
