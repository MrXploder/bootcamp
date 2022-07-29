import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/plugins/carousel'
import '@/plugins/lottie'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import '@/assets/scss/main.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
