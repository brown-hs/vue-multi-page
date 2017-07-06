// api定义
var appData = require('../data.json')
// var surveyResult1 = appData.surveyResult1
// var surveyResult2 = appData.surveyResult2
var wechatInfo = appData.wechatInfo

module.exports = function (app) {
  // 查询所有订单类型
  app.get('/receipt', function (req, res) {
    res.send({
      code: 0,
      msg: 'success',
      data: wechatInfo
    })
  })
  // 去注册
  app.post('/user/wechat/signup', function (req, res) {
    res.send({
      code: 0,
      msg: 'success',
      data: {
        //
      }
    })
  })
}

