'use strict'
const Meetup = use('App/Models/Meetup')
class OrganizingController {
  async index ({ auth }) {
    const meetups = await Meetup.query()
      .where('user_id', auth.user.id)
      .with('file')
      .orderBy('date', 'desc')
      .fetch()
    return meetups
  }
}

module.exports = OrganizingController
