/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Loading from './page/Loading';
import TopicCheck from './page/TopicCheck';
import Notification from './page/Notification';
import Scrap from './page/Scrap';
import Nav from './page/Nav/Nav';
import React from 'react';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="TopicCheck"
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Nav" component={Nav} />
        <Stack.Screen name="Loading" component={Loading} />
        <Stack.Screen name="TopicCheck" component={TopicCheck} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="Scrap" component={Scrap} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
