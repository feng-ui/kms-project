import Mock from 'mockjs'

const login = function () {
  var loginForm = {
    username: 'admin',
    password: '123456'
  }
  return {
    data: loginForm
  }
}
const data = Mock.mock(/\/login/, 'post', login)

export {
  data
}
