import React, { useContext } from "react";
import { Text } from "native-base";

import {
  Container,
  ImageLogin,
  ContainerImage,
  StyledButtonGoogle,
  StyledButtonFacebook,
  StyledText,
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
        <ImageLogin source={ImageCat}/>
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
        {/* <StyledButtonGoogle onPress={signIn}>
          <GoogleLogo />
          <Text>Faça login no Google</Text>
        </StyledButtonGoogle> */}
        <Button 
          leftIcon={<GoogleLogo/>}
          borderRadius={3}
          bgColor={'#ffffff'}
          borderColor={'#e1e1e1'}
          borderWidth={1}
          isLoading={appIsLoading}
          _spinner={{ color: 'red.500' }}
          marginBottom={2}
          onPress={signIn}
        >
          <Text color={'#29292e'}>Faça login no Google</Text>
        </Button>

        <StyledButtonFacebook>
          <FacebookLogo />
          <StyledText>Continuar com o facebook</StyledText>
        </StyledButtonFacebook>
      </ContainerButton>
    </Container>
  );
}