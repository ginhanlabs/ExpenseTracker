import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

import ExpenseListScreen from './screens/ExpenseListScreen';
import HomeScreen from './screens/HomeScreen';
import ManageExpenseScreen from './screens/ManageExpenseScreen';
import { DUMMY_DATA } from './DUMMYDATA';
const Stack = createNativeStackNavigator();

export default function App({navigation}) {

  function addButtonPressedHandler(){
    console.log("add button pressed");
    navigation.navigate('ManageExpense')
  }

  return (
    // <SafeAreaView style={styles.safeArea}>
    //  <StatusBar
    //       animated={true}
    //       backgroundColor="green"
    //       // barStyle={statusBarStyle}
    //       // showHideTransition={statusBarTransition}
    //       // hidden={hidden}
    //     />
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({ navigation }) => ({
            headerTitle: 'Expense Tracker',
             headerRight: () => <Button title="+" 
              onPress={() => navigation.navigate('ManageExpense', {
                mode: 'Add'
              })}/>
          })}
        />
        <Stack.Screen name="AllExpenses" 
          component={ExpenseListScreen} 
          options = {{headerShown: false}} />
        <Stack.Screen name="ManageExpense"
          component={ManageExpenseScreen }
          options = {{headerShown: false}} />
      </Stack.Navigator>
  </NavigationContainer>
  // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {

  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
