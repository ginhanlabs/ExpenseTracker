import { Text, View , FlatList, StyleSheet} from "react-native";
import  { DUMMY_DATA }  from "../DUMMYDATA";
import ExpenseListScreen from "./ExpenseListScreen";

function RecentExpenseScreen() {
    // todo filtering to show only before 7 days
    const expenseData = [
      { id: "01", description: "Lunch", amount: "24.22", date: "2024-10-24" },
      { id: "02", description: "Lunch", amount: "24.22", date: "2024-10-24" },
    ];
    return (
      <View style={styles.container}>
        <ExpenseListScreen expenseData={expenseData} />
      </View>
    );
}

export default RecentExpenseScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "purple",
  },
});