import Vue from 'vue'
import VueRouter from 'vue-router'
import { beforeEach } from './hooks/beforeEach'

import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      accessLevel: 'user'
    }
  },
  {
    path: '/hotdogs',
    name: 'hotdogs',
    component: () => import('@/views/Hotdogs.vue'),
    meta: {
      accessLevel: 'admin'
    }
  },
  {
    path: '/hotdogs/:id',
    name: 'hotdogDetails',
    component: () => import('@/views/HotdogDetails.vue'),
    meta: {
      accessLevel: 'admin'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(beforeEach)

export default router
