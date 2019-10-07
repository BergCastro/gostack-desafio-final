'use strict'

class StoreMeetup {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      title: 'required',
      description: 'required',
      location: 'required',
      date: 'date|required'
    }
  }
}

module.exports = StoreMeetup
