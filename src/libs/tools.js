/**
 * @Author: lily
 * @Date: 2016/11/2
 */

export function getQueryString (name) {
  const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
  const r = window.location.search.substr(1).match(reg)
  if (r !== null) {
    return unescape(r[2])
  } else {
    return null
  }
}

export function isChinaName (name) {
  var pattern = /^[\u4E00-\u9FA5]{1,6}$/
  return pattern.test(name)
}
export function isIDCard (idcard) {
  var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
  if (reg.test(idcard)) {
    return true
  } else {
    return false
  }
}

export function isPhone (phone) {
  var reg = /^1(3[0-9]|4[57]|5[0-35-9]|7[0135678]|8[0-9])\d{8}$/
  if (reg.test(parseInt(phone))) {
    return true
  } else {
    return false
  }
}

export function isEmail (email) {
  var reg = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,5}$/
  if (reg.test(email)) {
    return true
  } else {
    return false
  }
}

export function isEmpty (obj) {
  for (var name in obj) {
    return false
  }
  return true
}

export function isPassword (str) {
  var reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/
  if (reg.test(str)) {
    return true
  } else {
    return false
  }
}
/**
 * @name _.dateFormat
 * @method
 * @param {String} format  - 一个格式字符串
 * @desc
 * 时间格式化,该方法扩展到 Date.prototype
 * yyyy  年
 * MM   月
 * dd 日
 * hh 时
 * mm 分
 * s 秒
 * q 季度
 * S 毫秒
 * @example
 * new Date().format('yyyy-MM-dd') ->  2016-05-19
 * @return {String} format  一个格式化后的字符串
 * */
export function dateFormat (format) {
  var
    self = this
  if (typeof format !== 'string') {
    return new Date()
  }
  var o = {
    'M+': self.getMonth() + 1, // 月份
    'd+': self.getDate(), // 日
    'h+': self.getHours(), // 小时
    'm+': self.getMinutes(), // 分
    's+': self.getSeconds(), // 秒
    'q+': Math.floor((self.getMonth() + 3) / 3), // 季度
    'S': self.getMilliseconds() // 毫秒
  }
  if (/(y+)/.test(format)) {
    format = format.replace(RegExp.$1, (self.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(format)) {
      format = format.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
    }
  }
  return format
}
/* eslint-disable no-extend-native */
Date.prototype.format = dateFormat

/**
* 生成随机的字符串
* @param  {Number} [len=20]
* @return {String}
* */
export function randomStr (len) {
  let result = ''
  const charts = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  len = len || 20
  while (len--) {
    result += charts[Math.ceil(Math.random() * charts.length - 1)]
  }
  return result
}

