import { createDrawerNavigator } from "@react-navigation/drawer";
import Profile from "../../screens/Profile";
import Settings from "../../screens/Settings";
import BottomTabNavigator from "./BottomTabNavigator";
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="BottomTabNavigator"
        component={BottomTabNavigator}
        // options={{ headerShown: false }}
      />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
