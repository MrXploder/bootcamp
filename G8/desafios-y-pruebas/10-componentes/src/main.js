import Vue from 'vue'
import App from './App.vue'

import List from '@/components/List.vue'
import ListItem from '@/components/ListItem.vue'
import ListItemTitle from '@/components/ListItemTitle.vue'
import ListItemAvatar from '@/components/ListItemAvatar.vue'

Vue.config.productionTip = false

Vue.component('list', List)
Vue.component('list-item', ListItem)
Vue.component('list-item-title', ListItemTitle)
Vue.component('list-item-avatar', ListItemAvatar)

new Vue({
  render: (h) => h(App),
}).$mount('#app')
