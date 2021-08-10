import Vue from 'vue'
import VueRouter from 'vue-router'

import Hello from '../components/Hello'
import World from '../components/World'
import User from '../components/User'
import UserChild from '../components/UserChild'

Vue.use(VueRouter)

// eslint-disable-next-line no-new
const router = new VueRouter({
  routes: [
    {
      path: '',
      redirect: '/hello'
    },
    {
      path: '*',
      redirect: '/hello'
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/world',
      name: 'World',
      components: {
        'letra-m': World,
        'resto-de-letras': World
      }
    },
    {
      path: '/usuarios/:nombre',
      component: User,
      children: [
        {
          path: '/',
          component: UserChild
        }
      ]
    }
  ]
})

export default router
