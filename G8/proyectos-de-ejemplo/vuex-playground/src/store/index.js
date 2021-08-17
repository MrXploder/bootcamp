import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    nombre: "Milford",
    apellido: "Estay",
    correo: "milford.milford@milford.com",
  },
  getters: {
    nombreCompleto(state) {
      return `${state.nombre} ${state.apellido}`;
    },
  },
  //commit
  mutations: {
    SET_NOMBRE(state, nuevoNombre) {
      console.log(state);
      state.nombre = nuevoNombre;
    },
    SET_APELLIDO(state, nuevoApellido) {
      state.apellido = nuevoApellido;
    },
    SET_CORREO(state, nuevoCorreo) {
      state.correo = nuevoCorreo;
    },
  },
  //dispatch
  actions: {
    async fetchUser({ state, getters, commit, dispatch }) {
      try {
        const response = await fetch(
          "https://run.mocky.io/v3/b7fa4a3d-47e2-45a5-8675-a4d93293b90f"
        );

        const usuario = await response.json();
        console.log(usuario);
        commit("SET_NOMBRE", usuario.nombre);
        commit("SET_APELLIDO", usuario.apellido);
        commit("SET_CORREO", usuario.correo);
      } catch (e) {
        console.error(e);
      }
    },
  },
});
