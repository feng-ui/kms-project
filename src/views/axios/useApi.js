import { service } from './request.js'

export const getUserListApi = (params) => {
  return service({
    url: '/system/getUserList',
    method: 'post',
    data: params
  })
}
export const userAddApi = (params) => {
  return service({
    url: 'system/addUser',
    method: 'post',
    data: params
  })
}

export const editSubmitApi = (params) => {
  return service({
    url: 'system/editUser',
    method: 'post',
    data: params
  })
}

export const editShowApi = (params) => {
  return service({
    url: 'system/editShow',
    method: 'post',
    data: params
  })
}
