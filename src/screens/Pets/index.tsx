
import { useNavigation } from '@react-navigation/native';
import CategoriesButtonPets from '../../components/CategoriesButtonPets';
import CustomHeader from '../../components/CustomHeader';
import { Container } from './styles';

const Img = require("../../assets/images/mock-up-dog-cat-food.webp");
const ImgClothes = require("../../assets/images/MockImagePetClothes.webp");
const ImgToys = require("../../assets/images/MockImagePetToys.webp");
const ImgVet = require("../../assets/images/MockImagePetVet.png"); 

export function Pets() {
  const navigation = useNavigation();
  
  return (
    <>
      <CustomHeader title='Para o seu pet'/>
      <Container>
        <CategoriesButtonPets title='Comidas e petiscos' img={Img} onPress={
          () => navigation.navigate('FoodPets')
        }/>
        <CategoriesButtonPets title='Brinquedos e Acessórios' img={ImgToys} onPress={
          () => navigation.navigate('ToysPets')
        }/>
        <CategoriesButtonPets title='Roupas' img={ImgClothes} onPress={
          () => navigation.navigate('ClothesPets')
        }/>
        <CategoriesButtonPets title='Saúde do pet' img={ImgVet} onPress={
          () => navigation.navigate('HealthPets')
        }/>
      </Container>
    </>
  );
}