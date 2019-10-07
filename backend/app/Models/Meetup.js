'use strict'

const { isBefore } = require('date-fns')
/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Meetup extends Model {
  static get computed () {
    return ['past']
  }

  getPast () {
    return isBefore(this.date, new Date())
  }

  user () {
    return this.belongsTo('App/Models/User')
  }

  file () {
    return this.belongsTo('App/Models/File')
  }

  subscriptions () {
    return this.hasMany('App/Models/Subscription')
  }
}

module.exports = Meetup
