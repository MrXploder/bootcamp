import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import ListaTareas from "@/components/ListaTareas.vue";

const localVue = createLocalVue();
localVue.use(Vuex);
const store = new Vuex.Store({
  state: {
    tareas: ["salir a caminar"],
  },
});

describe("Behaviour of ListaTareas.vue", () => {
  it("should render ul>li list with VuexStore data", () => {
    const wrapper = shallowMount(ListaTareas, {
      localVue,
      store,
    });

    expect(wrapper.text()).toMatch("salir a caminar");
  });
});

// import { expect } from "chai";
// import { mount, createLocalVue } from "@vue/test-utils";
// import Navbar from "@/components/Navbar";
// import Vuex from "vuex";
// const storeMock = {
//   state: {
//     currentUser: undefined,
//   },
//   mutations: {
//     UPDATE_CURR_USER(state, user) {
//       state.currentUser = user;
//     },
//   },
//   actions: {
//     updateUser({ commit }, user) {
//       commit("UPDATE_CURR_USER", user);
//     },
//   },
//   getters: {
//     isLoggedIn: (state) => !!state.currentUser,
//     currentUser: (state) => state.currentUser,
//   },
// };
// const localVue = createLocalVue();
// localVue.use(Vuex);
// const store = new Vuex.Store(storeMock);
// describe("Navbar.vue", () => {
//   it("Muestra menu de usuario si hay usuario logeado", () => {
//     const wrapper = mount(Navbar, {
//       localVue,
//       store,
//     });
//     store.dispatch("updateUser", { name: "Usuario" });
//     expect(wrapper.text()).to.include("Usuario");
//   });
// });
