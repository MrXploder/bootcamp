import Vue from 'vue'
import App from './App.vue'
import InputPassword from '@/components/InputPassword.vue'
import router from './router'

Vue.config.productionTip = false

// Vue.component("input-password", InputPassword)

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
