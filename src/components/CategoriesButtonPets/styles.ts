import styled from 'styled-components/native';
import { theme } from '../../styles/theme';


export const Container = styled.View`
    flex: 1;
    width: 100%;
    margin-bottom: 24px;
`;

export const TitleButton = styled.Text`
    color: ${theme.colors.text.black};
    font-size: 18px;
    font-weight: ${theme.fonts.regular};
`;

export const ButtonCustom = styled.TouchableOpacity`
    width: 100%;
    height: 100px;

    background: ${theme.colors.background.primary};

    border: 1px solid ${theme.colors.primary.pink};
    border-radius: 8px;
`;

export const ImageCustom = styled.Image`
    width: 100%;
    height: 100%;
    
    border-radius: 7px;
`;