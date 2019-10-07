'use strict'

const User = use('App/Models/User')
class DatabaseSeeder {
  async run () {
    await User.create({
      name: 'Lindemberg Nunes de Castro',
      email: 'fireberg2500@hotmail.com',
      password: '123456'
    })
  }
}

module.exports = DatabaseSeeder
