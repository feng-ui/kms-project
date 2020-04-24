import { service } from './request.js'

export const getRoleListApi = (params) => {
  return service({
    url: '/system/getRoleList',
    method: 'post',
    data: params
  })
}
export const roleAddApi = (params) => {
  return service({
    url: 'system/roleAdd',
    method: 'post',
    data: params
  })
}

export const editSubmitApi = (params) => {
  return service({
    url: 'system/editRole',
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
export const delectRoleApi = (params) => {
  return service({
    url: 'system/deleteRole',
    method: 'post',
    data: params
  })
}
