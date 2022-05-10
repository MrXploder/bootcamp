import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import { appModule } from './modules/app'
import { completosModule } from './modules/completos'

export default new Vuex.Store({
  modules: {
    app: appModule,
    completos: completosModule
  }
})
