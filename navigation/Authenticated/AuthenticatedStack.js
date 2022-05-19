import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ManageExpense from "../../screens/ManageExpense";

import { GlobalStyles } from "../../constants/styles";
import BottomTabNavigator from "./BottomTabNavigator";

const Stack = createNativeStackNavigator();

function AuthenticatedStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen
        name="BottomTabNavigator"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ManageExpense"
        component={ManageExpense}
        options={{
          presentation: "modal",
        }}
      />
    </Stack.Navigator>
  );
}

export default AuthenticatedStack;
