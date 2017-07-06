import * as types from '../mutation-types'

/**
 * App通用配置
 */
const state = {
  loading: 0,
  email: '',
  phone: ''
}

const actions = {
  //
}

const getters = {
  phone: state => state.phone,
  loading: state => state.loading
}

const mutations = {
  [types.COM_LOADING_STATUS] (state, status) {
    if (state.loading === 0 && !status) {
      return
    }
    state.loading = status ? ++state.loading : --state.loading
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}
