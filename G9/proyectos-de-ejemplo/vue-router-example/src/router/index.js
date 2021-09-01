import Vue from 'vue'
import VueRouter from 'vue-router'

import Jam from '../views/Jam.vue'

Vue.use(VueRouter)

/////////////////////////

const routes = [
  /**
   * rutas comodines
   */
  {
    path: '/',
    redirect: '/jam'
  },
  {
    path: '*',
    redirect: '/jam'
  },
  //////////////////
  /**
   * rutas estaticas
   */
  {
    path: '/jam',
    component: Jam,
    name: 'PaginaJamPrincipal'
  },
  {
    path: '/juniorjam',
    name: 'PaginaAlternativaJuniorJam',
    component: () => import(/* webpackChunkName: 'juniorjam'  */ '../views/JuniorJam.vue')
  },
  ///////////////
  /**
   * rutas dinamicas
   */
  {
    path: '/pizzas/:tipo',
    component: () => import('../views/PizzaType.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
