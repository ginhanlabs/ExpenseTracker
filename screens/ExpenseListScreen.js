import { Text, View, StyleSheet} from "react-native";
import Expense from "../components/Expense";
import  { DUMMY_DATA }  from "../DUMMYDATA";
import NoExpenses from "../components/NoExpenses";
function ExpenseListScreen() {
    const expenses = DUMMY_DATA;

    
   
    return (
        <View style={styles.container}>
            {expenses.length > 0 ? <Expense data={expenses} /> : <NoExpenses /> }
        </View>
    );
  }

  return (
    <View style={styles.container}>
      {!expenses.length && noExpenses ? noExpenses :
        <FlatList
            data={expenses}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
        />
        }
    </View>
  );


export default ExpenseListScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "purple",
  },
  expenseContainer: {
    flexDirection: "row",
    padding: 3,
    marginTop:3,
    alignSelf: "stretch",
    textAlign: "center",
    backgroundColor: 'white',
  },
  descriptionContainer: {
    flexDirection: "column",
    paddingHorizontal: 15,
    paddingBottom: 5,
    marginBottom: 5,
    alignSelf: "stretch",
    backgroundColor: 'white',
    
  },
  textRow: {
    backgroundColor: "white",
    margin: 3,
    padding: 5,
    width: 170,
  },
  text: {
    padding: 3,
    color: "black",
    fontWeight: "bold",
  },
  noExpenses: {
    color: 'white',
    alignContent: 'center',
    margin: 30,
    fontSize: 14,
  }
});

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//       },
// })
