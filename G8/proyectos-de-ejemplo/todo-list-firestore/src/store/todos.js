import Firebase from "firebase";

export const todosModule = {
  namespaced: true,
  state: {
    data: [],
    status: "idle",
  },
  mutations: {
    SET_DATA(state, newData) {
      state.data = newData;
    },
    SET_STATUS(state, newStatus) {
      state.status = newStatus;
    },
  },
  actions: {
    getTodos(context) {
      context.commit("SET_STATUS", "fetching");
      Firebase.firestore()
        .collection("todos")
        .get()
        .then((collection) => {
          const data = [];
          collection.forEach((document) =>
            data.push({ id: document.id, ...document.data() })
          );

          context.commit("SET_DATA", data);
          context.commit("SET_STATUS", "fulfilled");
        })
        .catch(() => {
          context.commit("SET_STATUS", "error");
        });
    },
    createTodo(context, newTodo) {
      return Firebase.firestore()
        .collection("todos")
        .add(newTodo);
    },
    updateTodo(context, currentTodo) {
      return Firebase.firestore()
        .collection("todos")
        .doc(currentTodo.id)
        .update(currentTodo);
    },
    removeTodo(context, currentTodo) {
      return Firebase.firestore()
        .collection("todos")
        .doc(currentTodo.id)
        .delete();
    },
  },
};
