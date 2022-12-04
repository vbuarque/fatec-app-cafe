import React, { useEffect, useState } from 'react';
import MenuItemCustom from '../../components/MenuItemCustom';
import CustomHeader from '../../components/CustomHeader';
import { Container, Scroll } from './styles';
import api from '../../services/api';
import { URI } from '../../services/uri';
import { Heading, HStack, Spinner } from 'native-base';
import { LoadingItems } from '../../components/LoadingItems';

type CoffeeType = {
  name: string;
  money: number;
  description: string;
  imageUrl: string;
}

export function Coffee() {
  const [coffees, setCoffee] = useState<CoffeeType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get(URI.COFFEE_SHOP)
      .then(response => {
        setLoading(false);
        setCoffee(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <CustomHeader title='Cafés' />
      {loading ? (
        <LoadingItems title='Carregando cafés...' />
      ) :
        (
          <Scroll>
            <Container>
              {coffees.map((coffee: CoffeeType) => (
                <MenuItemCustom
                  cash={'R$' + ' ' + coffee.money}
                  image={coffee.imageUrl}
                  title={coffee.name}
                  subtitle={coffee.description}
                />
              ))}
            </Container>
          </Scroll>
        )}
    </>
  );
}