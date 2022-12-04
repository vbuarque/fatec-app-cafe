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
  ContainerButton,
} from './styles';

import { SignOut } from 'phosphor-react-native';

import { User, At } from 'phosphor-react-native';
import { useAuth } from '../../hooks/useAuth';
import { Button, Text } from 'native-base';

export function Profile() {
  const {user, signOut, appIsLoading} = useAuth();
  
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
        </ContainerUserData>
        <ContainerButton>
        <Button
            leftIcon={<SignOut size={24} color='#ffffff' />}
            onPress={signOut}
            width='100%'
            backgroundColor='#F292A9'
          >
            <Text color={'#ffffff'}>Deslogar</Text>
          </Button>
        </ContainerButton>
      </ProfileContent>
    </Container>
  );
}