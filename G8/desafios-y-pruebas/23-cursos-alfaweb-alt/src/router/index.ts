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
    component: () => import('@/views/SignIn.vue'),
    meta: {
      layout: 'simple'
    }
  },
  {
    name: 'SignUp',
    path: '/sign-up',
    component: () => import('@/views/SignUp.vue'),
    meta: {
      layout: 'simple'
    }
  },
  {
    name: 'Home',
    path: '/home',
    component: () => import('@/views/Home.vue'),
    meta: {
      private: true,
      title: 'Hola!'
    }
  },
  {
    name: 'Grades',
    path: '/grades',
    component: () => import('@/views/Grades.vue'),
    meta: {
      private: true,
      title: 'Listado de Cursos'
    }
  },
  {
    name: 'Grade',
    path: '/grade/:gradeId',
    component: () => import('@/views/GradeDetails.vue'),
    meta: {
      private: true,
      title: 'Detalle de Cursos'
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
