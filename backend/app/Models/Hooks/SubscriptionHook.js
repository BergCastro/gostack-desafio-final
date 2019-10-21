'use strict'
const User = use('App/Models/User')
const Meetup = use('App/Models/Meetup')
const Kue = use('Kue')
const Job = use('App/Jobs/SubscriptionEmail')
const SubscriptionHook = (exports = module.exports = {})

SubscriptionHook.sendEmail = async subscription => {
  const subscripted = await User.find(subscription.user_id)
  const meetup = await Meetup.find(subscription.meetup_id)
  const ownermeetup = await User.find(meetup.user_id)
  // console.log(user.email)
  Kue.dispatch(Job.key, { ownermeetup, meetup, subscripted }, { attempts: 3 })
}
