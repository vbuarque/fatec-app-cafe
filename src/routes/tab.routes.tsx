import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../screens/Home";
import { CandyStore } from "../screens/Candys";
import { Profile } from "../screens/Profile";
import { Adopt } from "../screens/Adopt";
import { RootTabParamList } from "./types";

const { Navigator, Screen } = createBottomTabNavigator<RootTabParamList>();

export function BottomTabRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="HomeTab" component={Home} />
      <Screen name="AdoptTab" component={Adopt} />
      <Screen name="CandyStoreTab" component={CandyStore} />
      <Screen name="ProfileTab" component={Profile} />
    </Navigator>
  );
}
