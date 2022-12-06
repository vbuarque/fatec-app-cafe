import React from 'react';
import {StatusBar} from 'react-native';
import { NativeBaseProvider } from "native-base";

import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';

import Routes from './routes';
import { Loading } from './components/Loading';
import { AuthContextProvider } from './context/authContext';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
  });

  return (
    <NativeBaseProvider>
      <AuthContextProvider>
        {fontsLoaded ? <Routes /> : <Loading/>}
      </AuthContextProvider>
      <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />
    </NativeBaseProvider>
  );
}