export function updateMeetupRequest(data) {
  return {
    type: '@meetup/UPDATE_MEETUP_REQUEST',
    payload: { data },
  };
}

export function updateMeetupSuccess(meetup) {
  return {
    type: '@meetup/UPDATE_MEETUP_SUCCESS',
    payload: { ...meetup },
  };
}

export function createMeetupRequest(meetup) {
  return {
    type: '@meetup/CREATE_MEETUP_REQUEST',
    payload: { ...meetup },
  };
}

export function createMeetupSuccess(meetup) {
  return {
    type: '@meetup/CREATE_MEETUP_SUCCESS',
    payload: { ...meetup },
  };
}

export function cleanCurrentMeetup(meetup) {
  return {
    type: '@meetup/CLEAN_CURRENT_MEETUP',
  };
}

export function loadCurrentMeetup(meetup) {
  return {
    type: '@meetup/LOAD_CURRENT_MEETUP',
    payload: { ...meetup },
  };
}

export function loadMeetups(meetups) {
  return {
    type: '@meetup/LOAD_MEETUPS',
    payload: meetups,
  };
}
