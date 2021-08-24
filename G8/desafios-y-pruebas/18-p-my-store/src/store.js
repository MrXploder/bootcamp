import Vue from "vue";
import Vuex from "vuex";
import { Products } from "./services/API/";

Vue.use(Vuex);

function setInStorage(key, obj) {
  localStorage.setItem(key, JSON.stringify(obj));
}

function getFromStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

function getCartTotal(productsList) {
  let price = 0.0;
  productsList.forEach((p) => {
    price += p.price * p.qty;
  });
  return price;
}

function newCart() {
  return {
    list: [],
    total: 0.0,
  };
}

export default new Vuex.Store({
  state: {
    // User
    currentUser: getFromStorage("user") || undefined,
    // Cart
    shoppingCart: getFromStorage("cart") || newCart(),
    showCart: false,
    productList: [
      { name: "Casa", id: "0", price: 100.0 },
      { name: "Bote", id: "1", price: 100.0 },
      { name: "Avión", id: "2", price: 100.0 },
      { name: "Motocicleta", id: "3", price: 100.0 },
      { name: "Computadora", id: "4", price: 100.0 },
      { name: "Silla", id: "5", price: 100.0 },
      { name: "Espejo", id: "6", price: 100.0 },
      { name: "Mesa", id: "7", price: 100.0 },
      { name: "Café", id: "8", price: 100.0 },
      { name: "Bicicleta", id: "9", price: 100.0 },
      { name: "Gato", id: "10", price: 100.0 },
      { name: "Parlante", id: "11", price: 100.0 },
      { name: "Plancha", id: "12", price: 100.0 },
      { name: "Libro", id: "13", price: 100.0 },
    ],
  },
  mutations: {
    // User
    UPDATE_CURR_USER(state, user) {
      state.currentUser = user;
      setInStorage("user", user);
    },
    // Cart
    ADD_TO_CART(state, product) {
      // add def qty if not defined
      if (product.qty === undefined) {
        product["qty"] = 1;
      }
      // increase qty if exists, else add to cart as new
      let pidx = state.shoppingCart.list.map((p) => p.id).indexOf(product.id);
      if (pidx >= 0) {
        state.shoppingCart.list[pidx].qty++;
      } else {
        state.shoppingCart.list.push(product);
      }
      // update total price
      state.shoppingCart.total = getCartTotal(state.shoppingCart.list);
      // update in storage
      setInStorage("cart", state.shoppingCart);
    },
    REMOVE_FROM_CART(state, product_id) {
      let pidx = state.shoppingCart.list.map((p) => p.id).indexOf(product_id);
      if (pidx >= 0) {
        state.shoppingCart.list.splice(pidx, 1);
        // update total price
        state.shoppingCart.total = getCartTotal(state.shoppingCart.list);
        // update in storage
        setInStorage("cart", state.shoppingCart);
      } else {
        throw new Error("Product not found in cart");
      }
    },
    CLEAR_CART(state) {
      state.shoppingCart = newCart();
      // update in storage
      setInStorage("cart", state.shoppingCart);
    },
    UPDATE_SHOW_CART(state, value) {
      state.showCart = value;
    },
  },
  actions: {
    // User
    updateUser({ commit }, user) {
      return new Promise((resolve, reject) => {
        try {
          commit("UPDATE_CURR_USER", user);
          resolve(user);
        } catch (e) {
          reject(e);
        }
      });
    },
    addToCart({ commit }, product) {
      return new Promise((resolve, reject) => {
        try {
          commit("ADD_TO_CART", product);
          resolve(true);
        } catch (e) {
          reject(e);
        }
      });
    },
    removeFromCart({ commit }, product_id) {
      return new Promise((resolve, reject) => {
        try {
          commit("REMOVE_FROM_CART", product_id);
          resolve(true);
        } catch (e) {
          reject(e);
        }
      });
    },
    clearCart({ commit }) {
      return new Promise((resolve, reject) => {
        try {
          commit("CLEAR_CART");
          resolve(true);
        } catch (e) {
          reject(e);
        }
      });
    },
    updateShowCart({ commit }, val) {
      console.log("setting showCart to ", val);
      return new Promise((resolve, reject) => {
        try {
          commit("UPDATE_SHOW_CART", !!val); // !! double-negation for Boolen casting
          resolve(true);
        } catch (e) {
          reject(e);
        }
      });
    },
  },
  getters: {
    // User
    isLoggedIn: (state) => !!state.currentUser,
    currentUser: (state) => state.currentUser,
    // Cart
    shoppingCart: (state) => state.shoppingCart,
    showCart: (state) => state.showCart,
  },
});
