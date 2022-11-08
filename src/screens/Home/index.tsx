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
import { useNavigation } from "@react-navigation/native";
import { Avatar, ScrollView } from "native-base";
import { Coffee, Cat, Cookie, Heart } from 'phosphor-react-native';
import { CategoriesButton } from '../../components/CategoriesButton';
import { CoffeeComponentSlider } from '../../components/CoffeeComponentSlider';

const Img = require("../../assets/images/imgMockProduct.jpg");
const Img2 = require("../../assets/images/CoffeeMockImage.png");

export function Home() {
  const navigation = useNavigation();

  function openScreenCandy() {
    navigation.navigate('CandyStore');
  }

  return (
    <ScrollView>
      <Container>
        <Header>
          <TextUserName>Ola Vinicius</TextUserName>
          <Avatar borderColor={'#F292A9'} borderWidth={2}>VB</Avatar>
        </Header>
        <ImageProduct source={Img} />
        <Head>Categorias</Head>
        <Categories>
          <GridButton>
            <CategoriesButton title="Cafés" icon={Coffee}/>
            <CategoriesButton title="Doceria" icon={Cookie} onPress={openScreenCandy}/>
          </GridButton>
          <GridButton>
            <CategoriesButton title="Para o seu pet" icon={Cat} />
            <CategoriesButton title="Adote" icon={Heart}/>
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
    </ScrollView>
  );
}