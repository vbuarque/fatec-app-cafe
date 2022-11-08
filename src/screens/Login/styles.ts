import styled from "styled-components/native";
import {theme} from '../../styles/theme';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: 30px;

  background-color: ${theme.colors.background};
`;

export const Image = styled.Image`
  width: 256px;
  height: 277px;
`;

export const ContainerImage = styled.View`
`;

export const StyledButtonGoogle = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;

  width: 100%;
  height: 48px;
  
  background-color: #FFFFFF;

  border-radius: 8px;
  border: 1px solid #e1e1e1;

  margin-bottom: 10px;
  padding: 0 20px;
  `;

export const StyledButtonFacebook = styled.TouchableOpacity`
flex-direction: row;
justify-content: space-between;
align-items: center;

width: 100%;
height: 48px;

background-color: #1877F2;

border-radius: 8px;
border: 1px solid #e1e1e1;

color: #FFFFFF;

margin-bottom: 10px;
padding: 0 20px;
`;

export const StyledText = styled.Text`
  color: #ffffff;
`;

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