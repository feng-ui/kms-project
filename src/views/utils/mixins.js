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
  exports ()
}
