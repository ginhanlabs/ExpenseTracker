import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ExpenseListScreen from './ExpenseListScreen';
import RecentExpenseScreen from './RecentExpenseScreen';

const Tab = createBottomTabNavigator();

function HomeScreen() {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarStyle: { height: 70, backgroundColor: "#3c024e" },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

          if (route.name === 'Recent') {
            iconName = focused
              ? 'list-circle'
              : 'list-circle-outline';
          } else if (route.name === 'AllExpenses') {
            iconName = focused ? 'grid' : 'grid-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#082910',
        tabBarInactiveTintColor: '#667e6c',
      })}
    >
      <Tab.Screen name="Recent" component={RecentExpenseScreen}
        options={{
          title: 'Recent' 
        }} />
      <Tab.Screen name="AllExpenses" component={ExpenseListScreen}
        options={{
          headerShown: false 
        }} />
    </Tab.Navigator>)
};

export default HomeScreen;