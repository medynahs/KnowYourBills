import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
// import {Host} from 'react-native-portalize';
import AppNavigation from './src/navigation';
import Dashboard from './src/pages/Dashboard';

const App = () => {
  
  return (
    <Dashboard/>
  )
    
};

export default App;