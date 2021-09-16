import Vue from 'vue'
import VueRouter from 'vue-router'
import Store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  { path: '*', redirect: '/login' },
  {
    name: 'Login',
    path: '/login',
    component: () => import('@/views/Login.vue')
  },
  {
    name: 'SignIn',
    path: '/sign-in',
    component: () => import('@/views/SignIn.vue')
  },
  {
    name: 'Home',
    path: '/home',
    component: () => import('../views/Home.vue'),
    meta: {
      /**
       * login significa que para acceder a este componente debe estar logeado
       */
      login: true
    }
  },
  {
    name: 'Administracion',
    path: '/admin',
    component: () => import('../views/Administracion.vue'),
    meta: {
      login: true
    }
  },
  {
    name: 'DetalleCurso',
    path: '/curso/:id',
    component: () => import('../views/DetalleCurso.vue'),
    meta: {
      login: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  console.log('funcion que se ejecuta en cada cambio de ruta')
  if (to.meta.login) {
    const user = Store.state.session.user
    if (user) {
      next()
    } else {
      next('login')
    }
  } else {
    next()
  }
})

export default router
