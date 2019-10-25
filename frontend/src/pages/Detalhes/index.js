import React, { useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import pt from 'date-fns/locale/pt';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { Link, useHistory } from 'react-router-dom';
import { MdCreate, MdDeleteForever, MdEvent, MdRoom } from 'react-icons/md';
import api from '~/services/api';

import { Container, Meetup } from './styles';

export default function Detalhes() {
  const currentMeetup = useSelector(state => state.meetup.currentMeetup);

  const meetup = {
    ...currentMeetup,
    date: format(parseISO(currentMeetup.date), "d 'de' MMMM', às' HH'h' ", {
      locale: pt,
    }),
  };

  const history = useHistory();
  const dispatch = useDispatch();

  function handleEditMeetup() {
    history.push('/editMeetup');
  }
  function handleCancelar() {
    history.push('/dashboard');
  }

  function formatDate(date) {
    console.log(date);
    if (date) {
      return format(parseISO(date), "d 'de' MMMM', às' HH'h' ", { locale: pt });
    } else {
      return '';
    }
  }

  return (
    <Container>
      <header>
        <strong>{meetup.title}</strong>
        <div>
          <button id="edit" type="button" onClick={() => handleEditMeetup()}>
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
          <span>{meetup.date}</span>
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
