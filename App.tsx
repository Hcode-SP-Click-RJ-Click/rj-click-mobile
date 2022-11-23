import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Screen, Screens } from './src/routes';
import {
  FavoritesScreen,
  HomeScreen,
  ProfileScreen,
  TripScreen,
} from './src/screens';
import { Colors } from './src/values/colors';

const Tab = createMaterialBottomTabNavigator<typeof Screens>();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        barStyle={{ backgroundColor: Colors.theme }}
        activeColor={Colors.primary}
        inactiveColor={Colors.themeContrast}
        screenOptions={{ title: '' }}
      >
        <Tab.Screen
          name={Screen.Home}
          component={HomeScreen}
          options={{
            tabBarIcon: 'home',
          }}
        />
        <Tab.Screen
          name={Screen.Trip}
          component={TripScreen}
          options={{
            tabBarIcon: 'bag-suitcase',
          }}
        />
        <Tab.Screen
          name={Screen.Favorites}
          component={FavoritesScreen}
          options={{
            tabBarIcon: 'cards-heart',
          }}
        />
        <Tab.Screen
          name={Screen.Profile}
          component={ProfileScreen}
          options={{
            tabBarIcon: 'account',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
