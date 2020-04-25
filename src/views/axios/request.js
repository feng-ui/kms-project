import axios from 'axios'

var service = axios.create({
  timeout: 5000
})

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

var err = function (error) {
  return Promise.reject(error)
}

service.interceptors.request.use((config) => {
  if (config.method === 'get') {
    config.params = Object.assign({}, config.params, { t: Date.parse(new Date()) / 1000 })
  }
  return config
}, err)
service.interceptors.response.use((res) => {
  if (!res.data.success) {
    return Promise.resolve(res)
  }
  return res
}, err)

export function post (url, params) {
  return new Promise((resolve, reject) => {
    service.post(url, params)
      .then(res => {
        resolve(res.data)
      }, err => {
        reject(err)
      })
      .catch((err) => {
        reject(err.data)
      })
  })
}

export function get (url, param) {
  return new Promise((resolve, reject) => {
    service.get(url, { params: param })
      .then(res => {
        resolve(res.data)
      }, err => {
        reject(err)
      })
      .catch((err) => {
        reject(err.data)
      })
  })
}

export {
  service
}
