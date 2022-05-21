import { View, Text, StyleSheet } from "react-native";
import { color } from "react-native-reanimated";
import { GlobalStyles } from "../constants/styles";

function Profile() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24, color: "white" }}>Profile</Text>
    </View>
  );
}

export default Profile;
const styles = StyleSheet.create({
  container: {
    ...GlobalStyles.screenContainer,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
