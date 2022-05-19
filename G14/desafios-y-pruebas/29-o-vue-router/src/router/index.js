import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home.vue'
import Products from '@/views/Products.vue'
import ProductDetails from '@/views/ProductDetails.vue'
import Hiring from '@/views/Hiring.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '*',
    redirect: '/',
  },
  {
    path: '/productos',
    name: 'Products',
    component: Products,
  },
  {
    path: '/productos/:pizzaId',
    component: ProductDetails,
  },
  {
    path: '/reclutamiento',
    name: 'Hiring',
    component: Hiring,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
