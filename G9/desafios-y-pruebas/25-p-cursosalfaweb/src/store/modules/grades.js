import Firebase from "firebase";

export const gradesModule = {
  namespaced: true,
  state: {
    data: [],
  },
  mutations: {
    SET_GRADES_DATA(state, newGradesData) {
      state.data = newGradesData;
    },
  },
  actions: {
    /**
     * Traerme todos los cursos de Firestore
     */
    getAllGrades(context) {
      Firebase.firestore()
        .collection("cursos")
        .get()
        .then((documents) => {
          const grades = [];
          documents.forEach((document) => {
            grades.push({ id: document.id, ...document.data() });
          });
          context.commit("SET_GRADES_DATA", grades);
        });
    },
  },
};
