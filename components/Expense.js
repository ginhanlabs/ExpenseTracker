import {View, Text, StyleSheet, TextInput} from 'react-native';

function Expense() {
    return <View style={styles.container}>
        <View style={styles.expenseContainer}>
            <Text style={styles.textField}>Item name</Text>
            <TextInput style={styles.input} value="15.90" />
            
        </View>
        <View >
            <Text style={styles.textField}>Date</Text>
        </View>
    </View>
}

export default Expense;

const styles = StyleSheet.create({
    container: {
        width: '90%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        backgroundColor: 'green',
        // textAlignVertical: 'center',

    },
    expenseContainer: {
        flexDirection: 'row',
        // justifyContent: 'center',
        // textAlign: 'center',
        // alignContent: 'center',
        
       
        
    },
    textField: {
        width: '50%',
        color: 'white',
    },
    input: {
        width: '50%',
        padding: 5,
         textAlign: 'right',
         backgroundColor: 'white',
         borderRadius: 5,

    }
})