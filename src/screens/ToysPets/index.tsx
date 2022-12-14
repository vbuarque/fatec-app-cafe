import React, { useEffect, useState } from 'react';

import api from '../../services/api';
import { URI } from '../../services/uri';

import MenuItemCustom from '../../components/MenuItemCustom';
import CustomHeader from '../../components/CustomHeader';
import { Container, Scroll } from './styles';
import { LoadingItems } from '../../components/LoadingItems';

type ToysProps = {
  name: string;
  money: string;
  description: string;
  imageUrl: string;
  id: number;
}

export function ToysPets() {
  const [toys, setToys] = useState<ToysProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get(URI.PET_TOYS)
      .then(response => {
        setLoading(false);
        setToys(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);


  return (
    <>
      <CustomHeader title='Brinquedos e acessórios' />
      {loading ? (
        <LoadingItems title='Carregando brinquedos e acessórios...' />
      ) : (
        <Scroll>
          <Container>
            {toys.map((toy: ToysProps, index) => (
              <MenuItemCustom
                key={index}
                cash={'R$' + ' ' + toy.money}
                image={toy.imageUrl}
                title={toy.name}
                subtitle={toy.description}
              />
            ))}
          </Container>
        </Scroll>
      )}
    </>
  )
}