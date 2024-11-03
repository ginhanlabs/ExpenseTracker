import { Text, View, StyleSheet, TextInput, Button} from "react-native";
import { useState } from "react";
function ManageExpenseScreen({navigation, route}) {
    const {mode, data}  = route.params;
    const [expenseData, setExpenseData] = useState({
        amount: {
            value: data ? data.amount: '',
            isValid: true,
          },
          date: {
            value: data ? data.date : '',
            isValid: true,
          },
          description: {
            value: data ? data.description : '',
            isValid: true,
          },
    })

    if (mode === 'Update') {
        console.log(" works " + data.amount);
    }

    // const [description, setDescription] = useState();
    // const [price, setPrice] = useState();
    // const [itemDate, setItemDate] = useState();

    // if (mode === 'Update') {
    //     setExpenseData({description: 'blah'})
    // }

    function cancelHandler() {
        console.log("cancel");
        navigation.navigate('Home')
    }

    function titleChangeHandler(event) {
        console.log(event.target.value);
    }

    // function submitForm(event){
    //     event.preventDefault();
    //     console.log("submitted");
    // }

    return (
        <View style={styles.container} >
            <Text style={styles.title}>{mode} Expense</Text>
            <View style={styles.formContainer}>
            <Text style={styles.label}>Description:</Text>
          <TextInput style={styles.input}
                value={expenseData.amount.value} />
              <Text style={styles.label}>Amount:</Text> 
            <TextInput style={styles.input}
                value={expenseData.amount.value}
               ></TextInput>
            <Text style={styles.label}>Date Purchased</Text>
            <TextInput style={styles.input}
               value={expenseData.date.value}
            ></TextInput> 
            
                <View style={styles.buttonsContainer}>
                    <Button title="Cancel" 
                        style={styles.button}
                        onPress={cancelHandler} />
                    <Button title="Submit" 
                        style={styles.button}
                        />
                </View>
            </View>
            
        </View>
    )
}

export default ManageExpenseScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'orange',
        // alignItems: 'center',
        justifyContent: 'center',
      },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 15,
        textAlign:'center'
    },
    formContainer: {
        borderBlockColor: 'black',
        borderWidth: 1,
        margin: 15,
        padding: 10,

    },
    label: {
        fontSize: 20,
        fontWeight: 'bold',
       
        // justifyContent: 'flex-start'
        // textAlign: 'left',

    },
    input: {
        backgroundColor: 'white',
        borderRadius: 4,
        padding: 4,
        width: '80%',
        marginBottom: 15,

    },
    buttonsContainer: {
        marginTop: 20,
        flexDirection: 'row',
       margin: 'auto',
        columnGap: 50,
    },

})