import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function ExpensesSummery({ expenses, periodName }) {
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);
  return (
    <View style={styles.container}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.sum}>${expensesSum.toFixed(2)}</Text>
    </View>
  );
}

export default ExpensesSummery;

const styles = StyleSheet.create({
  container: {
    ...GlobalStyles.viewerContainer,
    ...GlobalStyles.shadowGenerator,
    backgroundColor: GlobalStyles.colors.primary50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  period: {
    fontSize: 12,
    color: GlobalStyles.colors.primary400,
  },
  sum: {
    fontSize: 16,
    fontWeight: "bold",
    color: GlobalStyles.colors.primary500,
  },
});
