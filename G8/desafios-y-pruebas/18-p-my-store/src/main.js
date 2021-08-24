import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// Main Styles
import './assets/scss/main.scss'

// Material Icons
// import 'material-icons/iconfont/material-icons.css'
// import '@mdi/font/css/materialdesignicons.css'


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
