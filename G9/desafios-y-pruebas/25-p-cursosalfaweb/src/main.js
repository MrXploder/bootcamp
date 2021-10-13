import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

import "./plugins/firebase";
import "./plugins/vue-gravatar";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");

setTimeout(() => {
  document.getElementById("loading")?.classList.add("mounted");
  document.getElementsByTagName("html")[0].style.overflowY = "auto";
}, 5000);
