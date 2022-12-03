import React from 'react';
import StackRoutes from './stack.routes';
import { NavigationContainer } from '@react-navigation/native';
import { Login } from '../screens';
import { useAuth } from '../hooks/useAuth';


export default function Routes() {
    const { user } = useAuth();

    return (
        <NavigationContainer>
            {user ? <StackRoutes /> : <Login />}
        </NavigationContainer>
    );
}