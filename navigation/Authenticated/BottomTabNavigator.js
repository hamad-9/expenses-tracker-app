import RecentExpenses from "../../screens/RecentExpenses";
import AllExpenses from "../../screens/AllExpenses";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import IconButton from "../../components/ui/IconButton";
import { GlobalStyles } from "../../constants/styles";
const BottomTabs = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
      }}
    >
      <BottomTabs.Screen
        name="RecentExpenses"
        component={RecentExpenses}
        options={{
          tabBarLabel: "Recent",
          tabBarLabelStyle: { fontSize: 18 },
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="hourglass" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={{
          tabBarLabel: "All",
          tabBarLabelStyle: { fontSize: 18 },
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" size={size} color={color} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
}
export default BottomTabNavigator;
