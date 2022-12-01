import React from 'react';
import { NativeBaseProvider } from "native-base";
import {StatusBar} from 'react-native';
import Routes from './navigation';


export default function App() {
  return (
    <NativeBaseProvider>
      <Routes />
      <StatusBar barStyle="dark-content" backgroundColor={'#F8f8f8'} />
    </NativeBaseProvider>
  );
}