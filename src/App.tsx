import React from 'react';
import { NativeBaseProvider } from "native-base";
import {StatusBar} from 'react-native';
import { Routes } from './routes';


export default function App() {
  return (
    <NativeBaseProvider>
      <Routes />
      <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />
    </NativeBaseProvider>
  );
}