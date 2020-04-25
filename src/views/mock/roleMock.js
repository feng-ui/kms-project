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
const roleEdit = function () {
  var newData = {
    role: 'admin'
  }
  return {
    data: newData
  }
}

const data = Mock.mock(/\/system\/getRoleList/, 'post', role)
const edit = Mock.mock(/\/system\/editShowApi/, 'post', roleEdit)

export {
  data,
  edit
}
