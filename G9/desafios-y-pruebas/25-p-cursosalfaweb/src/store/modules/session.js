import Firebase from "firebase";
import Router from "../../router";

export const sessionModule = {
  namespaced: true,
  state: {
    user: null,
  },

  getters: {
    isAdmin(state) {
      return state.user.rol === "admin";
    },
    isUser(state) {
      return state.user.rol === "user";
    },
  },

  mutations: {
    SET_USER(state, newUser) {
      state.user = newUser;
    },
  },

  actions: {
    subscribeToAuthStateChange(context) {
      Firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          Firebase.firestore()
            .collection("usuarios")
            .get()
            .then((documents) => {
              const newUser = {
                email: user.email,
                rol: "user",
                name: "",
                lastName: "",
              };
              documents.forEach((document) => {
                const data = document.data();
                if (data.email === user.email) {
                  newUser.rol = data.rol;
                  newUser.id = document.id;
                  newUser.name = data.name;
                  newUser.lastName = data.lastName;
                }
              });
              context.commit("SET_USER", { ...newUser });
              Router.push({ name: "Home" });
            });
        } else {
          context.commit("SET_USER", null);
        }
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
