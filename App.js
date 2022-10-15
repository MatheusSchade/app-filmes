import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import 'react-native-gesture-handler';
import Routes from './src/routes/index';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor='white' hidden/>
      <Routes />
    </NavigationContainer>
  );
}