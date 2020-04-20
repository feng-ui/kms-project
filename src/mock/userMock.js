var Mock = require('mockjs')
var user = function (options) {
  var newList = []
  for (var i = 0; i < 20; i++) {
    var userList = {
      username: 'user1',
      role: 1,
      email_address: '223@qq.com',
      telephone: '13023423312'
    }
    newList.push(userList)
  }
  return newList
}

Mock.mock('/getListData', 'post', user)
