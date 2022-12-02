import React from 'react';
import MenuItemCustom from '../../components/MenuItemCustom';
import CustomHeader from '../../components/CustomHeader';
import { Container, Scroll } from './styles';

const Img2 = require("../../assets/images/soccer-squeak-balls.webp");

export function ToysPets() {
    return (
        <>
        <CustomHeader title='Brinquedos e acessórios'/>
        <Scroll>
          <Container>
            <MenuItemCustom image={Img2} cash='R$ 9,99' subtitle='Bolinha de borracha para seu pet morder até não aguentar mais' title='Bolinha de borracha'/>

            <MenuItemCustom image={Img2} cash='R$ 9,99' subtitle='Bolinha de borracha para seu pet morder até não aguentar mais' title='Bolinha de borracha'/>

            <MenuItemCustom image={Img2} cash='R$ 9,99' subtitle='Bolinha de borracha para seu pet morder até não aguentar mais' title='Bolinha de borracha'/>

            <MenuItemCustom image={Img2} cash='R$ 9,99' subtitle='Bolinha de borracha para seu pet morder até não aguentar mais' title='Bolinha de borracha'/>

            <MenuItemCustom image={Img2} cash='R$ 9,99' subtitle='Bolinha de borracha para seu pet morder até não aguentar mais' title='Bolinha de borracha'/>

            <MenuItemCustom image={Img2} cash='R$ 9,99' subtitle='Bolinha de borracha para seu pet morder até não aguentar mais' title='Bolinha de borracha'/>

            <MenuItemCustom image={Img2} cash='R$ 9,99' subtitle='Bolinha de borracha para seu pet morder até não aguentar mais' title='Bolinha de borracha'/>

            <MenuItemCustom image={Img2} cash='R$ 9,99' subtitle='Bolinha de borracha para seu pet morder até não aguentar mais' title='Bolinha de borracha'/>

            <MenuItemCustom image={Img2} cash='R$ 9,99' subtitle='Bolinha de borracha para seu pet morder até não aguentar mais' title='Bolinha de borracha'/>

            <MenuItemCustom image={Img2} cash='R$ 9,99' subtitle='Bolinha de borracha para seu pet morder até não aguentar mais' title='Bolinha de borracha'/>

            <MenuItemCustom image={Img2} cash='R$ 9,99' subtitle='Bolinha de borracha para seu pet morder até não aguentar mais' title='Bolinha de borracha'/>

            <MenuItemCustom image={Img2} cash='R$ 9,99' subtitle='Bolinha de borracha para seu pet morder até não aguentar mais' title='Bolinha de borracha'/>
          </Container>
        </Scroll>
        </>
    )
}