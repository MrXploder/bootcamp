import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';

import Store from "@/store/"

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      accessLevel: "public"
    }
  },
  {
    path: '/users',
    name: 'Users',
    component: () => import('@/views/UsersView.vue'),
    meta: {
      accessLevel: "private"
    }
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});



router.beforeEach((to, from, next) => {
  const accessLevel = to.meta.accessLevel
  const activeLogin = Store.getters["session/activeLogin"]

  if (accessLevel === "public") {
    next()
  } else if (accessLevel === "private") {
    if (activeLogin) {
      next()
    } else {
      next("/")
    }
  }
})

export default router;
