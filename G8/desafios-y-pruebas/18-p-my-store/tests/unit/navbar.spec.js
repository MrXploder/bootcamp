import { expect } from 'chai'
import { mount, createLocalVue } from '@vue/test-utils'

import Navbar from '@/components/Navbar.vue'
import Vuex from "vuex"
import myStore from './mocks/store'

import VueRouter from 'vue-router'
import myRoutes from "./mocks/routes"

const localVue = createLocalVue()

localVue.use(Vuex)
localVue.use(VueRouter)

const store = new Vuex.Store(myStore)
const router = new VueRouter(myRoutes)

describe('Navbar.vue', () => {
  it('muestra menu de login si no hay usuario', () => {
    store.dispatch('updateUser', undefined)
    const wrapper = mount(Navbar, {
      propsData: {
        title: "Mi Tienda"
      },
      localVue,
      store,
      router,
    })
    expect(wrapper.text()).to.include('Login')
  }),
  it('muestra menu de usuario si está logueado', () => {
    store.dispatch('updateUser', { email: 'user@mystore.com' })
    const wrapper = mount(Navbar, {
      propsData: {
        title: "Mi Tienda"
      },
      localVue,
      store,
      router,
    })
    expect(wrapper.text()).to.include('Usuario')
    expect(wrapper.text()).to.not.include('Login')
  })
})