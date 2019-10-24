import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import { updateMeetupSuccess } from './actions';

export function* updateMeetup({ payload }) {
  const meetup = payload.data;

  try {
    const response = yield call(api.put, `meetups/${meetup.id}`, meetup);

    toast.success('Meetup atualizado com sucesso!');

    yield put(updateMeetupSuccess(response.data));
  } catch (err) {
    console.log(err);
    toast.error('Erro ao atualizar o meetup, confira os dados!');
  }
}

export default all([takeLatest('@meetup/UPDATE_MEETUP_REQUEST', updateMeetup)]);
