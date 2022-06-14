// import Firebase from "firebase";
import Firebase from 'firebase';

export const funcionariosModule = {
  namespaced: true,
  state: {
    list: []
  },
  mutations: {
    SET_LIST(state, newList) {
      state.list = newList;
    }
  },
  actions: {
    async getAll(context) {
      const coleccionFuncionarios = await Firebase.firestore().collection('funcionarios').get();
      const funcionarios = [];
      coleccionFuncionarios.forEach((document) => {
        funcionarios.push({ ...document.data(), id: document.id });
      });
      console.log(funcionarios);
      context.commit('SET_LIST', funcionarios);
    }
  }
};
