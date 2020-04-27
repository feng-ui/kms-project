const validator = function () {
  var username = {
    userValidator: /^[0-9a-zA-Z]*$/g
  }
  return {
    regExp: username
  }
}

export {
  validator
}
