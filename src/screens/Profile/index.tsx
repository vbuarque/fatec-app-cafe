import React from 'react';
import CustomHeader from '../../components/CustomHeader';
import {
  Container,
  ProfileContent,
  ContainerProfile,
  ProfileImage,
  ContainerUserData,
  UserDataName,
  UserDataEmail,
  UserDataBirthDate,
  UserDataPhone,
  UserDataWithIcon,
} from './styles';

import { User, At, Cake, Phone } from 'phosphor-react-native';

const ImgProfile = require('../../assets/images/MockImageProfileUser.jpg');

export function Profile() {
  return (
    <Container>
      <CustomHeader title='Perfil' />
      <ProfileContent>
        <ContainerProfile>
          <ProfileImage source={ImgProfile} />
        </ContainerProfile>

        <ContainerUserData>
          <UserDataWithIcon>
            <User size={24} color='#29292e' />
            <UserDataName>Vinicius Buarque</UserDataName>
          </UserDataWithIcon>

          <UserDataWithIcon>
            <At size={24} color='#29292e' />
            <UserDataEmail>vbuarquegusmao@gmail.com</UserDataEmail>
          </UserDataWithIcon>

          <UserDataWithIcon>
            <Cake size={24} color='#29292e' />
            <UserDataBirthDate>31/05/2000</UserDataBirthDate>
          </UserDataWithIcon>

          <UserDataWithIcon>
            <Phone size={24} color='#29292e' />
            <UserDataPhone>(12) 98222-9518</UserDataPhone>
          </UserDataWithIcon>

        </ContainerUserData>
      </ProfileContent>
    </Container>
  );
}