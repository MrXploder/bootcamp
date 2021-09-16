import Vue from 'vue'
import VueRouter from 'vue-router'

import { sessionModule } from '@/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/home'
  },
  {
    path: '/',
    redirect: '/home'
  },
  {
    name: 'SignIn',
    path: '/sign-in',
    component: () => import('@/views/SignIn.vue')
  },
  {
    name: 'SignUp',
    path: '/sign-up',
    component: () => import('@/views/SignUp.vue')
  },
  {
    name: 'Home',
    path: '/home',
    component: () => import('@/views/Home.vue'),
    meta: {
      private: true
    }
  },
  {
    name: 'Grades',
    path: '/grades',
    component: () => import('@/views/Grades.vue'),
    meta: {
      private: true
    }
  },
  {
    name: 'Grade',
    path: '/grade/:gradeId',
    component: () => import('@/views/GradeDetails.vue'),
    meta: {
      private: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta?.private) {
    if (sessionModule.user) {
      next()
    } else {
      next('/sign-in')
    }
  } else {
    next()
  }
})

export default router
