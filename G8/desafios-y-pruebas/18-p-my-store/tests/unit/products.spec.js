import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import sinon from 'sinon'

import Products from '@/components/Products.vue'

describe('Products.vue', () => {
  it('Muestra el titulo "Nuestros Productos"', () => {
    const title = 'Nuestros Productos'
    const wrapper = shallowMount(Products, {})
    expect(wrapper.text()).to.include(title)
  }),
  it('Muestra los productos', () => {
    const productName = 'Computadora'
    const wrapper = shallowMount(Products, {})
    wrapper.vm.products = [{
      name: 'Computadora',
      price: 100.0,
      qty: 1,
    }]
    expect(wrapper.text()).to.include(productName)
  }),
  it('Filtra los productos', () => {
    const productName = 'Computadora'
    const productSearch = 'Teclado'
    const wrapper = shallowMount(Products, {})
    const searchBox = wrapper.find('input')
    wrapper.vm.products = [{
      name: 'Computadora',
      price: 100.0,
      qty: 1,
    }]
    searchBox.setValue(productSearch)
    expect(wrapper.text()).to.not.include(productName)
  }),
  it('Añade los productos al carro', () => {
    const wrapper = shallowMount(Products, {})
    const clickMethodStub = sinon.stub()
    wrapper.vm.products = [{
      name: 'Computadora',
      price: 100.0,
      qty: 1,
    }]
    wrapper.setMethods({
      addToCart: clickMethodStub
    })
    const addButton = wrapper.find('.card .button')
    addButton.trigger('click')
    expect(clickMethodStub.called).to.equal(true)
  })
})
