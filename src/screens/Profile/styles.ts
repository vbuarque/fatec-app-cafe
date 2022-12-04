import styled from 'styled-components/native';
import { theme } from '../../styles/theme';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const ProfileContent = styled.View`
    flex: 1;
    width: 100%;
    height: 100%;
`;

export const ContainerProfile = styled.View`
    align-items: center;
    width: 100%;
    height:40%;
    background: ${theme.colors.primary.pink};
`;

export const ProfileImage = styled.Image`
    position: absolute;
    top: 80%;

    width: 100px;
    height: 100px;

    border-radius: 999px;

    border: 3px solid ${theme.colors.background.primary};
`;

export const UserDataWithIcon = styled.View`
    width: 100%;
    height: 50px;
    margin-bottom: 10px;
    
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;

    border-bottom-width: 1px;
`;

export const ContainerUserData = styled.View`
    align-items: center;
    justify-content: center;

    width: 100%;
    height:50%;

    padding: 0 20px;
`;

export const UserDataName = styled.Text`
    font-size: 18px;
    font-weight: ${theme.fonts.regular};
    color: ${theme.colors.text.black};
`;

export const UserDataEmail = styled.Text`
    font-size: 18px;
    font-weight: ${theme.fonts.regular};
    color: ${theme.colors.text.black};
`;

export const UserDataBirthDate = styled.Text`
    font-size: 18px;
    font-weight: ${theme.fonts.regular};
    color: ${theme.colors.text.black};
`;

export const UserDataPhone = styled.Text`
    font-size: 18px;
    font-weight: ${theme.fonts.regular};
    color: ${theme.colors.text.black};
`;


export const ContainerButton = styled.View`
    align-items: center;
    justify-content: center;

    width: 100%;
    height:10%;

    padding: 0 20px;
`;