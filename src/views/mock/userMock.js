import Mock from 'mockjs'

const user = function () {
  var dataList = []
  for (var i = 0; i < 20; i++) {
    var newData = {
      num: 1,
      username: 'user1',
      roleName: 1,
      email: '223@qq.com',
      phoneNum: '13023423312',
      createTime: '2020-04-21',
      status: '在线'
    }
    dataList.push(newData)
  }
  return {
    data: dataList
  }
}
const data = Mock.mock(/\/system\/getUserList/, 'post', user)

export {
  data
}
