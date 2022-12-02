import styled from "styled-components/native";
import { theme } from "../../styles/theme";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  flex-direction: row;

  margin-bottom: 24px;
  padding: 16px;

  background: ${theme.colors.background.primary};

  border: 1px solid ${theme.colors.border.primary};
  border-radius: 30px;
`;

export const LeftSide = styled.View`
  width: 50%;
`;

export const ContentLeftSide = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;

    
`;

export const ImageItem = styled.Image`
    width: 100px;
    height: 100px;
    border-radius: 20px;

    border: 1px solid ${theme.colors.primary.pink};
`;

export const RightSide = styled.View`
  width: 60%;
`;

export const ContentRightSide = styled.View`
    flex: 1;
`;

export const TitleItem = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: ${theme.colors.text.black};
`;

export const SubtitleItem = styled.Text`
    font-size: 16px;
    color: #d1d1d1;
`;

export const CashItem = styled.Text`
    font-size: 25px;
    font-weight: bold;
    color: ${theme.colors.text.black};

    margin-top: 8px;
`;
