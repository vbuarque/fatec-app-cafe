import styled from 'styled-components/native';
import {theme} from '../../styles/theme';

export const CoffeComponent = styled.View`
    width: 104px;
    height: 183px;

    background-color: ${theme.colors.background.secondary};

    border-radius: 8px;
    border: 1px solid ${theme.colors.primary.pink};

    margin-right: 8px;
`;

export const ImageCoffee = styled.Image`
    width: 100%;
    height: 100%;

    border-radius: 8px;
`;

