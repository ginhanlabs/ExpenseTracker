import { Text, View, StyleSheet, FlatList} from "react-native";
import { DUMMY_DATA } from "../DUMMYDATA";
import { useLayoutEffect, useState } from "react";

function ExpenseListScreen({ expenseData }) {
    const [expenses, setExpenses] = useState([]);

    useLayoutEffect(() => {
      if (expenseData) {
        console.log(expenseData.length);
        setExpenses(expenseData);
      } else {
        setExpenses(DUMMY_DATA);
      }
    }, [expenseData, expenses]);

  const noExpenses = <Text style={styles.noExpenses}>There are no expenses.</Text>;

  function renderItem({ item }) {
    return (
      <View style={styles.container}>
        <View style={styles.expenseContainer}>
          <View style={styles.textRow}>
            <Text>Amount:</Text>
            <Text style={styles.text}>{item.amount}</Text>
          </View>
          <View style={styles.textRow}>
            <Text>Date:</Text>
            <Text style={styles.text}>{item.date}</Text>
          </View>
        </View>
        <View style={styles.descriptionContainer}>
          <Text>Description:</Text>
          <Text style={styles.text}>{item.description}</Text>
        </View>
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
}


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
