'use strict'
const unidades = require('./Colections').unidades
const Unidade = use('App/Models/Unidade')
class DatabaseSeeder {
  async run () {
    await Unidade.createMany(unidades)
  }
}

module.exports = DatabaseSeeder
