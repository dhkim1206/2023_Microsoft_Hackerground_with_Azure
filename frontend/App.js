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
import Dash from './page/Nav/Dash';
import Job from './page/Nav/Job';
import YouthPolicy from './page/Nav/YouthPolicy';
import Setting from './page/Nav/Setting';
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
        <Stack.Screen name="Dash" component={Dash} />
        <Stack.Screen name="Job" component={Job} />
        <Stack.Screen name="YouthPolicy" component={YouthPolicy} />
        <Stack.Screen name="Setting" component={Setting} />
        <Stack.Screen name="Loading" component={Loading} />
        <Stack.Screen name="TopicCheck" component={TopicCheck} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="Scrap" component={Scrap} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
