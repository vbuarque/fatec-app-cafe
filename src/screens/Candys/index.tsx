import React, { useEffect, useState } from "react";
import CustomHeader from "../../components/CustomHeader";
import MenuItemCustom from "../../components/MenuItemCustom";
import api from "../../services/api";
import { URI } from "../../services/uri";
import { Container, Scroll } from "./styles";

const Img2 = require("../../assets/images/MockImageCookie.jpg");


type CandysType = {
  imageUrl: string;
  name: string;
  description: string;
  money: String;
}

export function CandyStore() {
  const [candys, setCandys] = useState<CandysType[]>([]);

  useEffect(() => {
    api
      .get(URI.CANDY_SHOP)
      .then(response => {
        setCandys(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <CustomHeader title="Doces" />
      <Scroll>
        <Container>
          {candys.map((candy: CandysType) => (
              <MenuItemCustom
              image={candy.imageUrl}
              cash={'R$' + ' ' + candy.money}
              subtitle={candy.description}
              title={candy.name}
            />
          ))}
        </Container>
      </Scroll>
    </>
  );
}
