import styled from 'styled-components/native';
import {theme} from '../../styles/theme';

export const Container = styled.View`
    flex: 1;
    height: 100%;
    background-color: ${theme.colors.background.primary};
    padding: 32px 18px;
`;

export const Header = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    height: 80px;
    width: 100%;
`;

export const TextUserName = styled.Text`
    font-size: 24px;
    font-weight: bold;
    color: ${theme.colors.secondary};
`;

export const ImageProduct = styled.Image`
    width: 100%;
    height: 144px;

    border: 1px solid ${theme.colors.primary.pink};
    border-radius: 8px;

    margin: 24px 0 24px 0;
`;

export const Head = styled.Text`
    font-size: 16px;
    font-weight: bold;

    margin-bottom: 8px;
    color: ${theme.colors.secondary};
`;

export const Categories = styled.View``;

export const GridButton = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

export const ButtonWidth = styled.View`
    width: 45%;
    margin-bottom: 24px;
`;

export const CoffeeSlider = styled.ScrollView`
    width: 100%;
    height: 100%;
`;