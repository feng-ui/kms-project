import { service } from './request.js'

export const getLoginApi = (params) => {
  return service({
    url: '/system/login',
    method: 'post',
    data: params
  })
}
