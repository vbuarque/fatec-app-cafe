import React from 'react';
import CustomHeader from '../../components/CustomHeader';
import MenuItemCustom from '../../components/MenuItemCustom';
import { Container, Scroll } from './styles';

const ImgCat = require('../../assets/images/MockImagePetAdoptCat.webp');

const ImgCat2 = require('../../assets/images/MockImagePetAdoptCat2.webp');

const ImgCat3 = require('../../assets/images/MockImagePetAdoptCat3.png');

export function Adopt() {
  return (
    <>
      <CustomHeader title='Adoção'/>  
      <Scroll>
          <Container>
            <MenuItemCustom image={ImgCat} subtitle='Gatinho fofo e bem calminho' title='Gato Aristoteles'/>

            <MenuItemCustom image={ImgCat2} subtitle='Gatinho fofo e bem calminho' title='Gato Platão'/>

            <MenuItemCustom image={ImgCat3} subtitle='Gatinho fofo e bem calminho' title='Gato Aroldo'/>

            <MenuItemCustom image={ImgCat} subtitle='Gatinho fofo e bem calminho' title='Gato Aristoteles'/>

            <MenuItemCustom image={ImgCat2} subtitle='Gatinho fofo e bem calminho' title='Gato Platão'/>

            <MenuItemCustom image={ImgCat3} subtitle='Gatinho fofo e bem calminho' title='Gato Aroldo'/>

            <MenuItemCustom image={ImgCat} subtitle='Gatinho fofo e bem calminho' title='Gato Aristoteles'/>

            <MenuItemCustom image={ImgCat2} subtitle='Gatinho fofo e bem calminho' title='Gato Platão'/>

            <MenuItemCustom image={ImgCat3} subtitle='Gatinho fofo e bem calminho' title='Gato Aroldo'/>
          </Container>
        </Scroll>
    </>
  );
}