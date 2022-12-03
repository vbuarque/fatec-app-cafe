import React from 'react';
import CustomHeader from '../../components/CustomHeader';
import MenuItemCustom from '../../components/MenuItemCustom';
import { Container, Scroll } from './styles';

const ImgCat = require('../../assets/images/MockImagePetAdoptCat.webp');

const ImgCat2 = require('../../assets/images/MockImagePetAdoptCat2.webp');

const ImgCat3 = require('../../assets/images/MockImagePetAdoptCat3.png');

import { faker } from '@faker-js/faker';

export function Adopt() {
  return (
    <> 
      <CustomHeader title='Adoção'/>  
      <Scroll>
          <Container>
            <MenuItemCustom image={faker.image.cats(0,0,true)} subtitle='Gatinho fofo e bem calminho' title={faker.animal.cat()}/>
            <MenuItemCustom image={faker.image.food(0,0,true)} subtitle='Gatinho fofo e bem calminho' title={faker.animal.cat()}/>
            <MenuItemCustom image={faker.image.cats(0,0,true)} subtitle='Gatinho fofo e bem calminho' title={faker.animal.cat()}/>
            <MenuItemCustom image={faker.image.cats(0,0,true)} subtitle='Gatinho fofo e bem calminho' title={faker.animal.cat()}/>
            <MenuItemCustom image={faker.image.cats(0,0,true)} subtitle='Gatinho fofo e bem calminho' title={faker.animal.cat()}/>
            <MenuItemCustom image={faker.image.cats(0,0,true)} subtitle='Gatinho fofo e bem calminho' title={faker.animal.cat()}/>
            <MenuItemCustom image={faker.image.cats(0,0,true)} subtitle='Gatinho fofo e bem calminho' title={faker.animal.cat()}/> 
            <MenuItemCustom image={faker.image.cats(0,0,true)} subtitle='Gatinho fofo e bem calminho' title={faker.animal.cat()}/>
            <MenuItemCustom image={faker.image.cats(0,0,true)} subtitle='Gatinho fofo e bem calminho' title={faker.animal.cat()}/>
            <MenuItemCustom image={faker.image.cats(0,0,true)} subtitle='Gatinho fofo e bem calminho' title={faker.animal.cat()}/>
            <MenuItemCustom image={faker.image.cats(0,0,true)} subtitle='Gatinho fofo e bem calminho' title={faker.animal.cat()}/>
            <MenuItemCustom image={faker.image.cats(0,0,true)} subtitle='Gatinho fofo e bem calminho' title={faker.animal.cat()}/>
          </Container>
        </Scroll>
    </>
  );
}