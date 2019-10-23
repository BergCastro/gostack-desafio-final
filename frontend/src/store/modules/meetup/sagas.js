import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import { updateMeetupSuccess } from './actions';

export function* updateMeetup({ payload }) {
  try {
    console.log(payload.data);
    const response = yield call(api.put, 'meetups', payload.data);

    toast.success('Meetup atualizado com sucesso!');

    yield put(updateMeetupSuccess(response.data));
  } catch (err) {
    toast.error('Erro ao atualizar o meetup, confira os dados!');
  }
}

export default all([takeLatest('@meetup/UPDATE_MEETUP_REQUEST', updateMeetup)]);
