const requestSucceed = (desc, callback, duration) => {
  this.$notification.success({
    message: '成功',
    description: desc || '请求成功',
    duration: duration || 3,
    onClick: () => {
      callback && typeof callback === 'function' && callback()
    }
  })
}

export {
  requestSucceed
}

export function requestFailed (desc, callback, duration) {
  this.Notification.open({
    message: '失败',
    description: desc || '请求失败',
    duration: duration || 3,
    onClose: function () {
      callback && typeof callback === 'function' && callback()
    }
  })
}
