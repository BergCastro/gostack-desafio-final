import React, { useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import PropTypes from 'prop-types';
import { Form, Input, FileInput } from '@rocketseat/unform';
import { Link, useHistory } from 'react-router-dom';
import { MdCreate, MdDeleteForever, MdEvent, MdRoom } from 'react-icons/md';
import api from '~/services/api';
import BannerInput from './BannerInput';
import DatePicker from '~/components/ReactDatePicker';
import { Container } from './styles';
import { createMeetupRequest } from '~/store/modules/meetup/actions';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
export default function NovoMeetup() {
  const currentMeetup = useSelector(state => state.meetup.currentMeetup);

  // const meetup = {
  //   ...currentMeetup,
  //   date: parseISO(currentMeetup.date),
  // };
  const history = useHistory();
  const dispatch = useDispatch();

  function handleSubmit(meetup) {
    dispatch(createMeetupRequest(meetup));
  }

  const schema = Yup.object().shape({
    file_id: Yup.number(),
    title: Yup.string().required('Um título é requerido'),
    date: Yup.date().required('Uma data válida é requerida'),
    location: Yup.string().required('Uma localização é requerida'),
    description: Yup.string().required('Uma descrição é requerida'),
  });

  function handleProgress(progress, event) {}
  return (
    <Container>
      <Form
        initialData={currentMeetup}
        onSubmit={handleSubmit}
        schema={schema}
        autocomplete="off"
      >
        <BannerInput name="file_id" />

        <Input name="title" placeholder="Título do Meetup" />
        <Input multiline name="description" placeholder="Descricao completa" />
        {/* <Input name="date" placeholder="Data do meetup" /> */}
        <DatePicker name="date" />
        <Input name="location" placeholder="Localização" />

        <button id="btnUpdate" type="submit">
          Salvar meetup
        </button>
      </Form>
    </Container>
  );
}
