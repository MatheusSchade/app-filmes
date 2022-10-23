import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import Home from '../pages/Home';
import Detail from '../pages/Detail';
import Search from '../pages/Search';
import { base5, base3 } from '../constants/colors';

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
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{
          headerShown: false,
          title: 'Detalhes'
        }}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          headerTintColor: base3,
          title: 'Sua busca',
          headerTitleStyle: {
            color: base3
          },
          headerStyle: {
            backgroundColor: base5
          },
        }}
      />
    </Stack.Navigator>
  );
}