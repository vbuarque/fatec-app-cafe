import React from "react";
import {
  Container,
  Image,
  ContainerImage,
  StyledButtonGoogle,
  StyledButtonFacebook,
  StyledText,
  ContainerButton,
  ContainerText,
  TextPink,
  MainText,
} from "./styles";

import Logo from "../../assets/images/LogoMiau.svg";

import ImageCat from "../../assets/images/catImageLogin.png";
import GoogleLogo from "../../assets/icons/googleIcon.svg";
import FacebookLogo from "../../assets/icons/facebookIcon.svg";

import { Text } from "react-native";

export default function Login() {
  return (
    <Container>
      <Logo />
      <ContainerImage>
        <Image source={ImageCat} />
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
        <StyledButtonGoogle >
          <GoogleLogo />
          <Text>Logar com o Google</Text>
        </StyledButtonGoogle>

        <StyledButtonFacebook >
          <FacebookLogo />
          <StyledText>Logar com o Facebook</StyledText>
        </StyledButtonFacebook>
      </ContainerButton>
    </Container>
  );
}