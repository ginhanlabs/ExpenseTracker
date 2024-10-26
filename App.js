// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

import AddExpenseScreen from './screens/AddExpenseScreen';
import ExpenseListScreen from './screens/ExpenseListScreen';
import HomeScreen from './screens/HomeScreen';

const Stack = createNativeStackNavigator();

export default function App({navigation}) {

  function addButtonPressedHandler(){
    console.log("add button pressed");
    navigation.navigate('AddExpense')
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({ navigation, route }) => ({
            headerTitle: 'Expense Tracker',
             headerRight: () => <Button title="+" 
              onPress={() => navigation.navigate('AddExpense')}/>,
          })}
        />
        <Stack.Screen name="AllExpenses" 
          component={ExpenseListScreen} 
          options = {{headerShown: false}}/>
      </Stack.Navigator>
      <Stack.Screen name="AddExpense"
        component={AddExpenseScreen}>
      </Stack.Screen>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
