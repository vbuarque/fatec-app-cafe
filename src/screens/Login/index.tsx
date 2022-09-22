import React from "react";
import { Container, Title, Image, ButtonLogin, TitleButton} from "./styles";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';

import Logo from "../../assets/images/LogoMiau.svg";

import ImageCat from "../../assets/images/catImageLogin.png";

export default function Login() {
  return (
    <Container>
      <Logo />
      <Image source={ImageCat} />
      <Title>Tome café enquanto faz carinho nos gatinhos.</Title>

      <ButtonLogin>
      <FontAwesomeIcon icon={faGoogle} color="white"/>
        <TitleButton>
          Acesse com o Google
        </TitleButton>
      </ButtonLogin>

      <ButtonLogin>
      <FontAwesomeIcon icon={faFacebookF} color="white"/>
        <TitleButton>
          Acesse com o Facebook
        </TitleButton>
      </ButtonLogin>
    </Container>
  );
}
