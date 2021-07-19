import Vue from 'vue'
import App from './App.vue'

// eslint-disable-next-line no-unused-vars
import $ from 'jquery'

import 'bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false

new Vue({
	render: (h) => h(App),
}).$mount('#app')
