import React, { useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import pt from 'date-fns/locale/pt';
import PropTypes from 'prop-types';

import { Link, useHistory } from 'react-router-dom';
import { MdCreate, MdDeleteForever, MdEvent, MdRoom } from 'react-icons/md';
import api from '~/services/api';

import { Container, Meetup } from './styles';

export default function Detalhes({ match }) {
  const [meetup, setMeetup] = useState({});
  const history = useHistory();

  useEffect(() => {
    async function loadMeetup() {
      const response = await api.get(`meetups/${match.params.id}`);
      setMeetup(response.data);
    }

    loadMeetup();
  }, [match.params.id]);

  function handleNovoMeetup(id) {
    history.push(`/meetup/${id}`);
  }
  function handleCancelar() {
    history.push('/dashboard');
  }

  function formatDate(date) {
    if (date) {
      return format(parseISO(date), "d 'de' MMMM', às' HH'h' ", { locale: pt });
    }
    return '';
  }

  return (
    <Container>
      <header>
        <strong>{meetup.title}</strong>
        <div>
          <button
            id="edit"
            type="button"
            onClick={() => handleNovoMeetup(meetup.id)}
          >
            <div>
              <span>
                <MdCreate size={18} color="#FFF" />
              </span>
              Editar
            </div>
          </button>
          <button id="cancel" type="button" onClick={handleCancelar}>
            <div>
              <span>
                <MdDeleteForever size={18} color="#FFF" />
              </span>
              Cancelar
            </div>
          </button>
        </div>
      </header>
      <img src={meetup.file ? meetup.file.url : ''} alt={meetup.title} />

      <p>{meetup.description}</p>

      <footer>
        <div>
          <span>
            <MdEvent size={18} color="#999" />
          </span>
          <span>{formatDate(meetup.date)}</span>
        </div>
        <div>
          <span>
            <MdRoom size={18} color="#999" />
          </span>
          {meetup.location}
        </div>
      </footer>
    </Container>
  );
}

Detalhes.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.node,
    }).isRequired,
  }).isRequired,
};
