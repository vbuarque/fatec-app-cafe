import React, {useState, useEffect} from 'react';
import MenuItemCustom from '../../components/MenuItemCustom';
import CustomHeader from '../../components/CustomHeader';
import { Container, Scroll } from './styles';
import api from '../../services/api';
import { URI } from '../../services/uri';

type FoodType = {
  imageUrl: string;
  name: string;
  description: string;
  money: String;
}

export function FoodPets() {
  const [foods, setFoods] = useState<FoodType[]>([]);

  useEffect(() => {
    api
      .get(URI.PET_FOOD)
      .then(response => {
        setFoods(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <>
    <CustomHeader title='Comidas e petiscos'/>
    <Scroll>
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
    </Scroll>
    </>
  );
}