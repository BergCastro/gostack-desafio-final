import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { format, parseISO } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import pt from 'date-fns/locale/pt';
import {
  MdKeyboardArrowRight,
  MdControlPoint,
  MdEvent,
  MdRoom,
} from 'react-icons/md';

import { Link, useHistory } from 'react-router-dom';
import api from '~/services/api';

import { Container, Meetup } from './styles';
import {
  loadMeetups,
  loadCurrentMeetup,
  cleanCurrentMeetup,
} from '~/store/modules/meetup/actions';

export default function Dashboard() {
  // const [meetups, setMeetups] = useState([]);
  const meetups = useSelector(state => state.meetup.meetups);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    async function loadOrganizingMeetups() {
      const response = await api.get('organizing');
      dispatch(loadMeetups(response.data));
      // setMeetups(response.data);
    }

    loadOrganizingMeetups();
  }, []);

  function handleNovoMeetup() {
    dispatch(cleanCurrentMeetup());
    history.push('/newMeetup');
  }
  function formatDate(date) {
    return format(parseISO(date), "d 'de' MMMM', às' HH'h' ", { locale: pt });
  }

  function handleEditMeetup(meetup) {
    //meetup.date = formatDate(meetup.date);
    dispatch(loadCurrentMeetup(meetup));
    history.push('/detalhes');
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

              <button onClick={() => handleEditMeetup(meetup)}>
                <MdKeyboardArrowRight size={23} color="#FFF" />
              </button>
            </div>
          </Meetup>
        ))}
      </ul>
    </Container>
  );
}
