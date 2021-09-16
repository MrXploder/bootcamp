import Vue from 'vue'
import Vuex from 'vuex'

import AppModule from './modules/app/app.module'
import GradesModule from './modules/grades/grades.module'
import SessionModule from './modules/session/session.module'

Vue.use(Vuex)

const Store = new Vuex.Store({})

export const appModule = new AppModule({ store: Store, name: 'app' })
export const sessionModule = new SessionModule({ store: Store, name: 'session' })
export const gradesModule = new GradesModule({ store: Store, name: 'grades' })
export default Store
