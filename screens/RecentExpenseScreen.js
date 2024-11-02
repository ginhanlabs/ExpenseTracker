import { Text, View , FlatList, StyleSheet} from "react-native";
import  { DUMMY_DATA }  from "../DUMMYDATA";
import Expense from "../components/Expense";
import { getDateMinusDays } from "../utils/dateUtil";
import Summary from "../components/Summary";
import NoExpenses from "../components/NoExpenses";

function RecentExpenseScreen() {
    const expenses = DUMMY_DATA;
    
    const updatedExpenses = expenses.filter(expense => {
        const today = new Date();
        const date7DaysAgo = getDateMinusDays(today, 7);
        return new Date(expense.date) >= date7DaysAgo && 
            new Date(expense.date) <= today;
        }
    );

    const content = <NoExpenses />
    if (!expenses.length) {
        return content;
    }

    return (
        <View style={styles.container}>
            <Summary data={updatedExpenses} />
            <Expense data={updatedExpenses} mode={'viewOnly'}/>
        </View>
    )
}

export default RecentExpenseScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    }
})