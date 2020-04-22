import { service } from './request.js'

export const getRoleListApi = (params) => {
  return service({
    url: '/system/getRoleList',
    method: 'post',
    data: params
  })
}
