'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Policial extends Model {
  unidade () {
    return this.belongsTo('App/Models/Unidade')
  }
}

module.exports = Policial
