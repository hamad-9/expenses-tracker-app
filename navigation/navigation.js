import AuthenticatedStack from "./Authenticated/AuthenticatedStack";
import AuthenticationStack from "./Authentication/AuthenticationStack";

function Navigation() {
  return <AuthenticatedStack />;
}

export default Navigation;
