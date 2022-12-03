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
  UserDataWithIcon,
} from './styles';

import { User, At } from 'phosphor-react-native';
import { useAuth } from '../../hooks/useAuth';
import { Button, Text } from 'native-base';

export function Profile() {
  const {user, signOut} = useAuth();
  
  return (
    <Container>
      <CustomHeader title='Perfil' />
      <ProfileContent>
        <ContainerProfile>
          <ProfileImage source={{uri: user.avatarUrl}} />
        </ContainerProfile>

        <ContainerUserData>
          <UserDataWithIcon>
            <User size={24} color='#29292e' />
            <UserDataName>{user.name}</UserDataName>
          </UserDataWithIcon>

          <UserDataWithIcon>
            <At size={24} color='#29292e' />
            <UserDataEmail>{user.email}</UserDataEmail>
          </UserDataWithIcon>

          <Button onPress={signOut}>
            <Text>Deslogar</Text>
          </Button>

        </ContainerUserData>
      </ProfileContent>
    </Container>
  );
}