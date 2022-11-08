import styled from 'styled-components/native';
import {theme} from '../../styles/theme';

export const Container = styled.View`
    flex: 1;
    padding: 18px;
    background-color: ${theme.colors.background.primary};
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
    color: #29292E;
`;

export const ImageProduct = styled.Image`
    width: 100%;
    height: 144px;

    border: 1px solid #F292A9;
    border-radius: 8px;

    margin: 24px 0 24px 0;
`;

export const Head = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #29292E;
`;

export const Categories = styled.View`
    justify-content: center;
    align-items: center;
    margin: 24px 0 0 0;
`;

export const GridButton = styled.View`
    justify-content: center;
    align-items: center;
    flex-direction: row;
    width: 100%;
    
    margin-bottom: 24px;
`;

export const CoffeeSlider = styled.ScrollView`
    margin-top: 24px;
`;