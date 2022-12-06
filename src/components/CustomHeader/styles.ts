import styled from 'styled-components/native';
import {theme} from '../../styles/theme';

export const Header = styled.View`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 40px 20px 20px 20px;
    width: 100%;

    border-bottom-width: 1px;
    border-bottom-color: ${theme.colors.border.primary};
    background-color: ${theme.colors.background.primary};
`;

export const HeaderTitle = styled.Text`
    font-size: 20px;
    font-family: ${theme.fonts.bold};
    color: ${theme.colors.text.pink};
`;