export const actions = {
  nuxtServerInit(context) {
    context.dispatch(
      "pacientes/agregarPaciente",
      { nombre: "Jaime", apellido: "Lizama" },
      { root: true }
    );
  }
};
