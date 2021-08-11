import Vue from "vue";
import VueRouter from "vue-router";

import NotFound from "../views/NotFound.vue";
import Inicio from "../views/Inicio.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/notfound",
      component: NotFound,
    },
    {
      path: "*",
      redirect: "/notfound",
    },
    {
      path: "",
      redirect: "/inicio",
    },
    {
      path: "/inicio",
      component: Inicio,
    },
    {
      path: "/contacto",
      component: () =>
        import(
          /* webpackChunkName: "Contacto" */
          "../views/Contacto.vue"
        ),
    },
    {
      path: "/post",
      name: "Post",
      component: () => import("../views/Post.vue"),
      children: [
        {
          path: "/:id",
          component: () => import("../views/Articulo.vue"),
        },
      ],
    },
  ],
});

export default router;
