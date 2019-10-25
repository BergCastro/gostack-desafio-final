'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')
Route.post('sessions', 'SessionController.store').validator('Session')
Route.post('users', 'UserController.store').validator('User/StoreUser')
Route.get('files/:id', 'FileController.show')
Route.group(() => {
  Route.put('users', 'UserController.update').validator('User/UpdateUser')
  Route.get('organizing', 'OrganizingController.index')
  Route.get('user/subscriptions', 'UserSubscriptionController.index')
  Route.post('files', 'FileController.store')
  Route.resource('meetups', 'MeetupController')
    .apiOnly()
    .validator(
      new Map([
        [['meetups.store'], ['Meetup/StoreMeetup']],
        [['meetups.update'], ['Meetup/UpdateMeetup']]
      ])
    )
  Route.resource('subscriptions', 'SubscriptionController').apiOnly()
  // .validator(
  //   new Map([
  //     [['meetups.store'], ['Meetup/StoreMeetup']],
  //     [['meetups.update'], ['Meetup/UpdateMeetup']]
  //   ])
  // )
}).middleware('auth')
