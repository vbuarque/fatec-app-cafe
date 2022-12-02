import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { RootStackParamList } from "./types";
import { 
  Adopt,
  CandyStore,
  Pets,
  Profile,
  Login,
  Coffee,
  FoodPets,
  ToysPets,
  HealthPets,
  ClothesPets
} from '../screens';

import ShowBottomTabs from './tab.routes';

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

export default function StackRoutes() {
  return (
    <Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
      <Screen name="Login" component={Login} />
      <Screen name="Home" component={ShowBottomTabs} />
      <Screen name="Adopt" component={Adopt} />
      <Screen name="CandyStore" component={CandyStore} />
      <Screen name="Profile" component={Profile} />
      <Screen name="Pets" component={Pets} />
      <Screen name="Coffee" component={Coffee} />
      <Screen name="FoodPets" component={FoodPets} />
      <Screen name="ToysPets" component={ToysPets}/>
      <Screen name="HealthPets" component={HealthPets} />
      <Screen name="ClothesPets" component={ClothesPets} />
    </Navigator>
  );
}