import React from 'react';
import MenuItemCustom from '../../components/MenuItemCustom';
import CustomHeader from '../../components/CustomHeader';
import { Container, Scroll } from './styles';

const Img2 = require("../../assets/images/MockImagePetClothes2.webp");

export function ClothesPets() {
    return (
        <>
        <CustomHeader title='Roupas e acessórios'/>
        <Scroll>
          <Container>
            <MenuItemCustom image={Img2} cash='R$ 13,99' subtitle='Um lindo cachecol para seu pet se esquentar no frio' title='Cachecol'/>
          </Container>
        </Scroll>
        </>
    )
}