import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    busqueda: "",
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
    ventas: [],
  },
  getters: {
    juegosConStock(state) {
      return state.juegos.filter((juego) => juego.stock > 0);
    },
    stockTotal(state) {
      return state.juegos.reduce((accumulator, juego) => {
        accumulator = accumulator + juego.stock;

        return accumulator;
      }, 0);
    },
    juegosSegunBusqueda(state) {
      // state.busqueda
      if (state.busqueda === "") {
        return [];
      } else {
        return state.juegos.filter((juego) =>
          juego.codigo.toLowerCase().includes(state.busqueda.toLowerCase())
        );
      }
    },
  },
  mutations: {
    SET_BUSQUEDA(state, nuevaBusqueda) {
      state.busqueda = nuevaBusqueda;
    },
    RESTAR_STOCK(state, indice) {
      state.juegos[indice].stock--;
    },
    ADD_PRODUCT(state, newProduct) {
      state.ventas.push(newProduct);
    },
  },
  actions: {
    setBusqueda(context, nuevaBusqueda) {
      if (typeof nuevaBusqueda === "string") {
        context.commit("SET_BUSQUEDA", nuevaBusqueda);
      } else {
        console.warn(
          `nuevaBusqueda debiese de ser de tipo string y recibí un tipo ${typeof nuevaBusqueda}`
        );
      }
    },
    procesarVenta(context, juegoABuscar) {
      const indice = context.state.juegos.findIndex(
        (juego) => juego.codigo === juegoABuscar.codigo
      );

      return new Promise((resolve) => {
        setTimeout(() => {
          context.commit("RESTAR_STOCK", indice);
          resolve();
        }, 2000);
      });
    },
    registrarVenta(context, juego) {
      return new Promise((resolve) => {
        setTimeout(() => {
          context.commit("ADD_PRODUCT", {
            codigo: juego.codigo,
            nombre: juego.nombre,
            precio: juego.precio,
          });
          resolve();
        }, 1000);
      });
    },
  },
});

export default store;
