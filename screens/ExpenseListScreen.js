import { Text, View, StyleSheet} from "react-native";
import Expense from "../components/Expense";

function ExpenseListScreen() {
    const expenses = [];

    const noExpenses = <Text>There are no expenses.</Text>; 
   
    return (
        <View style={styles.container}>
            {expenses.length > 0 ? <Expense /> : noExpenses }
        </View>
    )
}

export default ExpenseListScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
})
