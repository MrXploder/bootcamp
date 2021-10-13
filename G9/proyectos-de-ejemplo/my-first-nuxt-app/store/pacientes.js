export const state = () => ({
  data: []
});

export const mutations = {
  AGREGAR_PACIENTE(state, nuevoPaciente) {
    state.data.push(nuevoPaciente);
  }
};

export const actions = {
  agregarPaciente(context, paciente) {
    context.commit("AGREGAR_PACIENTE", paciente);
  }
};
