import React from "react";
import { HStack, Text } from "native-base";

import {
  Container,
  ImageLogin,
  ContainerImage,
  ContainerButton,
  ContainerText,
  TextPink,
  MainText,
} from "./styles"

import Logo from "../../assets/icons/LogoMiau.svg";
import ImageCat from "../../assets/images/catImageLogin.png";
import GoogleLogo from "../../assets/icons/googleIcon.svg";
import FacebookLogo from "../../assets/icons/facebookIcon.svg";

import { useAuth } from "../../hooks/useAuth";
import { Button } from "native-base";

export function Login() {
  const { signIn, appIsLoading } = useAuth();

  return (
    <Container>
      <Logo />
      <ContainerImage>
        <ImageLogin source={ImageCat} />
      </ContainerImage>

      <ContainerText>
        <MainText>
          <TextPink>Tome um cafézinho</TextPink> enquanto
        </MainText>

        <MainText>
          faz <TextPink>carinho</TextPink> nos
        </MainText>

        <MainText>
          <TextPink>gatinhos.</TextPink>
        </MainText>
      </ContainerText>

      <ContainerButton>
        <Button
          borderRadius={3}
          bgColor={'#ffffff'}
          borderColor={'#e1e1e1'}
          borderWidth={1}
          isLoading={appIsLoading}
          isLoadingText={'Carregando...'}
          _text={{ color: 'red.500' }}
          _spinner={{ color: 'red.500' }}
          marginBottom={2}
          onPress={signIn}
        >
          <HStack 
          alignItems="center"
          space={130}
          >
            <GoogleLogo />
            <Text color={'#29292e'}>Faça login no Google</Text>
          </HStack>
        </Button>

        <Button
          _icon={{ color: 'white' }}
          borderRadius={3}
          bgColor={'#1877F2'}
          borderColor={'#e1e1e1'}
          borderWidth={1}
          _spinner={{ color: 'red.500' }}
          marginBottom={2}
        >
          <HStack space={100} alignItems="center">
          <FacebookLogo />
            <Text color={'#ffffff'}>Continuar com o Facebook</Text>
          </HStack>
        </Button>
      </ContainerButton>
    </Container>
  );
}