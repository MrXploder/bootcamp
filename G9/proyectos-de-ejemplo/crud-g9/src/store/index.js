import Vue from "vue";
import Vuex from "vuex";
import Firebase from "firebase";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pacientes: [],
  },
  mutations: {
    SET_PACIENTES(state, nuevosPacientes) {
      state.pacientes = nuevosPacientes;
    },
  },
  actions: {
    traerTodosLosPacientes(context) {
      Firebase.firestore()
        .collection("pacientes")
        .get()
        .then((collection) => {
          const pacientes = [];

          collection.forEach((document) => {
            pacientes.push({ id: document.id, ...document.data() });
          });

          context.commit("SET_PACIENTES", pacientes);
        });
    },
  },
  modules: {},
});
