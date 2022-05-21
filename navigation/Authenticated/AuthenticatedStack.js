import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ManageExpense from "../../screens/ManageExpense";
import { GlobalStyles } from "../../constants/styles";
import DrawerNavigator from "./DrawerNavigator";
import IconButton from "../../components/ui/IconButton";
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
        name="DrawerNavigator"
        component={DrawerNavigator}
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
