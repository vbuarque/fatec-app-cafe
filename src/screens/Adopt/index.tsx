import React, {useState, useEffect} from 'react';
import CustomHeader from '../../components/CustomHeader';
import MenuItemCustom from '../../components/MenuItemCustom';
import { Container, Scroll } from './styles';
import api from '../../services/api';
import { URI } from '../../services/uri';

type AdoptType = {
  imageUrl: string;
  name: string;
  description: string;
}

export function Adopt() {
  const [adopt, setAdopt] = useState<AdoptType[]>([]);

  useEffect(() => {
      api
      .get(URI.PET_ADOPT)
      .then(response => {
        setAdopt(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <> 
      <CustomHeader title='Adoção'/>  
      <Scroll>
          <Container>
            {adopt.map((adopt: AdoptType) => (
              <MenuItemCustom 
              image={adopt.imageUrl}
              title={adopt.name}
              subtitle={adopt.description}/>
            ))}
          </Container>
        </Scroll>
    </>
  );
}