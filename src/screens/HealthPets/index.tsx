import React from 'react';
import MenuItemCustom from '../../components/MenuItemCustom';
import CustomHeader from '../../components/CustomHeader';
import { Container, Scroll } from './styles';

const Img2 = require("../../assets/images/MockImagePetVet2.webp");

export function HealthPets() {
    return (
        <>
        <CustomHeader title='Saúde do pet'/>
        <Scroll>
          <Container>
            <MenuItemCustom image={Img2} cash='R$ 13,99' subtitle='Kit de vitaminas especiais para seu Pet ser mais feliz' title='Kit Vitaminas'/>


            <MenuItemCustom image={Img2} cash='R$ 13,99' subtitle='Kit de vitaminas especiais para seu Pet ser mais feliz' title='Kit Vitaminas'/>

            <MenuItemCustom image={Img2} cash='R$ 13,99' subtitle='Kit de vitaminas especiais para seu Pet ser mais feliz' title='Kit Vitaminas'/>

            <MenuItemCustom image={Img2} cash='R$ 13,99' subtitle='Kit de vitaminas especiais para seu Pet ser mais feliz' title='Kit Vitaminas'/>

            <MenuItemCustom image={Img2} cash='R$ 13,99' subtitle='Kit de vitaminas especiais para seu Pet ser mais feliz' title='Kit Vitaminas'/>

            <MenuItemCustom image={Img2} cash='R$ 13,99' subtitle='Kit de vitaminas especiais para seu Pet ser mais feliz' title='Kit Vitaminas'/>

            <MenuItemCustom image={Img2} cash='R$ 13,99' subtitle='Kit de vitaminas especiais para seu Pet ser mais feliz' title='Kit Vitaminas'/>

            <MenuItemCustom image={Img2} cash='R$ 13,99' subtitle='Kit de vitaminas especiais para seu Pet ser mais feliz' title='Kit Vitaminas'/>

            <MenuItemCustom image={Img2} cash='R$ 13,99' subtitle='Kit de vitaminas especiais para seu Pet ser mais feliz' title='Kit Vitaminas'/>

            <MenuItemCustom image={Img2} cash='R$ 13,99' subtitle='Kit de vitaminas especiais para seu Pet ser mais feliz' title='Kit Vitaminas'/>

            <MenuItemCustom image={Img2} cash='R$ 13,99' subtitle='Kit de vitaminas especiais para seu Pet ser mais feliz' title='Kit Vitaminas'/>

            <MenuItemCustom image={Img2} cash='R$ 13,99' subtitle='Kit de vitaminas especiais para seu Pet ser mais feliz' title='Kit Vitaminas'/>

            <MenuItemCustom image={Img2} cash='R$ 13,99' subtitle='Kit de vitaminas especiais para seu Pet ser mais feliz' title='Kit Vitaminas'/>
            
          </Container>
        </Scroll>
        </>
    )
}