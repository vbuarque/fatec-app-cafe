import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
`;

export const HeaderLogo = styled.View``;

export const TitleContainer = styled.View`
  align-items: center;
`;

export const TextPink = styled.Text`
  color: #f292a9;
  font-weight: bold;
`;

export const TitleTop = styled.Text`
  font-size: 24px;
  color: #29292e;
`;

export const TitleMid = styled.Text`
  font-size: 24px;
  color: #29292e;
`;

export const TitleBottom = styled.Text`
  font-size: 24px;
  color: #29292e;
`;

export const Image = styled.Image`
  width: 256px;
  height: 277px;
`;

export const FooterButton = styled.View`
  width: 90%;
`;

export const TitleGoogle = styled.Text`
  font-size: 16px;
  color: #f8f8ff;
`;

export const TitleFacebook = styled.Text`
  font-size: 16px;
  color: #f8f8ff;
`;

export const ButtonGoogle = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  width: 100%;
  height: 48px;

  margin-bottom: 8px;
  padding: 8px 16px 8px 16px;

  background-color: #db4437;
  border-radius: 8px;

  transition: 0.2s;

  elevation: 3;
`;

export const ButtonFacebook = styled.TouchableOpacity`
flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  width: 100%;
  height: 48px;

  margin-bottom: 8px;
  padding: 8px 16px 8px 16px;

  background-color: #4267B2;

  border-radius: 8px;

  transition: 0.2s;

  elevation: 3;
`;

export const ImageContainer = styled.View``;
