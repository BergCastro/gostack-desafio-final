import React, { useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import PropTypes from 'prop-types';
import { Form, Input, FileInput } from '@rocketseat/unform';
import { Link, useHistory } from 'react-router-dom';
import { MdCreate, MdDeleteForever, MdEvent, MdRoom } from 'react-icons/md';
import api from '~/services/api';
import BannerInput from './BannerInput';
import { Container, Meetup } from './styles';
import { updateMeetupRequest } from '~/store/modules/meetup/actions';
import { useDispatch, useSelector } from 'react-redux';

export default function NovoEditar({ match }) {
  const [meetup, setMeetup] = useState({});
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    async function loadMeetup() {
      const response = await api.get(`meetups/${match.params.id}`);
      setMeetup(response.data);
    }

    loadMeetup();
  }, [match.params.id, meetup]);

  function handleNovoMeetup() {
    // setDate(addDays(date, 1));
  }
  function handleCancelar() {
    history.push('/dashboard');
  }
  function handleSubmit(meetup) {
    dispatch(updateMeetupRequest(meetup));
  }

  function handleProgress(progress, event) {}
  return (
    <Container>
      <Form initialData={meetup} onSubmit={handleSubmit}>
        <BannerInput name="file_id" />

        <Input name="title" placeholder="Título do Meetup" />
        <Input multiline name="description" placeholder="Descricao completa" />
        <Input name="date" placeholder="Data do meetup" />
        <Input name="location" placeholder="Data do meetup" />

        <button type="submit">Atualizar perfil</button>
      </Form>
    </Container>
  );
}

NovoEditar.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.node,
    }).isRequired,
  }).isRequired,
};
