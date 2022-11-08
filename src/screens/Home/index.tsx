import {
  Container,
  Header,
  TextUserName,
  ImageProduct,
  Head,
  Categories,
  GridButton,
  CoffeeSlider
} from "./styles";

import { Avatar } from "native-base";
import { Coffee, Cat, Cookie, Heart } from 'phosphor-react-native';
import { CategorieButton } from '../../components/CategorieButton';
import { CoffeeComponentSlider } from '../../components/CoffeeComponentSlider';

const Img = require("../../assets/images/imgMockProduct.jpg");
const Img2 = require("../../assets/images/CoffeeMockImage.png");

export function Home() {
  return (
    <Container>
      <Header>
        <TextUserName>Ola Vinicius</TextUserName>
        <Avatar borderColor={'#F292A9'} borderWidth={2}>VB</Avatar>
      </Header>
      <ImageProduct source={Img} />
      <Head>Categorias</Head>
      <Categories>
        <GridButton>
          <CategorieButton title="Cafés" icon={Coffee} />
          <CategorieButton title="Doceria" icon={Cookie} />
        </GridButton>
        <GridButton>
          <CategorieButton title="Para o seu pet" icon={Cat} />
          <CategorieButton title="Adote" icon={Heart} />
        </GridButton>
      </Categories>
      <Head>Cafés mais pedidos</Head>
      <CoffeeSlider horizontal={true} showsHorizontalScrollIndicator={false}>
        <CoffeeComponentSlider  image={Img2}/>
        <CoffeeComponentSlider  image={Img2}/>
        <CoffeeComponentSlider  image={Img2}/>
        <CoffeeComponentSlider  image={Img2}/>
        <CoffeeComponentSlider  image={Img2}/>
        <CoffeeComponentSlider  image={Img2}/>
      </CoffeeSlider>
    </Container>
  );
}