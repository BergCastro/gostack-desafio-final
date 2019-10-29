import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';

// import image from '../../assets/host-meetup.jpg';

import {
  Container,
  MeetupImage,
  Title,
  Details,
  HorizontalContainer,
  TextDetails,
  SubscribeButton,
} from './styles';

export default function Meetup({ data, onSubscribe }) {
  const { title, description, user, file } = data;
  const dateFormatted = format(parseISO(data.date), "d 'de' MMMM', às' HH'h'", {
    locale: pt,
  });

  return (
    <Container>
      <MeetupImage source={{ uri: file ? file.url : '' }} />
      <Title>{title}</Title>
      <Details>
        <HorizontalContainer>
          <Icon name="event" color="#999" size={14} />
          <TextDetails>{dateFormatted}</TextDetails>
        </HorizontalContainer>
        <HorizontalContainer>
          <Icon name="place" color="#999" size={14} />
          <TextDetails>{description}</TextDetails>
        </HorizontalContainer>
        <HorizontalContainer>
          <Icon name="person" color="#999" size={14} />
          <TextDetails>Organizador: {user.name}</TextDetails>
        </HorizontalContainer>
      </Details>
      <SubscribeButton onPress={onSubscribe}>
        Realizar inscrição
      </SubscribeButton>
    </Container>
  );
}

Meetup.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    date: PropTypes.string,
    user: PropTypes.shape({
      name: PropTypes.string,
    }),
    file: PropTypes.shape({
      url: PropTypes.string,
    }),
  }).isRequired,
  onSubscribe: PropTypes.func.isRequired,
};
