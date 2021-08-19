import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    busquedaPorCodigo: "",
    carritoDeCompras: [],
    juegos: [
      {
        codigo: "0001",
        nombre: "Sekiro",
        stock: 100,
        precio: 30000,
        color: "red",
        destacado: true,
      },
      {
        codigo: "0002",
        nombre: "Fifa 21",
        stock: 100,
        precio: 25000,
        color: "blue",
        destacado: false,
      },
      {
        codigo: "0003",
        nombre: "Gears of War 4",
        stock: 100,
        precio: 15000,
        color: "green",
        destacado: true,
      },
      {
        codigo: "0004",
        nombre: "Mario Tennis Aces",
        stock: 100,
        precio: 35000,
        color: "yellow",
        destacado: false,
      },
      {
        codigo: "0005",
        nombre: "Bloodborne",
        stock: 100,
        precio: 10000,
        color: "blue",
        destacado: false,
      },
      {
        codigo: "0006",
        nombre: "Forza Horizon 4",
        stock: 100,
        precio: 20000,
        color: "red",
        destacado: true,
      },
    ],
  },
  getters: {
    productosFiltrados(state) {
      return state.juegos.filter(
        (juego) => juego.codigo === state.busquedaPorCodigo
      );
    },
  },
  mutations: {
    SET_BUSQUEDA(state, value) {
      state.busquedaPorCodigo = value;
    },
    SUBSTRACT_STOCK(state, productIndex) {
      state.juegos[productIndex].stock -= 1;
    },
    ADD_STOCK_TO_SHOPPINGLIST(state, productIndex) {
      state.carritoDeCompras[productIndex].stock += 1;
    },
    ADD_VENTA(state, juego) {
      state.carritoDeCompras.push(juego);
    },
  },
  actions: {
    agregarProductoAlCarritoDeCompras({ state, commit }, { juego, $index }) {
      const productoEnCarritoDeCompras = state.carritoDeCompras.findIndex(
        (productoCarrito) => productoCarrito.codigo === juego.codigo
      );

      if (productoEnCarritoDeCompras !== -1) {
        commit("ADD_STOCK_TO_SHOPPINGLIST", productoEnCarritoDeCompras);
        commit("SUBSTRACT_STOCK", $index);
      } else {
        commit("ADD_VENTA", { ...juego, stock: 1 });
        commit("SUBSTRACT_STOCK", $index);
      }
    },
  },
  async concretarVenta({ state, commit }) {},
  agregarAlgoNuevo({ state }) {
    Vue.set(state, "algoNuevo", "algo");
  },
});

// camelCase            // variables
// UpperCamelCase       // servicio o instancias de clases
// kebab-case           // tag de html
// snake_case
// UPPER_SNAKE_CASE     // constantes

export default store;
