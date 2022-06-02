export const tareasModule = {
  namespaced: true,
  state: {
    tareas: [],
  },
  mutations: {
    ADD_TAREA(state, tarea) {
      state.tareas.push(tarea);
    },
  },
  actions: {
    agregarTarea(context, tarea) {
      context.commit('ADD_TAREA', tarea);
    },
  },
  getters: {
    tareasHogar(state) {
      return state.tareas.filter((tarea) => tarea.categoria === 'hogar');
    },
    tareasExternas(state) {
      return state.tareas.filter((tarea) => tarea.categoria === 'externas');
    },
  },
};
