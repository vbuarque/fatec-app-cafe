import React, { useEffect, useState } from 'react';
import MenuItemCustom from '../../components/MenuItemCustom';
import CustomHeader from '../../components/CustomHeader';
import { Container, Scroll } from './styles';
import api from '../../services/api';
import { URI } from '../../services/uri';
import { Heading, HStack, Spinner } from 'native-base';
import { LoadingItems } from '../../components/LoadingItems';

type ClothesType = {
  imageUrl: string;
  name: string;
  description: string;
  money: String;
  id: number;
}

export function ClothesPets() {
  const [clothes, setClothes] = useState<ClothesType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get(URI.PET_CLOTHES)
      .then(response => {
        setLoading(false);
        setClothes(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <CustomHeader title='Roupas e acessórios' />
      {loading ? (
        <LoadingItems title='Carregando brinquedos e acessórios...' />
      ) : (
        <Scroll>
          <Container>

            {clothes.map((clothes: ClothesType, index) => (
              <MenuItemCustom
                key={index}
                image={clothes.imageUrl}
                cash={'R$' + ' ' + clothes.money}
                subtitle={clothes.description}
                title={clothes.name}
              />
            ))}
          </Container>
        </Scroll>
      )}
    </>
  )
}