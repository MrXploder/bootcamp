import Vue from "vue";
import VueRouter from "vue-router";

import NotFound from "../views/NotFound.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "*",
      component: NotFound,
    },
  ],
});

export default router;
