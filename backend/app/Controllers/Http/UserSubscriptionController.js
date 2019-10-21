'use strict'
const Meetup = use('App/Models/Meetup')
class UserSubscriptionController {
  async index ({ auth }) {
    const meetups = await Meetup.query()
      .where('date', '>=', new Date())
      .whereHas('subscriptions', builder => {
        builder.where('user_id', auth.user.id)
      })
      .fetch()
    return meetups
  }
}

module.exports = UserSubscriptionController
