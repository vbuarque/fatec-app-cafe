import React, { useState, useEffect } from 'react';
import MenuItemCustom from '../../components/MenuItemCustom';
import CustomHeader from '../../components/CustomHeader';
import { Container, Scroll } from './styles';
import api from '../../services/api';
import { URI } from '../../services/uri';
import { LoadingItems } from '../../components/LoadingItems';

type HealthType = {
  imageUrl: string;
  name: string;
  description: string;
  money: String;
}

export function HealthPets() {
  const [healths, setHealths] = useState<HealthType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get(URI.PET_HEALTH)
      .then(response => {
        setLoading(false);
        setHealths(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <CustomHeader title='Saúde do pet' />
      {loading ? 
      (<LoadingItems title='Carregando saúde do pet...' />)
        :
        (<Scroll>
          <Container>
            {healths.map((health: HealthType) => (
            <MenuItemCustom
              image={health.imageUrl}
              cash={'R$' + ' ' + health.money}
              subtitle={health.description}
              title={health.name}
            />
            ))}
          </Container>
        </Scroll>)}
    </>
  )
}