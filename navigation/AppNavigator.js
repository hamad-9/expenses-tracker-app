import AuthenticatedStack from "./Authenticated/AuthenticatedStack";
import AuthenticationStack from "./Authentication/AuthenticationStack";
import { NavigationContainer } from "@react-navigation/native";
import { useContext } from "react";
import { AuthContext } from "../store/auth-context";

function AppNavigator() {
  const authCtx = useContext(AuthContext);

  return (
    <NavigationContainer>
      {!authCtx.isAuthenticated && <AuthenticationStack />}
      {authCtx.isAuthenticated && <AuthenticatedStack />}
    </NavigationContainer>
  );
}

export default AppNavigator;
