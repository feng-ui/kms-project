import { service } from './request.js'

export const getUserListApi = (params) => {
  return service({
    url: '/getUserList',
    method: 'post',
    params: params
  })
}
