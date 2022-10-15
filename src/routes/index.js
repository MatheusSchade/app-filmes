import { createDrawerNavigator } from '@react-navigation/drawer';
import * as React from 'react';
import { base1, base2, base3 } from '../constants/colors';
import Movies from '../pages/Movies';
import StackRoutes from './stackRoutes';
import { MaterialCommunityIcons } from '@expo/vector-icons'

const Drawer = createDrawerNavigator()

export default function Routes() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: base1,
          paddingTop: 20
        },
        drawerActiveBackgroundColor: base2,
        drawerActiveTintColor: base3,
        drawerInactiveTintColor: base3
      }}
    >
      <Drawer.Screen
        name="Dashboard"
        component={StackRoutes}
        options={{
          title: 'Início',
          drawerIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons
              name={focused ? 'movie-open' : `movie-outline`}
              size={size}
              color={color}
            />
          )
        }}
      />
      <Drawer.Screen
        name="Movies"
        component={Movies}
        options={{
          title: 'Meus filmes',
          drawerIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons
              name={focused ? 'archive' : `archive-outline`}
              size={size}
              color={color}
            />
          )
        }}
      />
    </Drawer.Navigator>
  )
}