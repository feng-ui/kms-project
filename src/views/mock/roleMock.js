import Mock from 'mockjs'

const role = function () {
  var dataList = []
  for (var i = 0; i < 20; i++) {
    var newData = {
      num: 1,
      rolename: 'admin'
    }
    dataList.push(newData)
  }
  return {
    data: dataList
  }
}
const data = Mock.mock(/\/system\/getRoleList/, 'post', role)

export {
  data
}
