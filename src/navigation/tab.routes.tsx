import React from 'react';
import { Text } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { RootTabParamList } from "./types";
import { House, Cookie, Heart, User } from 'phosphor-react-native';

import { Adopt, CandyStore, Home, Profile } from '../screens';

const Tab = createBottomTabNavigator<RootTabParamList>();

export default function ShowBottomTabs() {
  return(
    <Tab.Navigator 
      screenOptions={{
        unmountOnBlur: true,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 50,
        },
      }}
    >
      <Tab.Screen 
      name="HomeTab" 
      component={Home} 
      options={{
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <>
            <House size={25} color={focused ? '#F292A9' : '#29292e'} />
            <Text
              allowFontScaling={false}
              style={{
                color: focused ? '#F292A9' : '#29292e',
                fontSize: 11,
                textAlign: 'center',
                fontWeight: focused ? 'bold' : 'normal',
              }}
            >Ínicio</Text>
          </>
        )
      }}
      />

      <Tab.Screen 
      name="AdoptTab" 
      component={Adopt} 
      options={{
         headerShown: false,
        tabBarIcon: ({ focused }) => (
          <>
            <Heart size={25} color={focused ? '#F292A9' : '#29292e'} />
            <Text
              allowFontScaling={false}
              style={{
                color: focused ? '#F292A9' : '#29292e',
                fontSize: 11,
                textAlign: 'center',
                fontWeight: focused ? 'bold' : 'normal',
              }}
            >Adoção</Text>
          </>
        )
      }}
      />

      <Tab.Screen 
      name="CandyStoreTab" 
      component={CandyStore} 
      options={{
         headerShown: false,
        tabBarIcon: ({ focused }) => (
          <>
            <Cookie size={25} color={focused ? '#F292A9' : '#29292e'} />
            <Text
              allowFontScaling={false}
              style={{
                color: focused ? '#F292A9' : '#29292e',
                fontSize: 11,
                textAlign: 'center',
                fontWeight: focused ? 'bold' : 'normal',
              }}
            >Doces</Text>
          </>
        )
      }}
      />

      <Tab.Screen 
      name="ProfileTab" 
      component={Profile}
      options={{
         headerShown: false,
        tabBarIcon: ({ focused }) => (
          <>
            <User size={25} color={focused ? '#F292A9' : '#29292e'} />
            <Text
              allowFontScaling={false}
              style={{
                color: focused ? '#F292A9' : '#29292e',
                fontSize: 11,
                textAlign: 'center',
                fontWeight: focused ? 'bold' : 'normal',
              }}
            >Perfil</Text>
          </>
        )
      }}
      />

    </Tab.Navigator>
  )
}