import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer} from '@react-navigation/native'
import {MainStackNavigator} from './navigation/MainStackNavigator'
import { StyleSheet, Text, View, Appearance } from 'react-native';

export default function App() {

  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
