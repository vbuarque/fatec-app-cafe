import { Image } from "react-native";
import { 
Container, 
TitleButton, 
ButtonCustom, 
ImageCustom
} from "./styles";

type ButtonPetsTypes = {
  title: string;
  img?: string;
  onPress?: () => void;
};

export default function CategoriesButtonPets({ title, img, onPress }: ButtonPetsTypes) {
  return (
    <Container>
      <TitleButton>{title}</TitleButton>
      <ButtonCustom onPress={onPress}>
        <ImageCustom resizeMode="cover" source={img} />
      </ButtonCustom>
    </Container>
  );
}
