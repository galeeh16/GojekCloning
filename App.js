import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/Home';
import GoFoodPages from './pages/GoFoodPages';
import GoCarPages from './pages/GoCarPages';
import GoBluebirdPages from './pages/GoBluebirdPages';
import GoRidePages from './pages/GoRidePages';

const Stack = createStackNavigator();

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{title: 'Home', headerShown: false}} />
        <Stack.Screen name="GoRide" component={GoRidePages} options={{
          title: 'GoRide', 
        }} />
        <Stack.Screen name="GoFood" component={GoFoodPages} options={{
          title: 'GoFood',
          headerStyle: {
            elevation: 0
          },
          gestureDirection: 'horizontal'
        }} />
        <Stack.Screen name="GoCar" component={GoCarPages} options={{
          title: 'GoCar',
        }} />
        <Stack.Screen name="GoBluebird" component={GoBluebirdPages} options={{
          title: 'GoBluebird',
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;