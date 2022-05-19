import { View, Text, StyleSheet } from "react-native";
import Input from "../components/ManageExpense/Input";
import { GlobalStyles } from "../constants/styles";

function Login() {
  return (
    <View>
      <Input></Input>
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  container: {
    ...GlobalStyles.screenContainer,
  },
});
