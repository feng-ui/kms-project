export function setCookie (key, value) {
  var date = new Date()
  date.setTime(date.getTime() + 24 * 60 * 60 * 1000 * 36500)
  window.document.cookie = key + '=' + value + ';path=/;expires=' + date.toGMTString()
}
export function getCookie (param) {
  var cParam = ''
  if (document.cookie.length > 0) {
    var arr = document.cookie.split('; ')
    for (var i = 0; i < arr.length; i++) {
      var arr2 = arr[i].split('=')
      if (arr2[0] === param) {
        cParam = arr2[1]
      }
    }
    return cParam
  }
}

export function delCookie () {
  setCookie('', -1)
}
