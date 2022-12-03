import React from 'react';
import MenuItemCustom from '../../components/MenuItemCustom';
import CustomHeader from '../../components/CustomHeader';
import { Container, Scroll } from './styles';


const Img2 = require("../../assets/images/Coffee_Cup_Mockup_1.jpg");

export function Coffee() {
  return (
    <>
    <CustomHeader title='Cafés'/>
    <Scroll>
      <Container> 
        <MenuItemCustom image={'https://cdn.pixabay.com/photo/2017/06/14/03/00/coffe-2400874__340.jpg'} cash='R$ 13,99' subtitle='Café feito de expresso com um pouco de café e uma pitada de café' title='Café expresso'/>

        
      </Container>
    </Scroll>
    </>
  );
}