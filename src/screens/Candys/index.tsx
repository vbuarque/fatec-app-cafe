import React from 'react';
import { Text } from 'react-native';
import CustomHeader from '../../components/CustomHeader';
import { Container } from './styles';

export function CandyStore() {
  return (
    <Container>
      <CustomHeader title='Doces'/>
      	<Text>Candys Store</Text>
    </Container>
  );
}