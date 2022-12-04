import React, { useEffect, useState } from 'react';
import MenuItemCustom from '../../components/MenuItemCustom';
import CustomHeader from '../../components/CustomHeader';
import { Container, Scroll } from './styles';
import api from '../../services/api';
import { URI } from '../../services/uri';

const Img2 = require("../../assets/images/soccer-squeak-balls.webp");

type ToysPetsProps = {
  name: string;
  money: string;
  description: string;
  imageUrl: string;
}


export function ToysPets() {
  const [coffees, setCoffee] = useState<ToysPetsProps[]>([]);

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
        <CustomHeader title='Brinquedos e acessórios'/>
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
    )
}