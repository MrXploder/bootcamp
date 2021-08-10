import Vue from 'vue'
import App from './App.vue'
window.$ = window.jQuery = require('jquery')
import 'bootstrap'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
