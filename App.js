import React from 'react';
//import { createAppContainer, createSwitchNavigator,} from 'react-navigation';
//import { createBottomTabNavigator } from 'react-navigation-tabs';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './Screens/LoginScreen'

export default function App() {
  return (
    <LoginScreen/>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});