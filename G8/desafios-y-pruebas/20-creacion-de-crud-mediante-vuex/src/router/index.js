import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/home' },
  { path: '*', redirect: '/home' },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/usuarios',
    component: () => import('../views/Usuarios.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
