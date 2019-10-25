import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { updateProfileRequest } from '~/store/modules/user/actions';

import { Container } from './styles';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Seu endereço de e-mail" />

        <hr />

        <Input
          type="text"
          className="password"
          name="oldPassword"
          placeholder="Sua senha atual"
        />
        <Input
          type="text"
          className="password"
          name="password"
          placeholder="Nova senha"
        />
        <Input
          type="text"
          className="password"
          name="password_confirmation"
          placeholder="Confirmação de senha"
        />

        <button type="submit">Salvar perfil</button>
      </Form>
    </Container>
  );
}
