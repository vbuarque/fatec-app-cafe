import React from 'react';
import { Text } from 'react-native';
import CustomHeader from '../../components/CustomHeader';
import { Container } from './styles';

export function Adopt() {
  return (
    <Container>
      <CustomHeader title='Adoção'/>
        <Text>Adopt</Text>
    </Container>
  );
}