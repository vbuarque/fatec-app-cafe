import React, { useEffect, useState } from 'react';
import MenuItemCustom from '../../components/MenuItemCustom';
import CustomHeader from '../../components/CustomHeader';
import { Container, Scroll } from './styles';
import api from '../../services/api';
import { URI } from '../../services/uri';

type CoffeeProps = {
  name: string;
  money: number;
  description: string;
  imageUrl: string;
}

export function Coffee() {
  const [coffees, setCoffee] = useState<CoffeeProps[]>([]);

  useEffect(() => {
    api
      .get(URI.COFFEE)
      .then(response => {
        setCoffee(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <CustomHeader title='Cafés' />
      <Scroll>
        <Container>
          {coffees.map((coffee: any) => (
            <MenuItemCustom
            cash={'R$' + ' ' + coffee.money}
            image={coffee.imageUrl}
            title={coffee.name}
            subtitle={coffee.description}
            />
          ))}
        </Container>
      </Scroll>
    </>
  );
}