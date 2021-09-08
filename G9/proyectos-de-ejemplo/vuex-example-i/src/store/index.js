import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const delay = (ms) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });

export default new Vuex.Store({
  /**
   * * Esto es como el data
   */
  state: {
    tareas: [
      { texto: "pagar el yutu", precio: 100 },
      { texto: "ir a comprar pan", precio: 300 },
    ],
  },

  /**
   * * Esto es como los methods
   */
  mutations: {
    AGREGAR_TAREA(state, nuevaTarea) {
      state.tareas.push(nuevaTarea);
    },
  },
  actions: {
    async agregarTarea(context, nuevaTarea) {
      await delay(1000);
      if (
        typeof nuevaTarea === "object" &&
        Object.keys(nuevaTarea).length > 0
      ) {
        context.commit("AGREGAR_TAREA", nuevaTarea);
      } else {
        console.warn("La nueva tarea no puede estar vacia");
      }
    },
  },

  /**
   * * Esto es como el computed
   */
  getters: {
    productosTerribleCaros(state) {
      return state.tareas.filter((tarea) => tarea.precio > 300);
    },
    productosTerribleBaratos(state) {
      return state.tareas.filter((tarea) => tarea.precio <= 300);
    },
  },
});
