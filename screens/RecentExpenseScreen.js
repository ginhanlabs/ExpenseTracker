import { Text, View , FlatList, StyleSheet} from "react-native";
import  { DUMMY_DATA }  from "../DUMMYDATA";

function RecentExpenseScreen() {

    function renderItem({item}) {
        console.log(item.description)
        return <Text>{item.description}</Text>
    }

    return (
        <View style={styles.container}>
            
            <FlatList data={DUMMY_DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}

export default RecentExpenseScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'

    }
})