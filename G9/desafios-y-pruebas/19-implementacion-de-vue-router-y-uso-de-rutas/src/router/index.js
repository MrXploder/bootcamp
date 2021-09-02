import Vue from "vue";
import VueRouter from "vue-router";

import Inicio from "../views/Inicio.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/inicio",
  },
  {
    path: "/inicio",
    name: "Inicio",
    component: Inicio,
    meta: {
      header: true,
      title: "Chevrolet presenta la totalmente nueva Blazer",
      subTitle: "Llega&nbsp;como la primera SUV deportiva de la marca",
      backgroundImg: "/assets/img/chevrolet-blazer.jpg",
    },
  },
  {
    path: "/contacto",
    name: "Contacto",
    component: () => import("../views/Contacto.vue"),
    meta: {
      header: true,
      title: "Contacto",
      subTitle: "",
      backgroundImg: "assets/img/contact-bg.jpg",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
