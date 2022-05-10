import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/hotdogs',
    name: 'hotdogs',
    component: () => import('@/views/Hotdogs.vue')
  },
  {
    path: '/hotdogs/:id',
    name: 'hotdogDetails',
    component: () => import('@/views/HotdogDetails.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
