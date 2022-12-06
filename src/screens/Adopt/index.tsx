import React, {useState, useEffect} from 'react';
import CustomHeader from '../../components/CustomHeader';
import MenuItemCustom from '../../components/MenuItemCustom';
import { Container, Scroll } from './styles';
import api from '../../services/api';
import { URI } from '../../services/uri';
import { LoadingItems } from '../../components/LoadingItems';
import AdoptCard from '../../components/AdoptCard';

type AdoptType = {
  imageUrl: string;
  name: string;
  description: string;
  id: number;
}

export function Adopt() {
  const [adopt, setAdopt] = useState<AdoptType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      api
      .get(URI.PET_ADOPT)
      .then(response => {
        setLoading(false);
        setAdopt(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <> 
      <CustomHeader title='Adoção'/>  
      {loading ? (
            <LoadingItems 
              title='Carregando animais para adoção...'
            />
          ) : (
      <Scroll>
          <Container>
           {adopt.map((adopt: AdoptType, index) => (
              <AdoptCard
                key={index}
                image={adopt.imageUrl}
                title={adopt.name}
                subtitle={adopt.description}
              />
           ))}
          </Container>
        </Scroll>
        )}
    </>
  );
}