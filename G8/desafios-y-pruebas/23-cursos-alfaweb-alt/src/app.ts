import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './locales/index'
import vuetify from './plugins/vuetify'

/**
 *
 */
import './plugins/firebase'
import './plugins/simple-rules'
import './plugins/class-component-hooks'
import './plugins/vue-deepset'
import './plugins/fragment'

/**
 *
 */
import './assets/styles/base.css'
import './assets/styles/utils.css'
import './assets/styles/transitions.css'
import './assets/styles/animations.css'
import './assets/styles/typography.css'

/**
 *
 */
Vue.config.productionTip = false
new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: (h) => h(App)
}).$mount('#app')
