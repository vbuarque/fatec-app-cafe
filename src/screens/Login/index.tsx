import React from "react";
import {
  Container,
  HeaderLogo,
  TitleContainer,
  TitleTop,
  TitleMid,
  TitleBottom,
  TextPink,
  Image,
  FooterButton,
  ButtonGoogle,
  ButtonFacebook,
  TitleFacebook,
  TitleGoogle,
  ImageContainer,
} from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";

import Logo from "../../assets/images/LogoMiau.svg";

import ImageCat from "../../assets/images/catImageLogin.png";

export default function Login() {
  return (
    <Container>
      <HeaderLogo>
        <Logo />
      </HeaderLogo>

      <ImageContainer>
        <Image source={ImageCat} />
      </ImageContainer>

      <TitleContainer>
        <TitleTop>
        Tome um <TextPink>cafézinho</TextPink> enquanto
        </TitleTop>

        <TitleMid>
          faz <TextPink>carinho</TextPink> nos
        </TitleMid>

        <TitleBottom>
        <TextPink>gatinhos.</TextPink>
        </TitleBottom>
      </TitleContainer>

      <FooterButton>
        <ButtonGoogle activeOpacity={0.8} >
          <FontAwesomeIcon icon={faGoogle} color="white" />
          <TitleGoogle>Acesse com o Google</TitleGoogle>
        </ButtonGoogle>

        <ButtonFacebook activeOpacity={0.8}>
          <FontAwesomeIcon icon={faFacebookF} color="white" />
          <TitleFacebook>Acesse com o Facebook</TitleFacebook>
        </ButtonFacebook>
      </FooterButton>
    </Container>
  );
}
