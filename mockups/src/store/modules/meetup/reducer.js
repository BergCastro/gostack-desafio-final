import produce from 'immer';

const INITIAL_STATE = {
  currentMeetup: null,
  meetups: [],
};

export default function meetup(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@meetup/UPDATE_MEETUP_SUCCESS': {
        draft.currentMeetup = action.payload;
        break;
      }
      case '@meetup/LOAD_CURRENT_MEETUP': {
        draft.currentMeetup = action.payload;
        break;
      }
      case '@meetup/LOAD_MEETUPS': {
        draft.meetups = action.payload;
        break;
      }
      case '@meetup/CREATE_MEETUP_SUCCESS': {
        draft.currentMeetup = action.payload;
        break;
      }
      case '@meetup/CLEAN_CURRENT_MEETUP': {
        draft.currentMeetup = {};
        break;
      }
      default:
    }
  });
}
