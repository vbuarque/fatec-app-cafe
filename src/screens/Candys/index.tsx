import React from "react";
import CustomHeader from "../../components/CustomHeader";
import MenuItemCustom from "../../components/MenuItemCustom";
import { Container, Scroll } from "./styles";

const Img2 = require("../../assets/images/MockImageCookie.jpg");

export function CandyStore() {
  return (
    <>
      <CustomHeader title="Doces" />
      <Scroll>
        <Container>
          <MenuItemCustom
            image={Img2}
            cash="R$ 5,99"
            subtitle="Cookie feito a mão, especialmente para amantes de chocolate alpino"
            title="Cookie de alpino"
          />

          <MenuItemCustom
            image={Img2}
            cash="R$ 5,99"
            subtitle="Cookie feito a mão, especialmente para amantes de chocolate alpino"
            title="Cookie de alpino"
          />

          <MenuItemCustom
            image={Img2}
            cash="R$ 5,99"
            subtitle="Cookie feito a mão, especialmente para amantes de chocolate alpino"
            title="Cookie de alpino"
          />

          <MenuItemCustom
            image={Img2}
            cash="R$ 5,99"
            subtitle="Cookie feito a mão, especialmente para amantes de chocolate alpino"
            title="Cookie de alpino"
          />

          <MenuItemCustom
            image={Img2}
            cash="R$ 5,99"
            subtitle="Cookie feito a mão, especialmente para amantes de chocolate alpino"
            title="Cookie de alpino"
          />

          <MenuItemCustom
            image={Img2}
            cash="R$ 5,99"
            subtitle="Cookie feito a mão, especialmente para amantes de chocolate alpino"
            title="Cookie de alpino"
          />

          <MenuItemCustom
            image={Img2}
            cash="R$ 5,99"
            subtitle="Cookie feito a mão, especialmente para amantes de chocolate alpino"
            title="Cookie de alpino"
          />

          <MenuItemCustom
            image={Img2}
            cash="R$ 5,99"
            subtitle="Cookie feito a mão, especialmente para amantes de chocolate alpino"
            title="Cookie de alpino"
          />

          <MenuItemCustom
            image={Img2}
            cash="R$ 5,99"
            subtitle="Cookie feito a mão, especialmente para amantes de chocolate alpino"
            title="Cookie de alpino"
          />

          <MenuItemCustom
            image={Img2}
            cash="R$ 5,99"
            subtitle="Cookie feito a mão, especialmente para amantes de chocolate alpino"
            title="Cookie de alpino"
          />

          <MenuItemCustom
            image={Img2}
            cash="R$ 5,99"
            subtitle="Cookie feito a mão, especialmente para amantes de chocolate alpino"
            title="Cookie de alpino"
          />
        </Container>
      </Scroll>
    </>
  );
}
