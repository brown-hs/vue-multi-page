import axios from 'axios'

var HOST = 'https://cnodejs.org/api/v1'

export function fetch (method, url, params = {}) {
  return new Promise((resolve, reject) => {
    axios({
      method: method,
      url: HOST + url + `?t=${new Date() * 1}`,
      params: params
    })
    .then((response) => {
      if (response.data.code === 100) {
        console.log('api', 100)
        window.location.href = '/api/wechat/auth'
      } else {
        resolve(response.data)
      }
    })
    .catch((error) => {
      reject(error)
    })
  })
}

export default {
  /**
   * 发送到邮箱
   */
  sendToEmail (orderNo) {
    return fetch('post', `/recordSendToEmail`, {orderNo: orderNo})
  },
  /**
   * 获取用户信息
   */
  getUserInfo () {
    return fetch('get', `/user`)
  },
  /**
   * 申请token
   */
  GetToken () {
    return fetch('get', `/token`)
  },
  /**
   * 获取被调人手机授权
   */
  CandidateAuthorize (token, phone, code) {
    return fetch(`/order/candidate-authorize`, token, {candidatePhone: phone, authCode: code})
  }

}
