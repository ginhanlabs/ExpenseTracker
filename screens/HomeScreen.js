import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ExpenseListScreen from './ExpenseListScreen';
import RecentExpenseScreen from './RecentExpenseScreen';

const Tab = createBottomTabNavigator();

function HomeScreen(){
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarStyle: { height: 70, backgroundColor: "#3c024e" },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Recent") {
              iconName = focused ? "list-circle" : "list-circle-outline";
            } else if (route.name === "AllExpenses") {
              iconName = focused ? "grid" : "grid-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#cb89d2",
          tabBarInactiveTintColor: "#7f6791",
        })}
      >
        <Tab.Screen
          name="Recent"
          component={RecentExpenseScreen}
          options={{
            headerShown: false,
            tabBarLabel: "Recent",
            tabBarShowLabel: true,
          }}
        />
        <Tab.Screen
          name="AllExpenses"
          component={ExpenseListScreen}
          options={{
            headerShown: false,
            tabBarLabel: "Recent",
            tabBarShowLabel: true,
          }}
        />
      </Tab.Navigator>
    );
}

export default HomeScreen;