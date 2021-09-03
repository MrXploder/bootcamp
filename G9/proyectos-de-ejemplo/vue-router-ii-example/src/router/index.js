import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/pacientes',
    name: 'Pacientes',
    component: () => import('../views/Pacientes.vue'),
  },
  {
    path: '/pacientes/:nombre',
    name: 'DetallePaciente',
    props: true,
    component: () => import('../views/DetallePaciente.vue'),
  },
  // {
  //   path: '/configuracion/usuarios',
  //   component: () => import('../views/ConfiguracionUsuarios.vue'),
  // },
  // {
  //   path: '/configuracion/materiales',
  //   component: () => import('../views/ConfiguracionMateriales.vue'),
  // },
  {
    path: '/configuracion',
    component: () => import('../views/ConfiguracionBase.vue'),
    children: [
      {
        path: 'usuarios',
        component: () => import('../views/ConfiguracionUsuarios.vue'),
      },
      {
        path: 'materiales',
        component: () => import('../views/ConfiguracionMateriales.vue'),
      },
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
