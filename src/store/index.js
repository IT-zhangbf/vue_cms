import Vue from 'vue'
import Vuex from 'vuex'
import vuexModules from './modules'

import state from './state'
import mutations from './mutations'
import actions from './actions'
import config from './config'

Vue.use(Vuex);

export default new Vuex.Store({
    state,
    mutations,
    actions,
    config,
    modules: vuexModules
})
