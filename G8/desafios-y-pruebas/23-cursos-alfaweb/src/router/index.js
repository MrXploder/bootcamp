import Vue from 'vue'
import VueRouter from 'vue-router'
import Firebase from 'firebase'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  { path: '*', redirect: '/login' },
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
    name: 'Login',
    path: '/login',
    component: () => import('@/views/Login.vue')
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
    const user = Firebase.auth().currentUser
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
