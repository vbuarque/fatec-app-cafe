import styled from "styled-components/native";
import {theme} from '../../styles/theme';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: 60px 18px 16px 18px;

  background-color: ${theme.colors.background.primary};
`;

export const ImageLogin = styled.Image`
  width: 256px;
  height: 277px;
`;

export const ContainerImage = styled.View``;

export const ContainerButton = styled.View`
  width: 100%;
`;

export const ContainerText = styled.View`
  width: 100%;
  align-items: center;
`;

export const TextPink = styled.Text` 
  font-size: 24px;
  font-weight: bold;
  color: #F292A9;
`;

export const MainText = styled.Text`
  font-size: 24px;
`;