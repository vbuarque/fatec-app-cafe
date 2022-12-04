import React, { useEffect, useState } from 'react';
import MenuItemCustom from '../../components/MenuItemCustom';
import CustomHeader from '../../components/CustomHeader';
import { Container, Scroll } from './styles';
import api from '../../services/api';
import { URI } from '../../services/uri';

type ClothesType = {
  imageUrl: string;
  name: string;
  description: string;
  money: String;
}

export function ClothesPets() {
  const [clothes, setClothes] = useState<ClothesType[]>([]);

  useEffect(() => {
    api
      .get(URI.PET_CLOTHES)
      .then(response => {
        setClothes(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  
    return (
        <>
        <CustomHeader title='Roupas e acessórios'/>
        <Scroll>
          <Container>
            {clothes.map((clothes: ClothesType) => (
              <MenuItemCustom
              image={clothes.imageUrl}
              cash={'R$' + ' ' + clothes.money}
              subtitle={clothes.description}
              title={clothes.name}
            />
            ))}
          </Container>
        </Scroll>
        </>
    )
}