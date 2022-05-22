import { createDrawerNavigator } from "@react-navigation/drawer";
import Profile from "../../screens/Profile";
import Settings from "../../screens/Settings";
import BottomTabNavigator from "./BottomTabNavigator";
import { GlobalStyles } from "../../constants/styles";
import IconButton from "../../components/ui/IconButton";
import { View } from "react-native";
import { AuthContext } from "../../store/auth-context";
import { useContext } from "react";
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  const authCtx = useContext(AuthContext);
  return (
    <Drawer.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: "white",
        headerRight: ({ tintColor }) => (
          <IconButton
            icon="add"
            size={24}
            color={tintColor}
            onPress={() => {
              navigation.navigate("ManageExpense");
            }}
          />
        ),
        drawerContentStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: "white",
      })}
    >
      <Drawer.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          headerRight: null,
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{
          headerRight: null,
        }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
