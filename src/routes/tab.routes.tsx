import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Login } from '../screens/Login';
import { Home } from '../screens/Home';

const { Navigator, Screen } = createBottomTabNavigator();

export function StackRoutes() {
    return(
       <Navigator screenOptions={{ headerShown: false }}>
            <Screen 
            name="Login" 
            component={Login}
            />

            <Screen 
            name="Home" 
            component={Home} />
       </Navigator>
    )
}