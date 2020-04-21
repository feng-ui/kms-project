import { service } from './request.js'

export const getUserListApi = (params) => {
  return service({
    url: '/system/getUserList',
    method: 'post',
    data: params
  })
}
