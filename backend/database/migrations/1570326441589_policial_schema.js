'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PolicialSchema extends Schema {
  up () {
    this.create('policiais', table => {
      table.increments()
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
      table
        .string('matricula')
        .notNullable()
        .unique()
      table.string('nome').notNullable()
      table
        .integer('unidade_id')
        .unsigned()
        .references('id')
        .inTable('unidades')
      table.timestamps()
    })
  }

  down () {
    this.drop('policiais')
  }
}

module.exports = PolicialSchema
