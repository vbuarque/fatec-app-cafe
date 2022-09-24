import React from 'react';
import {StatusBar} from 'react-native';
import Login from './screens/Login';

export default function App() {
  return (
    <>
      <Login />
      <StatusBar barStyle="dark-content" backgroundColor="#f8f8ff" />
    </>
  );
}