'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UnidadeSchema extends Schema {
  up () {
    this.create('unidades', table => {
      table.increments()
      table
        .string('nome')
        .notNullable()
        .unique()
      table.string('descricao')
      table.timestamps()
    })
  }

  down () {
    this.drop('unidades')
  }
}

module.exports = UnidadeSchema
