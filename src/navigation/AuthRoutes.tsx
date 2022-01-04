import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthScreensParams} from '../Types';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';

const Stack = createStackNavigator<AuthScreensParams>();

const MainStackNavigator: React.FC = () => (
  <Stack.Navigator initialRouteName="Welcome">
    <Stack.Screen
      name="Login"
      component={Login}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="SignUp"
      component={SignUp}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

export default MainStackNavigator;