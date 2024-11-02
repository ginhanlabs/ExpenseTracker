import { Text, View, StyleSheet, TextInput, Button} from "react-native";
import { useState } from "react";
function AddExpenseScreen({navigation, route}) {
    const {mode, expense}  = route.params;

    console.log(mode);
    if (mode === 'Update') {
        console.log({expense});
    }

    const [description, setDescription] = useState();
    const [price, setPrice] = useState();
    const [itemDate, setItemDate] = useState();

    if (mode === 'Update') {
        setDescription("lunhing")
    }

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

    return(
        <View style={styles.container} >
            <Text style={styles.title}>{mode} Expense</Text>
            <View style={styles.formContainer}>
            <Text style={styles.label}>Item name:</Text>
            <TextInput name="itemName" style={styles.input}
                value={description}/>
            <Text style={styles.label}>Price:</Text>
            <TextInput name="itemPrice" style={styles.input}
               ></TextInput>
            <Text style={styles.label}>Date Purchased</Text>
            <TextInput name="itemDate" style={styles.input}
               
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

export default AddExpenseScreen;

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