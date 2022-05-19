import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../constants/styles";

function Profile() {
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
    </View>
  );
}

export default Profile;
const styles = StyleSheet.create({
  container: {
    ...GlobalStyles.container,
  },
});
