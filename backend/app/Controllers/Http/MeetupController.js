'use strict'
const { isBefore, parseISO } = require('date-fns')
const Meetup = use('App/Models/Meetup')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with meetups
 */
class MeetupController {
  /**
   * Show a list of all meetups.
   * GET meetups
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response }) {
    const { page, date } = request.get()
    let meetup
    if (date) {
      meetup = Meetup.query()
        .where('date', date || null)
        .with('user')
        .with('file')
        .paginate(page, 10)
    } else {
      meetup = Meetup.query()
        .with('user')
        .with('file')
        .paginate(page, 10)
    }

    return meetup
  }

  /**
   * Render a form to be used for creating a new meetup.
   * GET meetups/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {}

  /**
   * Create/save a new meetup.
   * POST meetups
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response, auth }) {
    const data = request.only([
      'title',
      'file_id',
      'description',
      'location',
      'date'
    ])
    const hasMeetupSameDate = await Meetup.query()
      .where({
        user_id: auth.user.id,
        date: data.date
      })
      .first()
    if (hasMeetupSameDate) {
      return response.status(400).json({
        error: 'Você já possui um meetup criado com essa data e hora!'
      })
    }
    if (isBefore(parseISO(request.body.date), new Date())) {
      return response.status(400).json({ error: 'Data inválida para o meetup' })
    }
    const meetup = await Meetup.create({ user_id: auth.user.id, ...data })

    return meetup
  }

  /**
   * Display a single meetup.
   * GET meetups/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params }) {
    const meetup = await Meetup.query()
      .where('id', params.id)
      .with('file')
      .first()

    return meetup
  }

  async update ({ params, request, response, auth }) {
    const userId = auth.user.id
    const data = request.all()
    const meetup = await Meetup.query()
      .where('id', params.id)
      .first()

    if (meetup.user_id !== userId) {
      return response.status(401).json({ error: 'Não autorizado.' })
    }

    if (isBefore(parseISO(request.body.date), new Date())) {
      return response.status(400).json({ error: 'Data inválida para o meetup' })
    }

    if (meetup.past) {
      return response
        .status(400)
        .json({ error: 'Não pode atualizar meetups passados.' })
    }

    meetup.merge(data)

    await meetup.save()
    const meetupUpdated = await Meetup.query()
      .where('id', params.id)
      .with('file')
      .first()

    return meetupUpdated
  }

  /**
   * Delete a meetup with id.
   * DELETE meetups/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, response, auth }) {
    const userId = auth.user.id
    const meetup = await Meetup.query()
      .where('id', params.id)
      .first()

    if (meetup.user_id !== userId) {
      return response.status(401).json({ error: 'Não autorizado.' })
    }

    if (meetup.past) {
      return response
        .status(400)
        .json({ error: 'Não pode deletar meetups passados.' })
    }

    await meetup.delete()
  }
}

module.exports = MeetupController
