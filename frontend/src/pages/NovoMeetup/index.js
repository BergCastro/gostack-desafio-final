import React, { useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import PropTypes from 'prop-types';
import { Form, Input, FileInput } from '@rocketseat/unform';
import { Link, useHistory } from 'react-router-dom';
import { MdCreate, MdDeleteForever, MdEvent, MdRoom } from 'react-icons/md';
import api from '~/services/api';

import { Container, Meetup } from './styles';

export default function NovoEditar({ match }) {
  const [meetup, setMeetup] = useState({});
  const history = useHistory();

  useEffect(() => {
    async function loadMeetup() {
      const response = await api.get(`meetups/${match.params.id}`);
      setMeetup(response.data);
    }

    loadMeetup();
  }, [match.params.id]);

  function handleNovoMeetup() {
    // setDate(addDays(date, 1));
  }
  function handleCancelar() {
    history.push('/dashboard');
  }
  function handleSubmit({ name, email, password }) {
    // dispatch(signUpRequest(name, email, password));
  }

  function handleProgress(progress, event) {}
  return (
    <Container>
      <Form initialData={meetup} onSubmit={handleSubmit}>
        <FileInput name="attach" onStartProgress={handleProgress} />

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
