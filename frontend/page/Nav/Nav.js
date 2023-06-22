import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
// import { StyleSheet } from 'react-native';
import Dash from './Dash';
import Job from './Job';
import YouthPolicy from './YouthPolicy';
import Setting from './Setting';

const Tab = createBottomTabNavigator();

const Nav = () => {
  return (
    <Tab.Navigator initialRouteName="Dash">
      <Tab.Screen name="Dash" component={Dash} />
      <Tab.Screen name="Job" component={Job} />
      <Tab.Screen name="YouthPolicy" component={YouthPolicy} />
      <Tab.Screen name="Setting" component={Setting} />
    </Tab.Navigator>
  );
};

// const styles = StyleSheet.create({});

export default Nav;
