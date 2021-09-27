import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: () => import('../views/Inicio.vue')
  },
  {
    path: '/nuevo-producto',
    name: 'NuevoProducto',
    component: () => import('../views/NuevoProducto.vue')
  },
  {
    path: '/carrito',
    name: 'CarritoDeCompras',
    component: () => import('../views/Carrito.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
