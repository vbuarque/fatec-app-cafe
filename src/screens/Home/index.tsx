import {
  Container,
  Header,
  TextUserName,
  ImageProduct,
  Head,
  Categories,
  GridButton,
  CoffeeSlider,
  ButtonWidth
} from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Avatar } from "native-base";
import { Coffee, Cat, Cookie, Heart } from 'phosphor-react-native';
import { CategoriesButton } from '../../components/CategoriesButton';
import { CoffeeComponentSlider } from '../../components/CoffeeComponentSlider';

const Img = require("../../assets/images/imgMockProduct.jpg");
const Img2 = require("../../assets/images/CoffeeMockImage.png");

export function Home() {
  const navigation = useNavigation()

  function handleNavigateToCoffee() {
    navigation.navigate('Coffee')
  }

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
            <ButtonWidth>
              <CategoriesButton
                icon={Coffee}
                title={'Café'}

                onPress={() => navigation.navigate('Coffee')}
              />
            </ButtonWidth>
            <ButtonWidth>
              <CategoriesButton
                icon={Cat}
                title={'Pet'}

                onPress={() => navigation.navigate('Pets')}
              />
            </ButtonWidth>
          </GridButton>
        

          <GridButton>
          <ButtonWidth>
            <CategoriesButton
              icon={Cookie}
              title={'Doces'}

              onPress={() => navigation.navigate('CandyStore')}
            />
          </ButtonWidth>
          <ButtonWidth>
            <CategoriesButton
              icon={Heart}
              title={'Outros'}

              onPress={() => navigation.navigate('Adopt')}
            />
          </ButtonWidth>
          </GridButton>
        </Categories>
        <Head>Cafés mais pedidos</Head>
        <CoffeeSlider horizontal={true} showsHorizontalScrollIndicator={false}>
          <CoffeeComponentSlider image={Img2} />
          <CoffeeComponentSlider image={Img2} />
          <CoffeeComponentSlider image={Img2} />
          <CoffeeComponentSlider image={Img2} />
          <CoffeeComponentSlider image={Img2} />
          <CoffeeComponentSlider image={Img2} />
        </CoffeeSlider>
      </Container>
  );
}