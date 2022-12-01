import React from 'react';
import { Text } from 'react-native';
import CustomHeader from '../../components/CustomHeader';
import { Container } from './styles';

export function Profile() {
  return (
    <Container>
      <CustomHeader title='Perfil'/>
        <Text>Profile</Text>
    </Container>
  );
}