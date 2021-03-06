import Mock from 'mockjs'

const user = function () {
  var dataList = []
  for (var i = 0; i < 20; i++) {
    var t = i
    var newData = {
      id: t,
      num: 1,
      username: 'user1',
      roleName: 'admin',
      email: '223@qq.com',
      phoneNum: '13023423312',
      createTime: '2020-04-21',
      status: '在线',
      onLineStatus: '离线'
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
