import Vue from 'vue'
import App from './App.vue'
import InputPassword from '@/components/InputPassword.vue'

Vue.config.productionTip = false

// Vue.component("input-password", InputPassword)

new Vue({
  render: (h) => h(App),
}).$mount('#app')
