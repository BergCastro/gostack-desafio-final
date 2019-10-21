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
    console.log(auth.token)
    if (data.oldPassword) {
      let decoded
      try {
        decoded = jwt.verify(auth.user.token, data.oldPassword)
      } catch (error) {

      }
      if (decoded) {
        console.log('verificou')
      }
      delete data.oldPassword
      delete data.confirmPassword
    }
   // console.log('data: ', data)
    user.merge(data)
    //console.log('user: ', user)

    user.save()

    return user
  }
}

module.exports = UserController
