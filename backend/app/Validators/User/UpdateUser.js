'use strict'

class User {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      password: 'required_if:oldPassword|confirmed'
    }
  }
}

module.exports = User
