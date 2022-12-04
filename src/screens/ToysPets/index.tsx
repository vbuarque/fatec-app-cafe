import React, { useEffect, useState } from 'react';

import api from '../../services/api';
import { URI } from '../../services/uri';

import MenuItemCustom from '../../components/MenuItemCustom';
import CustomHeader from '../../components/CustomHeader';
import { Container, Scroll } from './styles';

type ToysProps = {
  name: string;
  money: string;
  description: string;
  imageUrl: string;
}

export function ToysPets() {
  const [toys, setToys] = useState<ToysProps[]>([]);

  useEffect(() => {
    api
      .get(URI.PET_TOYS)
      .then(response => {
        setToys(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);


    return (
        <>
        <CustomHeader title='Brinquedos e acessórios'/>
        <Scroll>
          <Container>
          {toys.map((toy: ToysProps) => (
            <MenuItemCustom
            cash={'R$' + ' ' + toy.money}
            image={toy.imageUrl}
            title={toy.name}
            subtitle={toy.description}
            />
          ))}
          </Container>
        </Scroll>
        </>
    )
}