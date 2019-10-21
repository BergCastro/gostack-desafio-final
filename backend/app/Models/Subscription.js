'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Subscription extends Model {
  static boot () {
    super.boot()

    this.addHook('afterCreate', 'SubscriptionHook.sendEmail')
  }

  meetup () {
    return this.belongsTo('App/Models/Meetup')
  }

  user () {
    return this.belongsTo('App/Models/User')
  }
}

module.exports = Subscription
