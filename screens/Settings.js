import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../constants/styles";
import IconButton from "../components/ui/IconButton";
import { useContext } from "react";
import { AuthContext } from "../store/auth-context";
function Settings() {
  const authCtx = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24, color: "white" }}>Settings</Text>

      <View>
        <IconButton
          icon="power-outline"
          size={24}
          color="white"
          onPress={authCtx.logout}
        />
      </View>
    </View>
  );
}

export default Settings;
const styles = StyleSheet.create({
  container: {
    ...GlobalStyles.screenContainer,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
