import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'bootstrat/dist/css/bootstrap.min.css'
import 'bootstrat/dist/js/bootstrap.min.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
