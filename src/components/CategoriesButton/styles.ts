import styled from 'styled-components/native';
import {theme} from '../../styles/theme';

export const CategoriesStyledButton = styled.TouchableOpacity`
    justify-content: space-between;
    align-items: center;
    flex-direction: row;

    padding: 16px;
    width: 180px;
    height: 56px;

    background-color: ${theme.colors.background.secondary};
    border-radius: 8px;
    border: 1px solid ${theme.colors.primary.pink};
`;

export const IconTitle = styled.Text`
    font-size: 16px;
    color: ${theme.colors.text.pink};
    font-weight: 400;
`;