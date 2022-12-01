import React from 'react';
import { Text } from 'react-native';
import CustomHeader from '../../components/CustomHeader';
import { Container } from './styles';

export function Pets() {
  return (
    <Container>
      <CustomHeader title='Para o seu pet'/>
        <Text>Pets</Text>
    </Container>
  );
}