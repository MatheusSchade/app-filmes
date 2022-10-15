import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import Home from '../pages/Home';

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
}