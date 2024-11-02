import {View, Text, StyleSheet, FlatList, Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';
function Expense({navigtor, data, mode}) {
    const navigation = useNavigation();
    function handlePress(item){
        if (mode !== 'viewOnly') {
            navigation.navigate('AddExpense',{
                expense: {item},
                mode: 'Update',
              })
        }
    }

    function renderItem({item}) {
       return (
        <Pressable 
            onPress={() => handlePress(item)}>
        <View style={styles.container}>
            <View style={styles.expenseContainer}>
                <Text style={styles.textField}>{item.date}</Text>
                <Text style={[styles.textField, styles.amount]}>
                    {item.amount}
                </Text>
            </View>
            <View >
                <Text style={styles.textField}>{item.description}</Text>
            </View>
        </View>
        </Pressable>
    )}

    return <View>

        <FlatList data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        />
    </View> 
}

export default Expense;

const styles = StyleSheet.create({
    container: {
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        backgroundColor: 'green',
        margin: 10,
        

    },
    expenseContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%', 
    },
    textField: {
        fontSize: 16,
        color: 'white',
        margin: 3,
    },
    amount: {
     width: 100,
     color: 'black',
     padding: 2,
     fontSize: 16,
     backgroundColor: 'white',
    },
    
})