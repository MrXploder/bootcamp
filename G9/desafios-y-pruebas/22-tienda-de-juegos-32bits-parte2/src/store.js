import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const delay = (ms) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

const store = new Vuex.Store({
  state: {
    busqueda: "",
    juegos: [
      {
        codigo: "0001",
        nombre: "Sekiro",
        stock: 1,
        precio: 30000,
        color: "red",
        destacado: true,
      },
      {
        codigo: "0002",
        nombre: "Fifa 21",
        stock: 0,
        precio: 25000,
        color: "blue",
        destacado: false,
      },
      {
        codigo: "0003",
        nombre: "Gears of War 4",
        stock: 5,
        precio: 15000,
        color: "green",
        destacado: true,
      },
      {
        codigo: "0004",
        nombre: "Mario Tennis Aces",
        stock: 5,
        precio: 35000,
        color: "yellow",
        destacado: false,
      },
      {
        codigo: "0005",
        nombre: "Bloodborne",
        stock: 5,
        precio: 10000,
        color: "blue",
        destacado: false,
      },
      {
        codigo: "0006",
        nombre: "Forza Horizon 4",
        stock: 5,
        precio: 20000,
        color: "red",
        destacado: true,
      },
    ],
    ventas: [],
  },
  getters: {
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
          juego.nombre.toLowerCase().includes(state.busqueda.toLowerCase())
        );
      }
    },
    juegosConStock(state) {
      return state.juegos.filter((juego) => juego.stock > 0);
    },
    totalJuegosConStock(state) {
      return state.juegos.filter((juego) => juego.stock > 0).length;
    },
    montoTotalDeVentas(state) {
      return state.ventas.reduce((accumulator, venta) => {
        accumulator += venta.precio;
        return accumulator;
      }, 0);
    },
  },
  mutations: {
    SET_BUSQUEDA(state, nuevaBusqueda) {
      state.busqueda = nuevaBusqueda;
    },
    RESTAR_STOCK(state, indiceJuego) {
      state.juegos[indiceJuego].stock -= 1;
    },
    AGREGAR_STOCK(state, indiceJuego) {
      state.juegos[indiceJuego].stock += 1;
    },
    AGREGAR_VENTA(state, venta) {
      state.ventas.push(venta);
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
    async venderJuego(context, juego) {
      await context.dispatch("procesarLaVenta", juego);
      await context.dispatch("registrarLaVenta", juego);
    },
    async procesarLaVenta(context, juegoAVender) {
      await delay(2000);
      const indiceJuego = context.state.juegos.findIndex(
        (juego) => juego.codigo === juegoAVender.codigo
      );
      if (context.state.juegos[indiceJuego].stock > 0) {
        context.commit("RESTAR_STOCK", indiceJuego);
      }
    },
    async registrarLaVenta(context, juego) {
      await delay(1000);
      // eslint-disable-next-line no-unused-vars
      const { stock, ...datosJuego } = juego;
      context.commit("AGREGAR_VENTA", datosJuego);
    },
  },
});

export default store;
