import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PlayersScreen from './screens/players';
import DetailsScreen from './screens/dscreen';
import AboutScreen from './screens/about';
import Header from './shared/header';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Players">
        <Stack.Screen
          name="Players"
          component={PlayersScreen}
          options={({ navigation }) => ({
            headerRight: () => <Header navigation={navigation} />,
          })}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
