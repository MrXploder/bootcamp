import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

import '@/plugins/gravatar'
import './assets/styles/styles.scss'

Vue.config.productionTip = false

store.dispatch('session/subscribeToAuthStateChange')

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App)
}).$mount('#app')
