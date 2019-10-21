'use strict'
const Mail = use('Mail')
class SubscriptionEmail {
  // If this getter isn't provided, it will default to 1.
  // Increase this number to increase processing concurrency.
  static get concurrency () {
    return 1
  }

  // This is required. This is a unique key used to identify this job.
  static get key () {
    return 'SubscriptionEmail-job'
  }

  // This is where the work is done.
  async handle ({ ownermeetup, meetup, subscripted }) {
    console.log('SubscriptionEmail-job started')
    await Mail.send(
      ['emails.subscription'],
      {
        title: meetup.title,
        date: meetup.date,
        subscripted: subscripted.name,
        subscripted_email: subscripted.email
      },
      message => {
        message
          .to(ownermeetup.email)
          .from('meetup@mettapp.com', 'MeetApp')
          .subject(`Inscrição no meetup ${meetup.title}`)
      }
    )
  }
}

module.exports = SubscriptionEmail
