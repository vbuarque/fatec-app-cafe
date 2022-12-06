import React, { useEffect, useState } from "react";
import CustomHeader from "../../components/CustomHeader";
import MenuItemCustom from "../../components/MenuItemCustom";
import api from "../../services/api";
import { URI } from "../../services/uri";
import { Container, Scroll } from "./styles";
import { Heading, HStack, Spinner } from 'native-base';
import { LoadingItems } from "../../components/LoadingItems";

type CandysType = {
  imageUrl: string;
  name: string;
  description: string;
  money: String;
  id: number;
}

export function CandyStore() {
  const [candys, setCandys] = useState<CandysType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get(URI.CANDY_SHOP)
      .then(response => {
        setLoading(false);
        setCandys(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <CustomHeader title="Doces" />
      {loading ? (
        <LoadingItems title='Carregando doces...' />
      ) : (
        <Scroll>
          <Container>
            {candys.map((candy: CandysType, index) => (
              <MenuItemCustom
                key={index}
                image={candy.imageUrl}
                cash={'R$' + ' ' + candy.money}
                subtitle={candy.description}
                title={candy.name}
              />
            ))}
          </Container>
        </Scroll>
      )}
    </>
  );
}
