'use strict'
const jwt = require('jsonwebtoken')
const User = use('App/Models/User')
class UserController {
  async store ({ request }) {
    const data = request.only(['name', 'email', 'password'])

    const user = await User.create(data)

    return user
  }

  async update ({ request, auth }) {
    const data = request.all()
    const user = await User.find(auth.user.id)
    if (data.oldPassword) {
      delete data.oldPassword
      delete data.password_confirmation
    }

    user.merge(data)

    user.save()

    return user
  }
}

module.exports = UserController
