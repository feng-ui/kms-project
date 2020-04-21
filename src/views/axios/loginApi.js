import { service } from './request.js'

export const getLoginApi = (params) => {
  return service({
    url: '/login',
    method: 'post',
    data: params
  })
}
