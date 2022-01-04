import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {DefaultScreensParams} from '../Types';
import Dashboard from '../pages/Dashboard';

const Stack = createStackNavigator<DefaultScreensParams>();

const HomeStackNavigator: React.FC = () => (
  <Stack.Navigator initialRouteName="Dashboard">
    <Stack.Screen
      name="Dashboard"
      component={Dashboard}
      options={{
        headerShown: false,
      }}
    />

  </Stack.Navigator>
);

export default HomeStackNavigator;