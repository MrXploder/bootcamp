import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  {
    path: '/tareas-hogar',
    name: 'TareasHogar',
    component: () => import('@/views/TareasHogar.vue'),
  },
  {
    path: '/tareas-externas',
    name: 'TareasExternas',
    component: () => import('@/views/TareasExternas.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
