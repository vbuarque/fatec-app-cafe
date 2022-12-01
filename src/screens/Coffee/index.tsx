import React from 'react';
import CoffeeItem from '../../components/CoffeeItem';
import CustomHeader from '../../components/CustomHeader';
import { Container, Scroll } from './styles';


const Img2 = require("../../assets/images/Coffee_Cup_Mockup_1.jpg");

export function Coffee() {
  return (
    <>
    <CustomHeader title='Cafés'/>
    <Scroll>
      <Container>
        <CoffeeItem image={Img2} cash='R$ 13,99' subtitle='Café feito de expresso com um pouco de café e uma pitada de café' title='Café expresso'/>

        <CoffeeItem image={Img2} cash='R$ 13,99' subtitle='Café feito de expresso com um pouco de café e uma pitada de café' title='Café expresso'/>

        <CoffeeItem image={Img2} cash='R$ 13,99' subtitle='Café feito de expresso com um pouco de café e uma pitada de café' title='Café expresso'/>

        <CoffeeItem image={Img2} cash='R$ 13,99' subtitle='Café feito de expresso com um pouco de café e uma pitada de café' title='Café expresso'/>

        <CoffeeItem image={Img2} cash='R$ 13,99' subtitle='Café feito de expresso com um pouco de café e uma pitada de café' title='Café expresso'/>

        <CoffeeItem image={Img2} cash='R$ 13,99' subtitle='Café feito de expresso com um pouco de café e uma pitada de café' title='Café expresso'/>

        <CoffeeItem image={Img2} cash='R$ 13,99' subtitle='Café feito de expresso com um pouco de café e uma pitada de café' title='Café expresso'/>

        <CoffeeItem image={Img2} cash='R$ 13,99' subtitle='Café feito de expresso com um pouco de café e uma pitada de café' title='Café expresso'/>

        <CoffeeItem image={Img2} cash='R$ 13,99' subtitle='Café feito de expresso com um pouco de café e uma pitada de café' title='Café expresso'/>

        <CoffeeItem image={Img2} cash='R$ 13,99' subtitle='Café feito de expresso com um pouco de café e uma pitada de café' title='Café expresso'/>

        <CoffeeItem image={Img2} cash='R$ 13,99' subtitle='Café feito de expresso com um pouco de café e uma pitada de café' title='Café expresso'/>

        <CoffeeItem image={Img2} cash='R$ 13,99' subtitle='Café feito de expresso com um pouco de café e uma pitada de café' title='Café expresso'/>

        <CoffeeItem image={Img2} cash='R$ 13,99' subtitle='Café feito de expresso com um pouco de café e uma pitada de café' title='Café expresso'/>

        <CoffeeItem image={Img2} cash='R$ 13,99' subtitle='Café feito de expresso com um pouco de café e uma pitada de café' title='Café expresso'/>

        <CoffeeItem image={Img2} cash='R$ 13,99' subtitle='Café feito de expresso com um pouco de café e uma pitada de café' title='Café expresso'/>

        <CoffeeItem image={Img2} cash='R$ 13,99' subtitle='Café feito de expresso com um pouco de café e uma pitada de café' title='Café expresso'/>

      </Container>
    </Scroll>
    </>
  );
}