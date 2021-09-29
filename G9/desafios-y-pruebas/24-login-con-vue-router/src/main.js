import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import Firebase from "firebase";
import { firebaseConfig } from "../firebase-config";

Firebase.initializeApp(firebaseConfig);

import "./plugins/bootstrap-vue";

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
