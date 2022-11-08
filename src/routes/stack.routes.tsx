import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { RootStackParamList } from "./types";
import { Login } from "../screens/Login";
import { BottomTabRoutes } from "./tab.routes";

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

export function StackRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Login" component={Login} />

      <Screen name="Home" component={BottomTabRoutes} />

      <Screen name="CandyStore" component={BottomTabRoutes} />

      <Screen name="Adopt" component={BottomTabRoutes} />

      <Screen name="Profile" component={BottomTabRoutes} />
    </Navigator>
  );
}
