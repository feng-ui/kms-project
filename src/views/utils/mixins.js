export function showConfirm (title, okCallback, cancelCallback, content) {
  $confirm({
    title: title,
    content: content || false,
    confirmLoading: true,
    contentText: '取消',
    okText: '确认',
    onOk: function () {
      console.log('ok')
    },
    onCancel: function () {
      console.log('cancel')
    }
  })
}
export function requestSuceed (desc, callback, duration) {
  this.$notification.success({
    message: '成功',
    description: desc || '请求成功',
    duration: duration || 3,
    onClose: function () {
       callback && typeof callback === 'function' && callback()
    }
  })
}

export function requestFailed (desc, callback) {
  this.$notification.success({
    message: '成功',
    description: desc || '请求成功',
    duration: 3,
    onClose: function () {
      callback && typeof callback === 'function' && callback()
    }
  })
}
