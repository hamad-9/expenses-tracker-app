import { StatusBar } from "expo-status-bar";

import AsyncStorage from "@react-native-async-storage/async-storage";
import ExpensesContextProvider from "./store/expenses-context";
import AppNavigator from "./navigation/AppNavigator";
import AuthContextProvider from "./store/auth-context";
import { AuthContext } from "./store/auth-context";

import { useContext, useEffect } from "react";

function RootNavigator() {
  // const [isTryingLogin, setIsTryingLogin] = useState(true);
  const authCtx = useContext(AuthContext);
  useEffect(() => {
    async function fetchToken() {
      const storedToken = await AsyncStorage.getItem("token");

      if (storedToken) {
        authCtx.authenticate(storedToken);
      }
      // setIsTryingLogin(false);
    }
    fetchToken();
  }, []);

  // if (isTryingLogin) {
  //   return <AppLoading />;
  // }

  return <AppNavigator />;
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <ExpensesContextProvider>
        <AuthContextProvider>
          <RootNavigator />
        </AuthContextProvider>
      </ExpensesContextProvider>
    </>
  );
}
