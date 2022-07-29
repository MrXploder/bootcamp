import Vue from "vue";
import VueRouter from "vue-router";

import HomeView from "@/views/HomeView.vue";
import Personas from "@/views/Personas.vue";
import Clientes from "@/views/Clientes.vue";
import Productos from "@/views/Productos.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
    meta: {
      requireSession: false,
    },
  },
  {
    path: "/clients",
    name: "Clientes",
    component: Clientes,
    meta: {
      requireSession: true,
    },
  },
  {
    path: "/personas",
    name: "Personas",
    component: Personas,
    meta: {
      requireSession: true,
    },
  },
  {
    path: "/productos/:idProducto?",
    name: "Productos",
    component: Productos,
    meta: {
      requireSession: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  // esta variable simula un usuario logeado
  const user = true;

  if ((to.meta.requireSession && user) || !to.meta.requireSession) {
    next();
  } else if (to.meta.requireSession && !user) {
    next("/");
  }
});

export default router;
