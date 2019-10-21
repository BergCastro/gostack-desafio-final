'use strict'
const User = use('App/Models/User')
class SessionController {
  async store ({ request, auth }) {
    const { email, password } = request.all()

    const user = await User.query()
      .where('email', email)
      .first()

    const token = await auth.attempt(email, password)

    return {
      user,
      token: token.token
    }
  }
}

module.exports = SessionController
