import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

import Buscador from "@/views/Buscador.vue";
import Peleadores from "@/views/Peleadores.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/buscador",
    name: "Buscador",
    component: Buscador,
  },
  {
    path: "/peleadores",
    name: "Peleadores",
    component: Peleadores,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
