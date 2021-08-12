import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    redirect: "/home",
  },
  {
    path: "*",
    redirect: "/notfound",
  },
  {
    path: "/home",
    name: "Home",
    alias: ["/casa", "/casita", "/tablero", "/dashboard"],
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/clientes/:idcliente",
    name: "DetalleCliente",
    component: () => import("../views/ClientDetails.vue"),
    props: true,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
