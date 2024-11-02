import { Text, View, StyleSheet } from "react-native";

function NoExpenses(){
    const noExpenses = <Text>There are no expenses.</Text>; 
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
             {noExpenses}
            </Text>
        </View>
    )
}

export default NoExpenses;

const styles=StyleSheet.create({
    container: {
        margin: 20,
    },
    text: {
        textAlign: 'center',
    }
})