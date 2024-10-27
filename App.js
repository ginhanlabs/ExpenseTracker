import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

import ExpenseListScreen from './screens/ExpenseListScreen';
import HomeScreen from './screens/HomeScreen';
import AddExpenseScreen from './screens/AddExpenseScreen';
const Stack = createNativeStackNavigator();

export default function App({navigation}) {

  function addButtonPressedHandler(){
    console.log("add button pressed");
    navigation.navigate('AddExpense')
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
              onPress={() => navigation.navigate('AddExpense')}/>,
          })}
        />
        <Stack.Screen name="AllExpenses" 
          component={ExpenseListScreen} 
          options = {{headerShown: false}} />
        <Stack.Screen name="AddExpense"
          component={AddExpenseScreen}
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
