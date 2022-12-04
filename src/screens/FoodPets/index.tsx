import React, {useState, useEffect} from 'react';
import MenuItemCustom from '../../components/MenuItemCustom';
import CustomHeader from '../../components/CustomHeader';
import { Container, Scroll } from './styles';
import api from '../../services/api';
import { URI } from '../../services/uri';

import { LoadingItems } from '../../components/LoadingItems';

type FoodType = {
  imageUrl: string;
  name: string;
  description: string;
  money: String;
}

export function FoodPets() {
  const [foods, setFoods] = useState<FoodType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get(URI.PET_FOOD)
      .then(response => {
        setLoading(false);
        setFoods(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <>
    <CustomHeader title='Comidas e petiscos'/>
    {loading ? 
    (<LoadingItems title='Carregando comidas e petiscos...'/>)
    :
    (<Scroll>
      <Container>
      
            {foods.map((food: FoodType) => (
              <MenuItemCustom
              image={food.imageUrl}
              cash={'R$' + ' ' + food.money}
              subtitle={food.description}
              title={food.name}
            />
            ))}
      </Container>
    </Scroll>)}
    </>
  );
}