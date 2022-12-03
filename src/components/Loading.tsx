import { HStack, VStack, Spinner, Heading } from 'native-base';
import CatLogo from '../assets/icons/CatLogo.svg';

export function Loading() {
  return (
    <VStack flex={1} bg="#F292A9"  space={2} alignItems="center" justifyContent="center" >
      <CatLogo/>
      <HStack space={2} justifyContent="center" alignItems="center">
        <Heading color="#f8f8f8" fontSize="md">
          Carregando
        </Heading>
        <Spinner color="#f8f8f8" />
      </HStack>
    </VStack>
  );
}