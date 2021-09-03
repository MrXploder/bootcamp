import Vue from "vue";
import Router from "vue-router";
import Inicio from "./components/Inicio";
import SobreMi from "./components/SobreMi";
import Contacto from "./components/Contacto";
import Post from "./components/Post";
import Articulo from "./components/Articulo";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "inicio",
      component: Inicio,
      alias: ["/inicio", "/home", "/portada"],
    },
    {
      path: "/acerca",
      redirect: "/sobremi",
    },
    {
      path: "/sobremi",
      name: "sobremi",
      component: SobreMi,
    },
    {
      path: "/contacto",
      name: "contacto",
      component: Contacto,
    },
    {
      path: "/post",
      name: "post",
      component: Post,
      children: [
        {
          path: ":articulo",
          component: Articulo,
        },
      ],
    },
    {
      path: "*",
      component: () =>
        import(/* webpackChunkName: "NotFound" */ "./components/NotFound.vue"),
    },
  ],
});
