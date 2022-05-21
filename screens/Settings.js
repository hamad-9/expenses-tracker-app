import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../constants/styles";

function Settings() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24, color: "white" }}>Settings</Text>
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
