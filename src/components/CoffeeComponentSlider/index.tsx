import {CoffeComponent, ImageCoffee} from './styles';

type Props = {
    image: object;
}

export function CoffeeComponentSlider({image}: Props) {
  return (
    <CoffeComponent>
        <ImageCoffee  source={image}/>
    </CoffeComponent>
  );
}