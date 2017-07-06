import * as types from '../mutation-types'
const state = {
  avatar: '',
  token: '',
  userId: 0,
  nickname: '',
  email: null,
  typeId: '',
  idcard: null
}

const actions = {
  updateNickname ({commit}, nickname) {
    commit(types.UPDATE_NICKNAME, nickname)
  },
  updateIdcard ({commit}, idcard) {
    commit(types.UPDATE_IDCARD, idcard)
  },
  update_Typeid ({commit}, typeid) {
    commit('UPDATE_TYPEID', typeid)
  },
  updateEmail ({commit}, email) {
    commit(types.UPDATE_EMAIL, email)
  },
  updateToken ({commit}, token) {
    commit(types.GET_TOKEN, token)
  }
}

const getters = {
  token: state => state.token,
  avatar: state => state.avatar,
  email: state => state.email,
  typeId: state => state.typeId,
  nickname: state => state.nickname
}
const mutations = {
  [types.UPDATE_NICKNAME] (state, nickname) {
    state.nickname = nickname
  },
  [types.UPDATE_IDCARD] (state, idcard) {
    state.idcard = idcard
  },
  'UPDATE_TYPEID' (state, typeId) {
    state.typeId = typeId
  },
  [types.UPDATE_EMAIL] (state, email) {
    state.email = email
  },
  [types.GET_TOKEN] (state, res) {
    state.token = res.data.token
  },
  [types.GET_USER_INFO] (state, res) {
    state.nickname = res.data.nickname
    state.avatar = res.data.avatar
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}
