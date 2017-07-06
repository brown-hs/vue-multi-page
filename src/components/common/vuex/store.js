import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import common from './modules/common'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    common,
    user
  },
  strict: process.env.NODE_ENV !== 'production'// 线上环境关掉
})
