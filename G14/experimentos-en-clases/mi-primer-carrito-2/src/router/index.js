import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';

import Panes from '@/views/PanesView.vue';
import Ingredientes from '@/views/IngredientesView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/panes',
    name: 'Panes',
    component: Panes,
  },
  {
    path: '/ingredientes',
    name: 'Ingredientes',
    component: Ingredientes,
  },
  {
    path: "/carrito",
    name: "Carrito",
    component: () => import("@/views/CarritoView.vue")
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
