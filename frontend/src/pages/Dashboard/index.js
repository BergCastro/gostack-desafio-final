import React, { useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import pt from 'date-fns/locale/pt';
import {
  MdKeyboardArrowRight,
  MdControlPoint,
  MdEvent,
  MdRoom,
} from 'react-icons/md';

import { Link } from 'react-router-dom';
import api from '~/services/api';

import { Container, Meetup } from './styles';

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('organizing');
      setMeetups(response.data);
    }

    loadMeetups();
  }, []);

  function handleNovoMeetup() {
    // setDate(addDays(date, 1));
  }

  function formatDate(date) {
    return format(parseISO(date), "d 'de' MMMM', às' HH'h' ", { locale: pt });
  }

  return (
    <Container>
      <header>
        <strong>Meus meetups</strong>
        <button type="button" onClick={handleNovoMeetup}>
          <MdControlPoint id="btNovo" size={20} color="#FFF" />
          Novo meetup
        </button>
      </header>

      <ul>
        {meetups.map(meetup => (
          <Meetup key={meetup.id}>
            <strong>{meetup.title}</strong>
            <div>
              <span>{formatDate(meetup.date)}</span>

              <Link to={`/detalhes/${meetup.id}`}>
                <MdKeyboardArrowRight size={23} color="#FFF" />
              </Link>
            </div>
          </Meetup>
        ))}
      </ul>
    </Container>
  );
}
