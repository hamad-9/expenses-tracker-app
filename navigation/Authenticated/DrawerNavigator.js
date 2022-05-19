import { createDrawerNavigator } from "@react-navigation/drawer";
import Profile from "../../screens/Profile";
import Settings from "../../screens/Settings";
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
