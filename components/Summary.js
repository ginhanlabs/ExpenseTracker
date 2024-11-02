import { Text, View , StyleSheet } from "react-native";

function Summary({data}) {
0
    const summedExpenses = data.reduce(
    (accumulator, data) => accumulator + parseInt(data.amount),
    0,
    );


    return (
        <View style={styles.container}>
            <Text>Summary</Text>
            <Text>${summedExpenses}</Text>
        </View>
    )
}

export default Summary;

const styles = StyleSheet.create({
    container: {
        margin: 10,
        borderWidth: 1,
        width: '90%',
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})