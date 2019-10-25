import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';
import history from '~/services/history';
import { updateMeetupSuccess, createMeetupSuccess } from './actions';
export function* updateMeetup({ payload }) {
  const meetup = payload.data;
  console.log(meetup);
  try {
    const response = yield call(api.put, `meetups/${meetup.id}`, meetup);
    toast.success('Meetup atualizado com sucesso!');
    console.log(response.data);
    yield put(updateMeetupSuccess(response.data));
  } catch (err) {
    toast.error('Erro ao atualizar o meetup, confira os dados!');
  }
}

export function* createMeetup({ payload }) {
  const meetup = payload;
  console.log(meetup);

  try {
    const response = yield call(api.post, 'meetups', meetup);
    toast.success('Meetup criado com sucesso!');
    history.push('/dashboard');
    yield put(createMeetupSuccess(response.data));
  } catch (err) {
    toast.error('Erro ao tentar criar o meetup, confira os dados!');
  }
}

export default all([
  takeLatest('@meetup/UPDATE_MEETUP_REQUEST', updateMeetup),
  takeLatest('@meetup/CREATE_MEETUP_REQUEST', createMeetup),
]);
