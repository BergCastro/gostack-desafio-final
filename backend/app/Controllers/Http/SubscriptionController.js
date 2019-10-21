'use strict'
import { utcToZonedTime } from 'date-fns-tz'
import pt from 'date-fns/locale/pt'
const Subscription = use('App/Models/Subscription')
const Meetup = use('App/Models/Meetup')
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with subscriptions
 */
class SubscriptionController {
  /**
   * Show a list of all subscriptions.
   * GET subscriptions
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, auth }) {
    const { page } = request.get()

    const subscriptions = await Subscription.query()
      .where({ user_id: auth.user.id })
      .whereHas('meetup', builder => {
        builder.where('date', '>', new Date())
      })
      .with('meetup')
      .paginate(page)

    return subscriptions
  }

  async store ({ request, response, auth }) {
    const { meetupId } = request.only(['meetupId'])

    const meetup = await Meetup.find(meetupId)
    const dados = {
      meetup_id: meetup.id,
      user_id: auth.user.id
    }

    if (meetup.user_id === auth.user.id) {
      return response
        .status(400)
        .json({ error: 'Não pode se inscrever nos próprios meetups' })
    }
    if (meetup.getPast()) {
      return response
        .status(400)
        .json({ error: 'Não pode se inscrever em meetups já passados' })
    }

    const hasMeetupSameDate = await Subscription.query()
      .where({ user_id: auth.user.id })
      .whereHas('meetup', builder => {
        builder.where('date', meetup.date)
      })
      .first()

    if (hasMeetupSameDate) {
      return response.status(400).json({
        error: 'Não pode se inscrever em dois meetups na mesma data e hora'
      })
    }

    const subscription = await Subscription.create(dados)

    return subscription
  }

  async show ({ params, request, response, view }) {}

  /**
   * Render a form to update an existing subscription.
   * GET subscriptions/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {}

  /**
   * Update subscription details.
   * PUT or PATCH subscriptions/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {}

  /**
   * Delete a subscription with id.
   * DELETE subscriptions/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {}
}

module.exports = SubscriptionController
